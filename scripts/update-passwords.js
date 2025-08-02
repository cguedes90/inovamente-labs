const { Client } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

async function updatePasswords() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    await client.connect();
    console.log('🔗 Conectado ao banco de dados');

    // Atualizar senha do cliente teste
    const newClientPassword = await bcrypt.hash('ClienteSeguro2025!', 12);
    await client.query(`
      UPDATE clients 
      SET password = $1 
      WHERE email = 'cliente@teste.com'
    `, [newClientPassword]);

    console.log('✅ Senha do cliente atualizada');
    console.log('🔐 Nova credencial: cliente@teste.com / ClienteSeguro2025!');
    console.log('🔐 Nova credencial admin: admin / InovaAdmin2025!');
    console.log('🚨 IMPORTANTE: Anote essas credenciais em local seguro!');

  } catch (error) {
    console.error('❌ Erro ao atualizar senhas:', error);
  } finally {
    await client.end();
  }
}

updatePasswords();
