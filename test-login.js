const testLogin = async () => {
  try {
    const response = await fetch('http://localhost:3003/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'cliente@exemplo.com',
        password: '123456',
        type: 'client'
      }),
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Resultado:', result);
  } catch (error) {
    console.error('Erro:', error);
  }
};

testLogin();
