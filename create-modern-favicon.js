// Favicon Generator Script
const fs = require('fs');

// Criar um favicon ICO mais sofisticado
function createFavicon() {
  // Cabeçalho do arquivo ICO
  const header = Buffer.from([
    0x00, 0x00, // Reserved
    0x01, 0x00, // Type (1 = ICO)
    0x02, 0x00  // Number of images (2 sizes)
  ]);

  // Entrada para 16x16
  const entry16 = Buffer.from([
    0x10, // Width (16)
    0x10, // Height (16)  
    0x00, // Colors (0 = >256)
    0x00, // Reserved
    0x01, 0x00, // Planes (1)
    0x20, 0x00, // Bits per pixel (32)
    0x00, 0x04, 0x00, 0x00, // Size of data
    0x16, 0x00, 0x00, 0x00  // Offset
  ]);

  // Entrada para 32x32  
  const entry32 = Buffer.from([
    0x20, // Width (32)
    0x20, // Height (32)
    0x00, // Colors  
    0x00, // Reserved
    0x01, 0x00, // Planes
    0x20, 0x00, // Bits per pixel
    0x00, 0x10, 0x00, 0x00, // Size
    0x16, 0x04, 0x00, 0x00  // Offset
  ]);

  // Criar imagem 16x16 (256 pixels x 4 bytes = 1024 bytes)
  const img16 = Buffer.alloc(1024);
  
  // Preencher com gradient azul
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const offset = (y * 16 + x) * 4;
      const grad = (x + y) / 30;
      img16[offset] = Math.floor(59 + grad * 30);    // B
      img16[offset + 1] = Math.floor(130 + grad * 116); // G  
      img16[offset + 2] = Math.floor(246 - grad * 30);  // R
      img16[offset + 3] = 255; // A
    }
  }

  // Desenhar símbolos < /> para 16x16
  const symbols16 = [
    // < (esquerda)
    [3, 6], [2, 7], [1, 8], [2, 9], [3, 10],
    // / (centro)
    [6, 4], [7, 5], [8, 6], [8, 7], [9, 8], [9, 9], [10, 10], [11, 11],
    // > (direita)  
    [12, 6], [13, 7], [14, 8], [13, 9], [12, 10]
  ];

  symbols16.forEach(([x, y]) => {
    if (x < 16 && y < 16) {
      const offset = (y * 16 + x) * 4;
      img16[offset] = 255;     // B branco
      img16[offset + 1] = 255; // G branco
      img16[offset + 2] = 255; // R branco
      img16[offset + 3] = 255; // A opaco
    }
  });

  // Criar imagem 32x32 (1024 pixels x 4 bytes = 4096 bytes)
  const img32 = Buffer.alloc(4096);
  
  for (let y = 0; y < 32; y++) {
    for (let x = 0; x < 32; x++) {
      const offset = (y * 32 + x) * 4;
      const grad = (x + y) / 63;
      img32[offset] = Math.floor(59 + grad * 30);
      img32[offset + 1] = Math.floor(130 + grad * 116);
      img32[offset + 2] = Math.floor(246 - grad * 30);
      img32[offset + 3] = 255;
    }
  }

  // Símbolos para 32x32 (maiores)
  const symbols32 = [
    // < 
    [6, 12], [7, 13], [5, 14], [4, 15], [3, 16], [4, 17], [5, 18], [6, 19], [7, 20],
    // /
    [12, 8], [13, 9], [14, 10], [15, 11], [16, 12], [17, 13], [18, 14], [19, 15], [20, 16], [21, 17], [22, 18], [23, 19],
    // >
    [25, 12], [24, 13], [26, 14], [27, 15], [28, 16], [27, 17], [26, 18], [25, 19], [24, 20]
  ];

  symbols32.forEach(([x, y]) => {
    if (x < 32 && y < 32) {
      const offset = (y * 32 + x) * 4;
      img32[offset] = 255;
      img32[offset + 1] = 255;
      img32[offset + 2] = 255;
      img32[offset + 3] = 255;
    }
  });

  // Combinar tudo
  const favicon = Buffer.concat([header, entry16, entry32, img16, img32]);
  
  fs.writeFileSync('public/favicon.ico', favicon);
  console.log('✅ Favicon moderno criado com símbolos </>');
}

createFavicon();
