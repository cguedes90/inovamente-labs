const { Client } = require('pg');
require('dotenv').config();

async function checkAdminTable() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    await client.connect();
    console.log('🔗 Conectado ao banco');
    
    // Verificar estrutura da tabela
    const columns = await client.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'admins'
      ORDER BY ordinal_position;
    `);
    
    console.log('📋 Colunas da tabela admins:');
    columns.rows.forEach(col => {
      console.log(`  - ${col.column_name}: ${col.data_type}`);
    });
    
    // Verificar admin
    const admin = await client.query('SELECT * FROM admins WHERE username = $1', ['admin']);
    console.log('\n👤 Admin encontrado:', admin.rows.length > 0 ? 'SIM' : 'NÃO');
    
    if (admin.rows.length > 0) {
      const adminData = admin.rows[0];
      console.log('📊 Dados do admin:');
      console.log(`  - ID: ${adminData.id}`);
      console.log(`  - Username: ${adminData.username}`);
      console.log(`  - Name: ${adminData.name}`);
      console.log(`  - Email: ${adminData.email}`);
      console.log(`  - Password hash: ${adminData.password ? 'EXISTS (✅)' : 'MISSING (❌)'}`);
    }

    console.log('\n🔐 Login deve funcionar com:');
    console.log('   Usuário: admin');
    console.log('   Senha: InovaAdmin2025!');

  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await client.end();
  }
}

checkAdminTable();
