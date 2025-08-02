// Script para criar imagem social PNG
const fs = require('fs');

// Criar uma imagem social simples usando dados base64
function createSocialImage() {
  // Esta é uma imagem 1200x630 básica em PNG
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            width: 1200px; 
            height: 630px; 
            background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 25%, #2563EB 75%, #3B82F6 100%);
            font-family: 'Segoe UI', system-ui, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        .container {
            text-align: center;
            color: white;
            z-index: 2;
        }
        .logo {
            font-size: 80px;
            font-weight: 700;
            margin-bottom: 20px;
            text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .subtitle {
            font-size: 36px;
            font-weight: 400;
            margin-bottom: 15px;
            opacity: 0.9;
        }
        .description {
            font-size: 28px;
            font-weight: 300;
            opacity: 0.8;
            margin-bottom: 30px;
        }
        .url {
            font-family: 'Courier New', monospace;
            font-size: 24px;
            opacity: 0.7;
        }
        .pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px);
            background-size: 50px 50px;
            z-index: 1;
        }
        .code-symbol {
            position: absolute;
            top: 50%;
            left: 150px;
            transform: translateY(-50%);
            font-size: 120px;
            font-weight: 300;
            opacity: 0.3;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="pattern"></div>
    <div class="code-symbol">&lt;/&gt;</div>
    <div class="container">
        <div class="logo">InovaMente Labs</div>
        <div class="subtitle">Soluções Tecnológicas Inovadoras</div>
        <div class="description">Portal de Clientes • Sistema de Tickets • Blog Tech</div>
        <div class="url">www.inovamentelabs.com.br</div>
    </div>
</body>
</html>`;

  fs.writeFileSync('social-preview.html', htmlContent);
  console.log('✅ HTML de preview social criado em social-preview.html');
  console.log('📌 Para converter em PNG, abra o arquivo no navegador e use screenshot ou ferramenta de conversão');
}

createSocialImage();
