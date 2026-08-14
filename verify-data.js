// Verificar que los datos se guardaron en Supabase
const SUPABASE_URL = 'https://lslpgahpscpxldgitkjr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbHBnYWhwc2NweGxkZ2l0a2pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3MDY2MjksImV4cCI6MjEwMjI4MjYyOX0.Ph1p85cstgi1uM-m8WB-Z90Zj8mprWBeq7kCj8mQeF0';

async function verifyData() {
  try {
    console.log('\n=== Verificando datos en Supabase ===\n');
    
    // Obtener los registros
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/photo_records?order=created_at.desc&limit=5`,
      {
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log('❌ Error:', error.message);
      return;
    }

    const records = await response.json();
    
    if (records.length === 0) {
      console.log('⚠️ No hay registros en la base de datos');
      return;
    }

    console.log(`✅ Se encontraron ${records.length} registro(s):\n`);
    
    records.forEach((record, index) => {
      console.log(`📋 Registro ${index + 1}:`);
      console.log(`   Usuario: ${record.nombre_usuario}`);
      console.log(`   Especie: ${record.especie_id}`);
      console.log(`   Fecha: ${record.fecha}`);
      console.log(`   Lugar: ${record.lugar}`);
      console.log(`   Coordenadas: ${JSON.stringify(record.coordenadas)}`);
      console.log(`   Observaciones: ${record.observaciones}`);
      console.log(`   Foto URL: ${record.photo_url || '(no subida)'}`);
      console.log(`   Creado: ${new Date(record.created_at).toLocaleString()}`);
      console.log('');
    });

    console.log('✅ Los datos se guardaron correctamente en Supabase');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

verifyData();
