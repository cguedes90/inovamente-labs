const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createTestData() {
  try {
    console.log('🔄 Criando dados de teste...');

    // Criar cliente de teste se não existir
    let testClient = await prisma.client.findUnique({
      where: { email: 'cliente@teste.com' }
    });

    if (!testClient) {
      const hashedPassword = await bcrypt.hash('123456', 10);
      testClient = await prisma.client.create({
        data: {
          name: 'João Silva',
          email: 'cliente@teste.com',
          password: hashedPassword,
          company: 'Empresa Exemplo Ltda',
          phone: '(11) 99999-9999'
        }
      });
      console.log('✅ Cliente de teste criado');
    } else {
      console.log('ℹ️ Cliente de teste já existe');
    }

    // Verificar se já existem tickets
    const existingTickets = await prisma.ticket.count({
      where: { clientId: testClient.id }
    });

    if (existingTickets === 0) {
      // Criar tickets de teste
      const testTickets = [
        {
          title: 'Problema no sistema de vendas',
          description: 'Estou enfrentando dificuldades para processar pedidos no sistema. O erro aparece quando tento finalizar uma venda.',
          status: 'ABERTO',
          priority: 'ALTA',
          category: 'TECHNICAL',
          clientId: testClient.id
        },
        {
          title: 'Dúvida sobre faturamento',
          description: 'Gostaria de esclarecer algumas questões sobre a cobrança do mês passado. Há alguns valores que não entendi.',
          status: 'EM_ANDAMENTO',
          priority: 'MEDIA',
          category: 'BILLING',
          clientId: testClient.id
        },
        {
          title: 'Solicitação de nova funcionalidade',
          description: 'Seria possível implementar um relatório personalizado para acompanhar as vendas por região?',
          status: 'AGUARDANDO_CLIENTE',
          priority: 'BAIXA',
          category: 'GENERAL',
          clientId: testClient.id
        }
      ];

      for (const ticketData of testTickets) {
        await prisma.ticket.create({
          data: ticketData
        });
      }

      console.log('✅ Tickets de teste criados');
    } else {
      console.log('ℹ️ Tickets de teste já existem');
    }

    console.log('🎉 Dados de teste criados com sucesso!');
    
    // Mostrar resumo
    const totalTickets = await prisma.ticket.count();
    const totalClients = await prisma.client.count();
    
    console.log(`📊 Resumo: ${totalClients} clientes, ${totalTickets} tickets`);

  } catch (error) {
    console.error('❌ Erro ao criar dados de teste:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestData();
