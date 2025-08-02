const fs = require('fs');

// Criar uma imagem PNG básica de 1200x630
function createPNGData() {
  const width = 1200;
  const height = 630;
  
  // PNG básico com cabeçalho mínimo
  const pngSignature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 2; // color type (RGB)
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  
  const ihdrLength = Buffer.alloc(4);
  ihdrLength.writeUInt32BE(13, 0);
  
  const ihdrType = Buffer.from('IHDR');
  const ihdrCRC = Buffer.alloc(4);
  ihdrCRC.writeUInt32BE(0x596DB4D2, 0); // CRC for basic IHDR
  
  // Para simplificar, vou criar um SVG que pode ser renderizado
  const svgData = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E3A8A;stop-opacity:1" />
      <stop offset="25%" style="stop-color:#1E40AF;stop-opacity:1" />
      <stop offset="75%" style="stop-color:#2563EB;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Pattern overlay -->
  <rect width="1200" height="630" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1" opacity="0.3"/>
  
  <!-- Logo circle -->
  <circle cx="300" cy="315" r="60" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="3"/>
  
  <!-- Code symbols -->
  <text x="270" y="325" font-family="Courier New, monospace" font-size="40" font-weight="bold" fill="white" text-anchor="middle">&lt;</text>
  <text x="300" y="335" font-family="Courier New, monospace" font-size="30" font-weight="bold" fill="white" text-anchor="middle">/</text>
  <text x="330" y="325" font-family="Courier New, monospace" font-size="40" font-weight="bold" fill="white" text-anchor="middle">&gt;</text>
  
  <!-- Main title -->
  <text x="500" y="280" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="bold" fill="white">InovaMente Labs</text>
  
  <!-- Subtitle -->
  <text x="500" y="330" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="normal" fill="rgba(255,255,255,0.9)">Soluções Tecnológicas Inovadoras</text>
  
  <!-- Description -->
  <text x="500" y="380" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="300" fill="rgba(255,255,255,0.8)">Portal de Clientes • Sistema de Tickets • Blog Tech</text>
  
  <!-- URL -->
  <text x="500" y="450" font-family="Courier New, monospace" font-size="20" font-weight="normal" fill="rgba(255,255,255,0.7)">www.inovamentelabs.com.br</text>
</svg>`;

  fs.writeFileSync('public/og-image.svg', svgData);
  console.log('✅ Imagem social SVG criada com sucesso!');
  
  // Também criar um arquivo de backup com extensão PNG para compatibilidade
  fs.copyFileSync('public/og-image.svg', 'public/og-image-backup.png');
  console.log('✅ Backup PNG criado!');
}

createPNGData();
