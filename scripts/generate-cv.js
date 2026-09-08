import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  // Standard Letter page size: 612 x 792
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontTitle = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Palette from Jorge's CV
  const colorHeaderBg = rgb(222 / 255, 229 / 255, 238 / 255);
  const colorPrimary = rgb(25 / 255, 62 / 255, 115 / 255); // Deep Navy
  const colorSubtitle = rgb(65 / 255, 88 / 255, 122 / 255);
  const colorDark = rgb(45 / 255, 52 / 255, 62 / 255);
  const colorMuted = rgb(95 / 255, 105 / 255, 118 / 255);
  const colorBorder = rgb(190 / 255, 202 / 255, 218 / 255);

  // Top Header Banner
  page.drawRectangle({
    x: 0,
    y: height - 120,
    width: width,
    height: 120,
    color: colorHeaderBg,
  });

  // Name Title
  const nameText = 'JORGE GUTIERREZ';
  const nameWidth = fontTitle.widthOfTextAtSize(nameText, 26);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: height - 60,
    size: 26,
    font: fontTitle,
    color: colorPrimary,
  });

  // Subtitle
  const subText = 'Estudiante educación superior';
  const subWidth = fontItalic.widthOfTextAtSize(subText, 13);
  page.drawText(subText, {
    x: (width - subWidth) / 2,
    y: height - 82,
    size: 13,
    font: fontItalic,
    color: colorSubtitle,
  });

  // Top header border line
  page.drawLine({
    start: { x: 0, y: height - 120 },
    end: { x: width, y: height - 120 },
    thickness: 1,
    color: colorBorder,
  });

  // Layout Columns
  // Left column: x = 50, width = 190
  // Right column: x = 270, width = 290
  const leftX = 50;
  const rightX = 270;
  let leftY = height - 160;
  let rightY = height - 160;

  // Helper for drawing section dots divider
  const drawDotsDivider = (yPos) => {
    const dots = '• • • • • • • • • • • • • • • • • •';
    page.drawText(dots, {
      x: leftX,
      y: yPos,
      size: 7,
      font: fontBold,
      color: colorPrimary,
    });
  };

  // ===================== LEFT COLUMN =====================
  // 1. OBJETIVO PROFESIONAL
  page.drawText('OBJETIVO', {
    x: leftX,
    y: leftY,
    size: 13,
    font: fontBold,
    color: colorPrimary,
  });
  leftY -= 15;
  page.drawText('PROFESIONAL', {
    x: leftX,
    y: leftY,
    size: 13,
    font: fontBold,
    color: colorPrimary,
  });
  leftY -= 22;

  const objLines = [
    'Estoy en busca de un',
    'trabajo que pueda',
    'complementar mis estudios',
    'disponible Part-time',
    '',
    'Estoy dispuesto a aprender',
  ];
  objLines.forEach((line) => {
    if (line === '') {
      leftY -= 6;
      return;
    }
    page.drawText(line, {
      x: leftX,
      y: leftY,
      size: 10,
      font: fontRegular,
      color: colorDark,
    });
    leftY -= 15;
  });

  leftY -= 15;
  drawDotsDivider(leftY);
  leftY -= 25;

  // 2. HABILIDADES
  page.drawText('HABILIDADES', {
    x: leftX,
    y: leftY,
    size: 13,
    font: fontBold,
    color: colorPrimary,
  });
  leftY -= 22;

  const habilidades = [
    'Adaptabilidad',
    'Trabajo en equipo',
    'Responsable',
    'Razonable',
    'Ordenado',
    'Disciplinado',
  ];
  habilidades.forEach((hab) => {
    page.drawText('•  ' + hab, {
      x: leftX,
      y: leftY,
      size: 10.5,
      font: fontRegular,
      color: colorDark,
    });
    leftY -= 18;
  });

  leftY -= 12;
  drawDotsDivider(leftY);
  leftY -= 25;

  // 3. CONTACTO
  page.drawText('CONTACTO', {
    x: leftX,
    y: leftY,
    size: 13,
    font: fontBold,
    color: colorPrimary,
  });
  leftY -= 22;

  // Phone
  page.drawText('Tel: +56 9 8418 8621', {
    x: leftX,
    y: leftY,
    size: 9.5,
    font: fontBold,
    color: colorDark,
  });
  leftY -= 18;

  // Email (wrapped)
  page.drawText('jorge.gutierrez.leiva.1928@', {
    x: leftX,
    y: leftY,
    size: 9,
    font: fontRegular,
    color: colorDark,
  });
  leftY -= 13;
  page.drawText('gmail.com', {
    x: leftX,
    y: leftY,
    size: 9,
    font: fontRegular,
    color: colorDark,
  });
  leftY -= 18;

  // Location
  page.drawText('Villa La Obra 1 Gabriela', {
    x: leftX,
    y: leftY,
    size: 9.5,
    font: fontRegular,
    color: colorDark,
  });
  leftY -= 14;
  page.drawText('Santiago, Chile', {
    x: leftX,
    y: leftY,
    size: 9.5,
    font: fontRegular,
    color: colorMuted,
  });

  // ===================== RIGHT COLUMN =====================
  const drawSectionTitle = (title, yPos) => {
    // Arrow icon ▶
    page.drawText('>', {
      x: rightX,
      y: yPos + 1,
      size: 11,
      font: fontBold,
      color: colorPrimary,
    });
    page.drawText(title, {
      x: rightX + 16,
      y: yPos,
      size: 12.5,
      font: fontBold,
      color: colorPrimary,
    });
    return yPos - 22;
  };

  // 1. EXPERIENCIA LABORAL
  rightY = drawSectionTitle('EXPERIENCIA LABORAL', rightY);

  page.drawText('TRABAJO EN PACKING-SANCO S.A.', {
    x: rightX,
    y: rightY,
    size: 10.5,
    font: fontBold,
    color: colorPrimary,
  });
  rightY -= 16;

  page.drawText('Sanco S.A. Sgda Familia Dic 2017 - Ene 2018', {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontItalic,
    color: colorMuted,
  });
  rightY -= 16;

  page.drawText('Encargado de verificar la cantidad de fruta', {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontRegular,
    color: colorDark,
  });
  rightY -= 14;
  page.drawText('en las cajas y empaquetarlas', {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontRegular,
    color: colorDark,
  });
  rightY -= 32;

  // 2. ESTUDIOS
  rightY = drawSectionTitle('ESTUDIOS', rightY);

  page.drawText('UNIVERSIDAD BERNARDO O\'HIGGINS', {
    x: rightX,
    y: rightY,
    size: 10.5,
    font: fontBold,
    color: colorPrimary,
  });
  rightY -= 16;

  page.drawText('2023 - actualmente', {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontItalic,
    color: colorMuted,
  });
  rightY -= 16;

  page.drawText('Carrera Ingenieria en realidad virtual y', {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontRegular,
    color: colorDark,
  });
  rightY -= 14;
  page.drawText('juegos digitales', {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontRegular,
    color: colorDark,
  });
  rightY -= 24;

  page.drawText('LICEO TECNICO INITEC', {
    x: rightX,
    y: rightY,
    size: 10.5,
    font: fontBold,
    color: colorPrimary,
  });
  rightY -= 16;

  page.drawText('2018 - 2022', {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontItalic,
    color: colorMuted,
  });
  rightY -= 16;

  page.drawText('Tecnico en conectividad y redes', {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontRegular,
    color: colorDark,
  });
  rightY -= 32;

  // 3. CERTIFICACIONES
  const certs = [
    'TECNICO PROFESIONAL CERTIFICADO',
    'CURSO EN EXCEL BASICO CERTIFICADO',
    'CURSO EN QA TESTING CERTIFICADO',
  ];
  certs.forEach((cert) => {
    page.drawText(cert, {
      x: rightX,
      y: rightY,
      size: 9.5,
      font: fontBold,
      color: colorPrimary,
    });
    rightY -= 20;
  });

  rightY -= 12;

  // 4. IDIOMA
  rightY = drawSectionTitle('IDIOMA', rightY);

  const idiomas = [
    'Espanol nativo.',
    'Ingles nivel medio.',
    'Frances Basico.',
  ];
  idiomas.forEach((idm) => {
    page.drawText('•  ' + idm, {
      x: rightX,
      y: rightY,
      size: 9.5,
      font: fontRegular,
      color: colorDark,
    });
    rightY -= 16;
  });

  // Bottom subtle footer
  page.drawLine({
    start: { x: 50, y: 45 },
    end: { x: width - 50, y: 45 },
    thickness: 0.5,
    color: colorBorder,
  });
  page.drawText('Curriculum Vitae - Jorge Gutierrez', {
    x: 50,
    y: 32,
    size: 8,
    font: fontRegular,
    color: colorMuted,
  });
  page.drawText('Ingenieria en Realidad Virtual y Juegos Digitales', {
    x: width - 240,
    y: 32,
    size: 8,
    font: fontRegular,
    color: colorMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const outPath = path.join(process.cwd(), 'public', 'cv-jorge-gutierrez.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log('CV PDF successfully created at', outPath, 'Bytes:', pdfBytes.length);
}

generateCV().catch((err) => {
  console.error('Error generating CV:', err);
  process.exit(1);
});
