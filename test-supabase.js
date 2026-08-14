// Script de prueba para Supabase
// Node.js 18+ tiene fetch integrado

const SUPABASE_URL = 'https://lslpgahpscpxldgitkjr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbHBnYWhwc2NweGxkZ2l0a2pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3MDY2MjksImV4cCI6MjEwMjI4MjYyOX0.Ph1p85cstgi1uM-m8WB-Z90Zj8mprWBeq7kCj8mQeF0';

async function testSupabase() {
  try {
    // Prueba 1: Verificar tablas
    console.log('Probando conexión con Supabase...');
    
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/photo_records?limit=1`,
      {
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Status:', response.status);
    const data = await response.json();
    console.log('Response:', data);
    
    if (response.ok) {
      console.log('✅ Tabla photo_records existe y es accesible');
    } else {
      console.log('❌ Error:', data);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testSupabase();
