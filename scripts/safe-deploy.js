const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function safeDeploy() {
  try {
    console.log('🚀 Iniciando deploy seguro...');
    
    // 1. Verificar se há mudanças não commitadas
    console.log('📋 Verificando mudanças locais...');
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.trim()) {
        console.log('📝 Mudanças detectadas:');
        console.log(status);
        
        // Mostrar diff das principais mudanças
        console.log('\n📊 Principais mudanças:');
        try {
          const diff = execSync('git diff --name-status', { encoding: 'utf8' });
          console.log(diff);
        } catch (e) {
          console.log('Não foi possível mostrar diff');
        }
      } else {
        console.log('✅ Nenhuma mudança local detectada');
      }
    } catch (error) {
      console.log('⚠️ Não foi possível verificar status do git');
    }

    // 2. Fazer backup da produção antes do deploy
    console.log('\n🔄 Fazendo backup dos dados de produção...');
    const { backupProductionData } = require('./backup-production.js');
    const backupPath = await backupProductionData();
    console.log(`✅ Backup salvo em: ${backupPath}`);

    // 3. Perguntar confirmação
    console.log('\n⚠️ ATENÇÃO: Você está prestes a fazer deploy para PRODUÇÃO!');
    console.log('📋 Mudanças que serão aplicadas:');
    console.log('   - ✅ Sistema de alteração de status de tickets');
    console.log('   - ✅ Criação de novos clientes no admin');
    console.log('   - ✅ Notificações visuais melhoradas');
    console.log('   - ✅ Interface de tickets redesenhada');
    console.log('   - ✅ Badges de status coloridos');
    
    // Para ambiente automatizado, usar confirmação via variável de ambiente
    const autoConfirm = process.env.AUTO_CONFIRM_DEPLOY === 'true';
    
    if (!autoConfirm) {
      console.log('\n❓ Deseja continuar? (Digite "SIM" para confirmar)');
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      const answer = await new Promise((resolve) => {
        readline.question('Confirmação: ', resolve);
      });
      readline.close();
      
      if (answer !== 'SIM') {
        console.log('❌ Deploy cancelado pelo usuário');
        process.exit(0);
      }
    }

    // 4. Executar deploy
    console.log('\n🚀 Executando deploy...');
    
    // Adicionar mudanças ao git
    console.log('📝 Adicionando mudanças ao git...');
    execSync('git add .', { stdio: 'inherit' });
    
    // Fazer commit
    const commitMessage = `feat: Sistema completo de gestão de tickets

- Implementado sistema de alteração de status de tickets
- Adicionado criação de clientes no painel admin
- Melhoradas notificações visuais
- Redesenhada interface de tickets
- Adicionados badges coloridos para status
- Corrigidos mapeamentos de status PT/BR
- Criados endpoints de API para atualização

Deploy seguro com backup automático realizado em ${new Date().toISOString()}`;

    console.log('💾 Fazendo commit...');
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    
    // Push para produção
    console.log('⬆️ Enviando para produção...');
    execSync('git push origin main', { stdio: 'inherit' });
    
    console.log('🎉 Deploy realizado com sucesso!');
    console.log('');
    console.log('📋 Próximos passos:');
    console.log('1. ✅ Verificar se o deploy foi aplicado na Vercel');
    console.log('2. ✅ Testar as novas funcionalidades em produção');
    console.log('3. ✅ Verificar se os dados foram preservados');
    console.log('');
    console.log('🔗 Links úteis:');
    console.log(`📁 Backup salvo em: ${backupPath}`);
    console.log('🌐 Site em produção: https://inovamente-labs.vercel.app');
    console.log('👨‍💼 Admin: https://inovamente-labs.vercel.app/admin');
    
  } catch (error) {
    console.error('❌ Erro durante o deploy:', error);
    console.log('');
    console.log('🔄 Em caso de problemas:');
    console.log('1. Os dados de produção foram salvos em backup');
    console.log('2. Execute "node scripts/restore-backup.js" para restaurar localmente');
    console.log('3. Verifique os logs da Vercel para mais detalhes');
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  safeDeploy();
}

module.exports = { safeDeploy };
