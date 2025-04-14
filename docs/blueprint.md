# **App Name**: El Súper Simulator

## Core Features:

- Super's Control Panel: Web panel to manually trigger audio playback (music, typical phrases, etc.) and launch challenges. Mimics the functionalities described in the 'Panel del Súper' link.
- Ranking Visualization: Display and manage the ranking of players in real time, fetching data from the Google Sheets (ID: 1S6WeE_GVOqpNq5FG8FAXYdc6zVzL0-cBRBVnKuxW2ec).  Visualization of this ranking at: https://ivceballos.github.io/ranking-gh/
- Voice Response System: Voice Interaction: Use AI to generate acid, funny, and theatrical voice responses from 'El Súper' based on player voice commands.
- Nomination Recording & Processing: AI powered tool to record and transcribe user nominations. Extract the nominations (3 points to..., 2 points to..., 1 point to...) and justifications.  Apply penalty of +3 points if the player doesn't justify the nomination.

## Style Guidelines:

- Primary color: Dark gray (#333333) for a serious and dominant feel.
- Secondary color: Light gray (#DDDDDD) for contrast and readability.
- Accent: Electric blue (#7DF9FF) for highlights and interactive elements, mimicking surveillance lights.
- Use a grid-based layout to organize information clearly.
- Use simple, geometric icons to represent different actions and categories.

## Original User Request:
¿QUÉ ES ESTO?

Este sistema está pensado para una experiencia inmersiva de despedida de soltero inspirada en el programa de televisión Gran Hermano.

Los jugadores (amigos del novio) vivirán durante un fin de semana una simulación de reality show en la que El Súper (un personaje de voz controlado por IA) les vigila, les manda pruebas, les pincha, les pregunta cosas y les gestiona las puntuaciones.

Todo está diseñado para ser divertido, teatral, ácido pero amable, y totalmente personalizable.
¿QUÉ FUNCIÓN TIENE EL SÚPER?

    Es un personaje 100% de voz.

    Es quien controla el juego.

    Es quien interactúa con los jugadores.

    Es quien gestiona las pruebas, castigos y nominaciones.

    Es quien lleva el registro de puntuaciones.

    Es quien crea ambiente y teatralidad.

¿CÓMO FUNCIONA EL SISTEMA?
Interacción Principal

→ Los jugadores hablan al Súper con comandos de voz estilo:

    "Súper, llama a Paco."

    "Súper, quiero una prueba."

    "Súper, ¿quién va ganando?"

    "Súper, quiero nominar."

El Súper responde SIEMPRE por voz, en tono ácido, divertido y teatral.
Gestión Manual (Iván como máster del juego)

Iván dispone de un Panel web o app móvil donde puede:

    Lanzar música.

    Llamar jugadores.

    Registrar puntos.

    Mostrar ranking.

    Lanzar frases típicas o frases random.

    Lanzar pruebas o castigos.

    Finalizar las presentaciones.

Enlaces:

    Panel del Súper: https://www.ivceballos.com/despedida2407/panel-del-super/Panel-super_simple.html

    Gráfico de Ranking: https://ivceballos.com/despedida2407/ranking-gh/ranking.html

Registro de Puntos

    Integrado en Google Sheets (ID: 1S6WeE_GVOqpNq5FG8FAXYdc6zVzL0-cBRBVnKuxW2ec)

    Formato:

Fecha | Puesto | Jugador | Puntos | Día

Ranking Visual

    Gráfico que se actualiza automáticamente y muestra quién va ganando.

¿QUÉ ROL TIENE EL SÚPER?

    Es divertido, teatral, ácido pero simpático.

    Siempre habla en primera persona.

    Siempre quiere saber más.

    Siempre hace preguntas cotillas cuando alguien le cuenta algo.

    Nunca humilla salvo en las respuestas predefinidas de la presentación inicial.

    Nunca es borde gratuito.

    Es como una mezcla de cotilla de pueblo + Gran Hermano + IA con ego.

Frase recurrente: "No olvidéis que yo lo veo TODO."
DINÁMICA DEL JUEGO
Inicio del Juego

    Iván pulsa Iniciar Juego.

    Suena la música de GH: https://ivceballos.com/despedida2407/audio/Sint_GH-V-corta.m4a

    El Súper dice el siguiente mensaje:

Bienvenidos...
Os creíais que veníais de despedida de soltero...
pero acabáis de entrar en la casa de Gran Hermano.

A partir de este momento... nada será lo que esperabais.
Aquí se acabaron los planes tranquilos, las siestas largas y las escapadas discretas.

Durante vuestra estancia, tendréis que enfrentaros a pruebas, retos y alguna que otra humillación pública.

Yo os observo, os escucho... y, sobre todo... os juzgo.

Solo hay una norma realmente importante:
Competid, divertíos... y desconfiad de todo y de todos.

Porque aquí, hasta vuestros amigos... pueden ser vuestros peores enemigos.

Suerte...
La vais a necesitar.

(pausa teatral)

Y por supuesto... unas palabras para ti, Adrián.

Tú, que solo querías una despedida de soltero tranquila...
Un plan de risas, amigos y poco más.

Pero claro... tus amigos son estos.

Así que lo siento, Adrián...
Has caído en la trampa.

Esta ya no es tu despedida.
Esta... es nuestra casa.

Presentación de Jugadores

    El Súper llama uno a uno a los jugadores:

    "Jugador... Da un paso al frente. Preséntate."

    Después de que hablen, El Súper responde con su frase predefinida (ácida y divertida). (que incluiremos después)

SISTEMA DE NOMINACIONES
Dinámica:

    Iván activa Modo Nominaciones desde el Panel.

    El Súper llama uno a uno a los jugadores al confesionario.

    Cada jugador debe decir:

        "Doy 3 puntos a..."

        "2 puntos a..."

        "1 punto a..."

        Y justificar.

    El Súper recoge y registra automáticamente esas nominaciones en Google Sheets.

Reglas:

    Si el jugador no justifica → Penalización automática de +3 puntos para él.

    Si tarda demasiado → Comentario irónico.

GRABACIÓN DEL CONFESIONARIO
Cómo funciona:

    Dentro del confesionario hay un dispositivo (móvil o cámara) conectado a un servidor Synology vía VPN.

    La grabación de las nominaciones se realiza automáticamente.

Cómo se consigue:

    Raspberry Pi 2 conectada a internet en la casa rural.

    VPN activa contra el Synology de Iván.

    Todo lo que se graba en el confesionario se guarda en remoto en su NAS.

PAPEL DE LA RASPBERRY PI
Dispositivo	Función
Raspberry Pi	Mantiene conexión VPN constante contra Synology
Cámara / móvil	Graba audio/vídeo dentro del confesionario
Synology NAS	Almacena automáticamente las grabaciones
VISUALIZACIÓN DEL RANKING

Siempre accesible desde: https://ivceballos.github.io/ranking-gh/

Este ranking:

    Se actualiza en tiempo real desde Google Sheets.

    Muestra la evolución de puntos por jugador.

    Es parte clave del juego para generar tensión y cotilleo.

EN RESUMEN

Este juego está diseñado para:

    Crear una experiencia inmersiva.

    Generar momentos divertidos, tensos y teatrales.

    Hacer sentir a los jugadores dentro de un reality show.

    Registrar y visualizarlo todo.

    Reirse mucho pero de forma amable.
  