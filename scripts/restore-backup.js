const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function restoreBackup(backupFilePath) {
  try {
    console.log('🔄 Restaurando backup...');
    
    if (!fs.existsSync(backupFilePath)) {
      throw new Error(`Arquivo de backup não encontrado: ${backupFilePath}`);
    }

    const backupData = JSON.parse(fs.readFileSync(backupFilePath, 'utf8'));
    
    console.log(`📅 Backup de: ${backupData.timestamp}`);
    console.log(`📊 Dados a restaurar:`);
    console.log(`   - ${backupData.clients.length} clientes`);
    console.log(`   - ${backupData.tickets.length} tickets`);
    console.log(`   - ${backupData.admins.length} admins`);

    // Limpar dados existentes (cuidado!)
    console.log('🗑️ Limpando dados locais...');
    await prisma.ticket.deleteMany();
    await prisma.client.deleteMany();
    await prisma.admin.deleteMany();
    console.log('✅ Dados locais limpos');

    // Restaurar clientes
    console.log('👥 Restaurando clientes...');
    for (const client of backupData.clients) {
      // Usar senha padrão para clientes importados
      const hashedPassword = await bcrypt.hash('123456', 10);
      
      await prisma.client.create({
        data: {
          id: client.id,
          name: client.name,
          email: client.email,
          password: hashedPassword, // Senha padrão
          company: client.company,
          phone: client.phone,
          createdAt: new Date(client.createdAt),
          updatedAt: new Date(client.updatedAt)
        }
      });
    }
    console.log(`✅ ${backupData.clients.length} clientes restaurados`);

    // Restaurar tickets
    console.log('🎫 Restaurando tickets...');
    for (const ticket of backupData.tickets) {
      await prisma.ticket.create({
        data: {
          id: ticket.id,
          title: ticket.title,
          description: ticket.description,
          status: ticket.status,
          priority: ticket.priority,
          category: ticket.category,
          clientId: ticket.clientId,
          createdAt: new Date(ticket.createdAt),
          updatedAt: new Date(ticket.updatedAt)
        }
      });

      // Restaurar mensagens do ticket
      if (ticket.messages && ticket.messages.length > 0) {
        for (const message of ticket.messages) {
          await prisma.ticketMessage.create({
            data: {
              id: message.id,
              content: message.content,
              isAdmin: message.isAdmin,
              ticketId: ticket.id,
              createdAt: new Date(message.createdAt)
            }
          });
        }
      }
    }
    console.log(`✅ ${backupData.tickets.length} tickets restaurados`);

    // Restaurar admins
    console.log('👨‍💼 Restaurando admins...');
    for (const admin of backupData.admins) {
      // Usar senha padrão para admins importados
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      await prisma.admin.create({
        data: {
          id: admin.id,
          username: admin.username,
          password: hashedPassword, // Senha padrão
          name: admin.name,
          email: admin.email,
          createdAt: new Date(admin.createdAt),
          updatedAt: new Date(admin.updatedAt)
        }
      });
    }
    console.log(`✅ ${backupData.admins.length} admins restaurados`);

    console.log('🎉 Backup restaurado com sucesso!');
    console.log('');
    console.log('📝 Senhas padrão definidas:');
    console.log('   - Clientes: 123456');
    console.log('   - Admins: admin123');
    console.log('');
    console.log('⚠️  Lembre-se de alterar as senhas após o login!');

  } catch (error) {
    console.error('❌ Erro ao restaurar backup:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Função para listar backups disponíveis
function listBackups() {
  const backupDir = path.join(__dirname, '..', 'backups');
  
  if (!fs.existsSync(backupDir)) {
    console.log('📁 Nenhum backup encontrado');
    return [];
  }

  const files = fs.readdirSync(backupDir)
    .filter(file => file.startsWith('backup-production-') && file.endsWith('.json'))
    .map(file => {
      const filepath = path.join(backupDir, file);
      const stats = fs.statSync(filepath);
      return {
        file,
        path: filepath,
        size: stats.size,
        created: stats.mtime
      };
    })
    .sort((a, b) => b.created - a.created);

  return files;
}

// Executar se chamado diretamente
if (require.main === module) {
  const backups = listBackups();
  
  if (backups.length === 0) {
    console.log('❌ Nenhum backup encontrado!');
    console.log('Execute primeiro: node scripts/backup-production.js');
    process.exit(1);
  }

  console.log('📋 Backups disponíveis:');
  backups.forEach((backup, index) => {
    console.log(`${index + 1}. ${backup.file}`);
    console.log(`   📅 Criado: ${backup.created.toLocaleString('pt-BR')}`);
    console.log(`   📏 Tamanho: ${(backup.size / 1024).toFixed(2)} KB`);
    console.log('');
  });

  // Usar o backup mais recente por padrão
  const latestBackup = backups[0];
  console.log(`🔄 Restaurando backup mais recente: ${latestBackup.file}`);
  
  restoreBackup(latestBackup.path)
    .then(() => {
      console.log('✅ Restauração concluída!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Falha na restauração:', error);
      process.exit(1);
    });
}

module.exports = { restoreBackup, listBackups };
