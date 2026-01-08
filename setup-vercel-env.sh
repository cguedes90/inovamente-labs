#!/bin/bash

# Script para configurar variáveis de ambiente no Vercel
# Execute: bash setup-vercel-env.sh
#
# IMPORTANTE: Edite este arquivo e substitua [SUA_API_KEY] pela sua API Key real do Brevo

echo "🚀 Configurando variáveis de ambiente no Vercel..."
echo ""

# Verificar se Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI não encontrado!"
    echo "Instale com: npm i -g vercel"
    exit 1
fi

echo "⚠️  ATENÇÃO: Certifique-se de editar este script e adicionar sua API Key do Brevo!"
echo ""
read -p "Você já editou o script e adicionou a API Key? (s/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "❌ Por favor, edite o script primeiro e substitua [SUA_API_KEY] pela sua API Key real."
    exit 1
fi

echo "📝 Adicionando variáveis de ambiente..."
echo ""

# Email (Brevo/Sendinblue)
# EDITE AQUI: Substitua [SUA_API_KEY] pela sua API Key real do Brevo
echo "Digite a API Key do Brevo quando solicitado"
vercel env add BREVO_API_KEY production preview development

vercel env add FROM_EMAIL production preview development << EOF
inovamentelabs@outlook.com
EOF

vercel env add FROM_NAME production preview development << EOF
Inovamente Labs
EOF

vercel env add ADMIN_EMAIL production preview development << EOF
contato@inovamentelabs.com.br
EOF

echo ""
echo "✅ Variáveis de ambiente configuradas com sucesso!"
echo ""
echo "🔄 Próximo passo: Fazer redeploy do projeto"
echo "Execute: vercel --prod"
echo ""
