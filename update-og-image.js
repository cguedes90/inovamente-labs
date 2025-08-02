const fs = require('fs');

// Criar um PNG simples de 1200x630 usando Canvas (se disponível) ou dados brutos
function createBasicPNG() {
  // Dados para um PNG 1200x630 com fundo azul gradient
  const width = 1200;
  const height = 630;
  
  // Criar um SVG otimizado que pode ser usado como PNG
  const svgContent = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1E3A8A"/>
        <stop offset="100%" style="stop-color:#3B82F6"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <text x="50%" y="40%" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white">InovaMente Labs</text>
    <text x="50%" y="55%" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" fill="rgba(255,255,255,0.9)">Soluções Tecnológicas Inovadoras</text>
    <text x="50%" y="70%" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">Portal de Clientes • Sistema de Tickets • Blog Tech</text>
    <text x="50%" y="85%" text-anchor="middle" font-family="Courier New, monospace" font-size="20" fill="rgba(255,255,255,0.7)">www.inovamentelabs.com.br</text>
  </svg>`;
  
  fs.writeFileSync('public/og-image.svg', svgContent);
  console.log('✅ Imagem social SVG atualizada');
}

createBasicPNG();
