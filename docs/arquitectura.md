# Arquitectura técnica de El Súper
### Despedida de soltero estilo Gran Hermano

---

## Objetivo del sistema

Crear una experiencia inmersiva, divertida y teatral donde *El Súper* actúa como maestro de ceremonias en una despedida de soltero con estética y mecánicas de Gran Hermano.

Todo funciona alrededor de:
- Voz
- Salseo
- Pruebas
- Puntuaciones
- Ranking en directo
- Cotilleo sin fin

---

## Esquema general del sistema

Jugadores 
↓ 
Hablan con El Súper (por voz) 
↓ 
El Súper responde (con humor e ironía) 
↓ 
Panel del Súper controla el juego manualmente 
↓ 
Puntuaciones a Google Sheets ↓ Ranking en tiempo real con gráfico


---

## Componentes principales

### 1. App de Control Manual (Panel del Súper)
- Versión web HTML/JS
- Permite:
  - Iniciar juego
  - Lanzar pruebas
  - Registrar puntuaciones
  - Llamar a jugadores
  - Ver ranking

### 2. Google Sheets
- Registro de todas las puntuaciones.
- Cada fila contiene:
  - Fecha
  - Jugador
  - Puntos
  - Día del juego
  - Descripción / motivo

### 3. Gráfico Ranking
- App web conectada al Sheets.
- Muestra el ranking en tiempo real.
- Visual, limpio y teatral.

### 4. Audio
- Carpeta `/audio/`
- Sintonía de Gran Hermano y otros efectos.

### 5. Prompts IA
- Carpeta `/prompts/`
- Textos que utiliza El Súper para:
  - Bienvenida
  - Presentaciones personalizadas
  - Respuestas generales
  - Frases míticas

---

## Extras avanzados

### Raspberry Pi + VPN
- Posibilidad de usar Raspberry conectada a VPN.
- Para grabar el confesionario directamente al servidor Synology del usuario.

### Grabación confesionario
- Cámara o micro graban automáticamente.
- Los vídeos se almacenan localmente o en NAS.

### Posible integración futura con IA por voz
- Firebase Studio
- Gemini
- ChatGPT API

Para que El Súper responda 100% por voz en directo y gestione las dinámicas solo hablando con los jugadores.

