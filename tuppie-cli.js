import readline from 'readline';
import fs from 'fs';
import path from 'path';

// Configuración por defecto
const config = {
  webhookUrl: 'https://mickaelvc.app.n8n.cloud/webhook/tupperware-chat',
  userName: 'Test User',
  userPhone: '+51999888777'
};

// Configurar la interfaz de lectura en la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tú 👤: '
});

console.clear();
console.log('🤖 ====================================');
console.log('    Tupperware ChatBot CLI Tester      ');
console.log('    Asistente Virtual de Tuppie        ');
console.log('==================================== 🤖\n');
console.log('Conectado ✅. Escribe tu mensaje y presiona Enter.');
console.log('Para enviar un audio, usa: /audio <ruta_del_archivo>');
console.log('Para salir, escribe: /salir\n');

console.log(`Tuppie 🤖: 👋 ¡Hola! Soy Tuppie, tu asistente virtual. ¿En qué puedo ayudarte hoy?\n`);
rl.prompt();

// Función para enviar texto a n8n
async function sendText(message) {
  try {
    const response = await fetch(config.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: config.userPhone,
        name: config.userName,
        message: message
      })
    });

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    
    const data = await response.json();
    console.log(`\nTuppie 🤖: ${data.response || data.output || 'Mensaje recibido 💙'}\n`);
  } catch (error) {
    console.log(`\n❌ Error de conexión: No se pudo conectar con el webhook de n8n.\n`);
  } finally {
    rl.prompt();
  }
}

// Función para enviar audio a n8n simulando el FormData
async function sendAudio(filePath) {
  const resolvedPath = path.resolve(filePath.trim());
  
  if (!fs.existsSync(resolvedPath)) {
    console.log(`\n❌ Error: No se encontró el archivo de audio en la ruta: ${resolvedPath}\n`);
    rl.prompt();
    return;
  }

  console.log(`\n🎤 Subiendo audio: ${path.basename(resolvedPath)}...`);

  try {
    const fileBuffer = fs.readFileSync(resolvedPath);
    const fileBlob = new Blob([fileBuffer], { type: 'audio/mpeg' }); // Asumiendo mp3 o genérico
    
    const formData = new FormData();
    formData.append('data', fileBlob, path.basename(resolvedPath));
    formData.append('phone', config.userPhone);
    formData.append('name', config.userName);
    formData.append('message', 'Audio enviado desde CLI');

    const response = await fetch(config.webhookUrl, {
      method: 'POST',
      body: formData // Node maneja los headers de Content-Type automáticamente con FormData
    });

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const data = await response.json();
    console.log(`\nTuppie 🤖: ${data.response || data.output || '¡Audio procesado! 💙'}\n`);
  } catch (error) {
    console.log(`\n❌ Error al procesar el audio: ${error.message}\n`);
  } finally {
    rl.prompt();
  }
}

// Escuchar lo que el usuario escribe en la terminal
rl.on('line', (line) => {
  const input = line.trim();

  if (!input) {
    rl.prompt();
    return;
  }

  if (input.toLowerCase() === '/salir') {
    console.log('\n👋 ¡Nos vemos, bro! Cerrando Tuppie Tester...\n');
    process.exit(0);
  }

  // Detectar si el usuario quiere enviar un audio
  if (input.toLowerCase().startsWith('/audio')) {
    const filePath = input.replace('/audio', '').trim();
    if (!filePath) {
      console.log('\n⚠️ Debes especificar la ruta. Ejemplo: /audio ./nota_de_voz.mp3\n');
      rl.prompt();
    } else {
      sendAudio(filePath);
    }
  } else {
    // Si no es un comando, es un mensaje de texto normal
    console.log('Tuppie está escribiendo...');
    sendText(input);
  }
});