const bcrypt = require('bcrypt');

async function testPassword() {
  const testPassword = 'InovaAdmin2025!';
  
  // Hash da senha atual no banco
  const currentHash = '$2b$12$NZbUXJXX4St65tR8MqK5NOUT.lEuPy3eJ32iSTqCQeeQCIR.zwC8K';
  
  console.log('🧪 Testando senha:', testPassword);
  console.log('📊 Hash no banco:', currentHash);
  
  // Testar se a senha bate com o hash
  const isValid = await bcrypt.compare(testPassword, currentHash);
  console.log('✅ Senha válida:', isValid ? 'SIM' : 'NÃO');
  
  // Gerar novo hash
  const newHash = await bcrypt.hash(testPassword, 12);
  console.log('🆕 Novo hash gerado:', newHash);
  
  // Testar novo hash
  const newIsValid = await bcrypt.compare(testPassword, newHash);
  console.log('✅ Novo hash válido:', newIsValid ? 'SIM' : 'NÃO');
}

testPassword();
