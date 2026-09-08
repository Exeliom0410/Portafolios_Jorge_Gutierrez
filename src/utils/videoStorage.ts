/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Utilidad nativa de IndexedDB para almacenar y persistir videos locales (.mp4) en el navegador del usuario

const DB_NAME = 'retro_portfolio_media';
const STORE_NAME = 'videos';

function getCoverKey(projectId?: string): string {
  if (!projectId || projectId === 'buho-animacion-blender-unity') {
    return 'buho_cover_image';
  }
  return `cover_${projectId}`;
}

function getVideoKey(projectId?: string): string {
  if (!projectId || projectId === 'buho-animacion-blender-unity') {
    return 'buho_animation_clip';
  }
  return `video_${projectId}`;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveLocalVideo(blob: Blob, projectId?: string): Promise<void> {
  try {
    const db = await openDB();
    const key = getVideoKey(projectId);
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.put(blob, key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('Could not cache video in IndexedDB:', err);
  }
}

export async function getLocalVideo(projectId?: string): Promise<string | null> {
  try {
    const db = await openDB();
    const key = getVideoKey(projectId);
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => {
        if (request.result instanceof Blob) {
          resolve(URL.createObjectURL(request.result));
        } else {
          resolve(null);
        }
      };
      request.onerror = () => reject(request.error);
    });
  } catch {
    return null;
  }
}

export async function saveLocalCover(blob: Blob, projectId?: string): Promise<void> {
  try {
    const db = await openDB();
    const key = getCoverKey(projectId);
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.put(blob, key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('Could not cache cover image in IndexedDB:', err);
  }
}

export async function getLocalCover(projectId?: string): Promise<string | null> {
  try {
    const db = await openDB();
    const key = getCoverKey(projectId);
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => {
        if (request.result instanceof Blob) {
          resolve(URL.createObjectURL(request.result));
        } else {
          resolve(null);
        }
      };
      request.onerror = () => reject(request.error);
    });
  } catch {
    return null;
  }
}
