<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=40&duration=3000&pause=1000&color=FF004E&center=true&vCenter=true&width=600&lines=Tuppie+AI;Corporate+Assistant;Smart+Automation" alt="Tuppie AI" />
  
  <p><b>Asistente de Inteligencia Artificial para la gestión de ventas, catálogos corporativos y automatización de consultas vía WhatsApp.</b></p>

  <a href="https://mickaeldesigner.github.io/tupperware-chat/"><b>🔴 VER LIVE DEMO 🔴</b></a>
</div>

---

### 🧠 El Reto y la Solución
En el ecosistema corporativo y de retail, la atención al cliente repetitiva genera cuellos de botella. **Tuppie** no es solo un chatbot tradicional; es un asistente inteligente diseñado para comprender intenciones, consultar catálogos en tiempo real, guardar contactos, gestionar agendas y guiar al usuario hacia la conversión, todo manteniendo una identidad de marca cohesiva.

### 🛠️ Arquitectura y Tech Stack
Una intersección entre lógica de backend robusta y flujos conversacionales fluidos.

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-281C38?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Evolution_API-FF004E?style=for-the-badge&logo=api&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-281C38?style=for-the-badge&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-FF004E?style=for-the-badge&logo=javascript&logoColor=white" />
</div>

### ⚡ Core Features
- **Procesamiento de Lenguaje Natural:** Interpretación de intenciones de compra y consultas de stock de productos Tupperware.
- **Catálogo Inteligente:** Respuestas automatizadas e instantáneas sobre características de productos, precios y disponibilidad.
- **Soporte Multimedia:** Capacidad nativa para procesar y responder tanto mensajes de texto como notas de voz de las clientas.
- **Integración fluida con WhatsApp:** Usando Evolution API para respuestas de latencia ultrabaja.
- **Identidad Propia:** Micro-copys y UX conversacional diseñados para reflejar la voz cálida y cercana de la marca Tupperware.

---

### 🧪 Entornos de Prueba (Testers)
Para garantizar la estabilidad del flujo antes de pasar a producción, el repositorio incluye dos interfaces de simulación conectadas directamente al webhook del core:

1. **Web UI Tester (`index.html`):** Interfaz gráfica de frontend para demostraciones visuales, validación de UX y simulación de envío de audios mediante interfaz fluida.
2. **CLI Tester (`tuppie-cli.js`):** Entorno interactivo de terminal para desarrollo. Permite debuggear payloads y simular el envío de archivos binarios directamente desde consola.

**Ejecución del entorno CLI:**
```bash
node tuppie-cli.js
