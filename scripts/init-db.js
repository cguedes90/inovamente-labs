const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://username:password@localhost:5432/inovamente_db",
});

async function initDatabase() {
  const client = await pool.connect();
  
  try {
    console.log('🚀 Iniciando configuração do banco de dados...');

    // Criar tabela clients
    await client.query(`
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        email VARCHAR UNIQUE NOT NULL,
        password VARCHAR NOT NULL,
        company VARCHAR NOT NULL,
        phone VARCHAR,
        status VARCHAR DEFAULT 'active',
        last_login TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('✅ Tabela clients criada');

    // Criar tabela tickets
    await client.query(`
      CREATE TABLE IF NOT EXISTS tickets (
        id SERIAL PRIMARY KEY,
        client_id INTEGER REFERENCES clients(id),
        title VARCHAR NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR NOT NULL,
        priority VARCHAR DEFAULT 'medium',
        status VARCHAR DEFAULT 'open',
        assigned_to INTEGER,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        resolved_at TIMESTAMP
      );
    `);
    console.log('✅ Tabela tickets criada');

    // Criar tabela ticket_replies
    await client.query(`
      CREATE TABLE IF NOT EXISTS ticket_replies (
        id SERIAL PRIMARY KEY,
        ticket_id INTEGER REFERENCES tickets(id),
        author_id INTEGER NOT NULL,
        author_type VARCHAR NOT NULL,
        message TEXT NOT NULL,
        is_internal BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('✅ Tabela ticket_replies criada');

    // Criar tabela contact_messages
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        company VARCHAR,
        message TEXT NOT NULL,
        type VARCHAR DEFAULT 'general',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('✅ Tabela contact_messages criada');

    // Criar tabela chat_messages
    await client.query(`
      CREATE TABLE IF NOT EXISTS chat_messages (
        id SERIAL PRIMARY KEY,
        session_id VARCHAR NOT NULL,
        message TEXT NOT NULL,
        response TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('✅ Tabela chat_messages criada');

    // Inserir cliente de teste
    const hashedPassword = await bcrypt.hash('123456', 12);
    await client.query(`
      INSERT INTO clients (name, email, password, company, phone, status)
      VALUES ('Cliente Teste', 'cliente@teste.com', $1, 'Empresa Teste', '(11) 99999-9999', 'active')
      ON CONFLICT (email) DO NOTHING;
    `, [hashedPassword]);
    console.log('✅ Cliente de teste criado (cliente@teste.com / 123456)');

    // Criar alguns tickets de exemplo
    const clientResult = await client.query('SELECT id FROM clients WHERE email = $1', ['cliente@teste.com']);
    if (clientResult.rows.length > 0) {
      const clientId = clientResult.rows[0].id;
      
      await client.query(`
        INSERT INTO tickets (client_id, title, description, category, priority, status)
        VALUES 
          ($1, 'Problema de Login', 'Não consegui acessar minha conta ontem à noite', 'technical', 'medium', 'open'),
          ($1, 'Dúvida sobre Faturamento', 'Gostaria de entender melhor os valores cobrados', 'billing', 'low', 'resolved'),
          ($1, 'Solicitação de Nova Funcionalidade', 'Seria possível adicionar relatórios customizados?', 'general', 'high', 'in_progress')
        ON CONFLICT DO NOTHING;
      `, [clientId]);
      console.log('✅ Tickets de exemplo criados');
    }

    console.log('🎉 Banco de dados configurado com sucesso!');
    console.log('📋 Credenciais de teste:');
    console.log('   Admin: admin / admin123 (acesso em /admin)');
    console.log('   Cliente: cliente@teste.com / 123456 (acesso em /chamados)');

  } catch (error) {
    console.error('❌ Erro ao configurar banco de dados:', error);
  } finally {
    client.release();
    pool.end();
  }
}

initDatabase();
