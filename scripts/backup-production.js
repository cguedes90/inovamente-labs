const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

// Configurar cliente Prisma para produção
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL // URL de produção
    }
  }
});

async function backupProductionData() {
  try {
    console.log('🔄 Fazendo backup dos dados de produção...');
    
    const backupData = {
      timestamp: new Date().toISOString(),
      clients: [],
      tickets: [],
      admins: [],
      blogPosts: [],
      contacts: [],
      chatConversations: []
    };

    // Backup de clientes
    backupData.clients = await prisma.client.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
        // Não incluir senha por segurança
      }
    });
    console.log(`✅ ${backupData.clients.length} clientes exportados`);

    // Backup de tickets
    backupData.tickets = await prisma.ticket.findMany({
      include: {
        client: {
          select: {
            id: true,
            name: true,
            email: true,
            company: true
          }
        },
        messages: true
      }
    });
    console.log(`✅ ${backupData.tickets.length} tickets exportados`);

    // Backup de admins
    backupData.admins = await prisma.admin.findMany({
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true
        // Não incluir senha por segurança
      }
    });
    console.log(`✅ ${backupData.admins.length} admins exportados`);

    // Backup de posts do blog (se existir a tabela)
    try {
      backupData.blogPosts = await prisma.blogPost.findMany();
      console.log(`✅ ${backupData.blogPosts.length} posts do blog exportados`);
    } catch (error) {
      console.log('ℹ️ Tabela blogPost não encontrada');
    }

    // Backup de contatos (se existir a tabela)
    try {
      backupData.contacts = await prisma.contact.findMany();
      console.log(`✅ ${backupData.contacts.length} contatos exportados`);
    } catch (error) {
      console.log('ℹ️ Tabela contact não encontrada');
    }

    // Backup de conversas do chat (se existir a tabela)
    try {
      backupData.chatConversations = await prisma.chatConversation.findMany({
        include: {
          messages: true
        }
      });
      console.log(`✅ ${backupData.chatConversations.length} conversas exportadas`);
    } catch (error) {
      console.log('ℹ️ Tabela chatConversation não encontrada');
    }

    // Salvar backup
    const backupDir = path.join(__dirname, '..', 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const filename = `backup-production-${new Date().toISOString().split('T')[0]}-${Date.now()}.json`;
    const filepath = path.join(backupDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(backupData, null, 2));
    
    console.log('🎉 Backup criado com sucesso!');
    console.log(`📁 Arquivo: ${filepath}`);
    console.log(`📊 Resumo:`);
    console.log(`   - ${backupData.clients.length} clientes`);
    console.log(`   - ${backupData.tickets.length} tickets`);
    console.log(`   - ${backupData.admins.length} admins`);
    console.log(`   - ${backupData.blogPosts.length} posts`);
    console.log(`   - ${backupData.contacts.length} contatos`);
    console.log(`   - ${backupData.chatConversations.length} conversas`);

    return filepath;

  } catch (error) {
    console.error('❌ Erro ao fazer backup:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  backupProductionData()
    .then((filepath) => {
      console.log(`\n✅ Backup salvo em: ${filepath}`);
      console.log('🔄 Próximo passo: Execute "node scripts/restore-backup.js" para restaurar os dados localmente');
    })
    .catch((error) => {
      console.error('💥 Falha no backup:', error);
      process.exit(1);
    });
}

module.exports = { backupProductionData };
