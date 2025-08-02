const { Client } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

async function fixAdminLogin() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    await client.connect();
    console.log('🔗 Conectado ao banco de dados');

    // Primeiro, verificar se a tabela admins existe
    const tableCheck = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'admins'
      );
    `);
    
    console.log('Tabela admins existe:', tableCheck.rows[0].exists);

    if (!tableCheck.rows[0].exists) {
      console.log('❌ Tabela admins não existe. Criando...');
      
      // Criar tabela admins
      await client.query(`
        CREATE TABLE admins (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log('✅ Tabela admins criada');
    }

    // Verificar se existe admin
    const adminCheck = await client.query('SELECT * FROM admins WHERE username = $1', ['admin']);
    
    if (adminCheck.rows.length === 0) {
      console.log('❌ Admin não existe. Criando...');
      
      const hashedPassword = await bcrypt.hash('InovaAdmin2025!', 12);
      await client.query(`
        INSERT INTO admins (username, password, name, email)
        VALUES ($1, $2, $3, $4)
      `, ['admin', hashedPassword, 'Administrador Principal', 'admin@inovamentelabs.com']);
      
      console.log('✅ Admin criado com sucesso!');
    } else {
      console.log('✅ Admin existe. Atualizando senha...');
      
      const hashedPassword = await bcrypt.hash('InovaAdmin2025!', 12);
      await client.query(`
        UPDATE admins 
        SET password = $1 
        WHERE username = $2
      `, [hashedPassword, 'admin']);
      
      console.log('✅ Senha do admin atualizada!');
    }

    // Verificar o resultado final
    const finalCheck = await client.query('SELECT username, name, email, createdat FROM admins WHERE username = $1', ['admin']);
    console.log('🔐 Admin configurado:', finalCheck.rows[0]);
    
    console.log('\n🎉 Login do admin corrigido!');
    console.log('📋 Use estas credenciais:');
    console.log('   Usuário: admin');
    console.log('   Senha: InovaAdmin2025!');

  } catch (error) {
    console.error('❌ Erro ao corrigir login do admin:', error);
  } finally {
    await client.end();
  }
}

fixAdminLogin();
