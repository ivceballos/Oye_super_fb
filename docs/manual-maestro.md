# Manual del Maestro del Juego
### Para controlar la experiencia Gran Hermano durante la despedida

Este documento es tu guía para activar y manejar todo lo que ocurra durante el finde.

---

## 1. Antes de empezar

✔️ Conecta todos los dispositivos Alexa (si se usan).  
✔️ Abre el **Panel del Súper** en un navegador.  
✔️ Verifica acceso a Google Sheets (puntuaciones).  
✔️ Ten la música de GH lista (desde carpeta `/audio/` o integrada).

---

## 2. Iniciar el juego

1. Desde el Panel, pulsa **"Iniciar Juego"**
2. Se reproduce la **melodía de GH**
3. El Súper lanza por voz la **bienvenida completa** (texto en `/prompts/bienvenida.md`)
4. Comienzan las **presentaciones uno a uno**:
   - El Súper llama a cada jugador
   - Espera su presentación
   - Remata con su respuesta personalizada (de `/prompts/presentaciones.md`)
   - Le indica que diga: “Súper, reconoce mi voz” en el confesionario

---

## 3. Durante el juego

### Pruebas diarias
- Lanza entre 4 y 5 pruebas al día
- Puedes elegirlas desde el listado de `/docs/pruebas-castigos.md`
- Algunas son divertidas, otras son castigos

### Registro de puntuaciones
- Cada vez que termine una prueba, abre el **Panel del Súper**
- Introduce:
  - Jugador
  - Puntos
  - Día (se calcula automático)
  - Descripción (opcional)
- Se registra todo en el Google Sheet automáticamente

### Ranking en tiempo real
- Abre la web del **Ranking GH**
- Se actualiza al momento desde Sheets

---

## 4. Confesionario

🔊 Solo activo cuando tú (o Iván) lo actives desde el sistema  
👂 El Súper escucha y responde de forma irónica, simpática y curiosa  
🎥 Si hay cámara conectada, graba directamente al NAS vía Raspberry Pi + VPN

---

## 5. Nominaciones

1. Activa “modo nominación” desde el Panel o con Alexa
2. El Súper llamará uno a uno a los jugadores
3. Cada jugador nomina con 1, 2 y 3 puntos, justificando
4. Si no termina en 1 minuto, se le asignan +3 puntos como penalización

⚠️ Las nominaciones suman puntos *positivos*, como si fueran votos de apoyo.

---

## 6. Reiniciar el juego

- Desde el Panel puedes pulsar “Reiniciar juego”
- Se borra el registro de puntuaciones
- Se elimina el Día 1 (para recalcular desde el nuevo inicio)

---

## 7. Frases clave

Puedes decir en cualquier momento:
- “Súper, ¿me escuchas?”
- “Súper, pon orden”
- “Súper, ¿quién va ganando?”
- “Súper, dame una prueba”
- “Súper, quiero nominar”

El Súper te responderá con humor e información.

---

## 8. Emergencias

Si algo falla (Alexa, red, app):
- Puedes usar el **Panel del Súper** para hacerlo todo manual
- Las frases, pruebas y respuestas están en el repo
- Puedes leerlas tú mismo o improvisar: el estilo es lo que cuenta

---

🎯 Consejo final:
> El Súper no solo dirige. Observa, escucha y juzga.
> Pero sobre todo… se lo pasa igual o mejor que los jugadores.

