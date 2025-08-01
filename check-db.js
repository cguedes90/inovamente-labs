import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('🔍 Verificando dados no banco Neon...\n');
    
    // Verificar admins
    const admins = await prisma.admin.findMany();
    console.log('📊 Admins encontrados:');
    admins.forEach(admin => {
      console.log(`  - ID: ${admin.id}, Email: ${admin.email}, Nome: ${admin.name}`);
    });
    
    // Verificar clientes
    console.log('\n👥 Clientes encontrados:');
    const clients = await prisma.client.findMany();
    clients.forEach(client => {
      console.log(`  - ID: ${client.id}, Email: ${client.email}, Nome: ${client.name}, Ativo: ${client.isActive}`);
    });
    
    // Verificar tickets
    console.log('\n🎫 Tickets encontrados:');
    const tickets = await prisma.ticket.findMany({
      include: {
        client: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });
    tickets.forEach(ticket => {
      console.log(`  - ID: ${ticket.id}, Título: ${ticket.title}, Status: ${ticket.status}, Cliente: ${ticket.client.name}`);
    });
    
    console.log('\n✅ Verificação concluída!');
    
  } catch (error) {
    console.error('❌ Erro ao verificar banco:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
