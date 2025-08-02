const fs = require('fs');

// Criar dados para favicon.ico simples (16x16)
// Esta é uma representação básica de um favicon que mostra </>
const icoHeader = Buffer.from([
  0x00, 0x00, // Reserved (must be 0)
  0x01, 0x00, // Image type: 1 = ICO
  0x01, 0x00, // Number of images: 1
]);

const icoEntry = Buffer.from([
  0x10, // Width (16)
  0x10, // Height (16)
  0x00, // Color count (0 = more than 256)
  0x00, // Reserved (0)
  0x01, 0x00, // Color planes (1)
  0x20, 0x00, // Bits per pixel (32)
  0x00, 0x04, 0x00, 0x00, // Size of image data
  0x16, 0x00, 0x00, 0x00, // Offset to image data
]);

// Criar imagem 16x16 simples
const imageData = Buffer.alloc(1024); // 16x16x4 bytes (RGBA)

// Preencher com cor de fundo azul
for (let i = 0; i < 256; i++) {
  const offset = i * 4;
  imageData[offset] = 59;    // B
  imageData[offset + 1] = 130; // G
  imageData[offset + 2] = 246; // R
  imageData[offset + 3] = 255; // A
}

// Desenhar símbolos < / > em branco (simplificado)
const whitePixels = [
  // < symbol
  [2, 4], [3, 5], [2, 6], [3, 7], [2, 8],
  [2, 9], [3, 10], [2, 11], [3, 12],
  
  // / symbol
  [7, 3], [7, 4], [6, 5], [6, 6], [5, 7],
  [5, 8], [4, 9], [4, 10], [3, 11], [3, 12],
  
  // > symbol
  [13, 4], [12, 5], [13, 6], [12, 7], [13, 8],
  [13, 9], [12, 10], [13, 11], [12, 12],
];

whitePixels.forEach(([x, y]) => {
  if (x < 16 && y < 16) {
    const offset = (y * 16 + x) * 4;
    imageData[offset] = 255;     // B
    imageData[offset + 1] = 255; // G
    imageData[offset + 2] = 255; // R
    imageData[offset + 3] = 255; // A
  }
});

// Combinar todos os dados
const icoData = Buffer.concat([icoHeader, icoEntry, imageData]);

// Salvar favicon.ico
fs.writeFileSync('public/favicon.ico', icoData);
console.log('✅ Favicon.ico criado em public/favicon.ico');
