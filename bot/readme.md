# Bot de Misiones Secretas de El Súper

## Descripción
Este bot permite asignar misiones secretas a los jugadores de la despedida de soltero, utilizando Telegram. Los jugadores se registran, reciben misiones, y el "Súper" los vigila.

## ¿Cómo Funciona?

1. **Registro de jugadores**
    Los jugadores se registran usando el comando `/registrar [Nombre]`. Los nombres deben ser exactamente los que figuran en la lista oficial de jugadores.
    
2. **Asignación de misiones**
    El máster puede usar el comando `/mision [NombreJugador]` para asignar misiones secretas a los jugadores. Cada misión tiene un código único.

3. **Comandos Disponibles**
    - `/registrar [Nombre]`: Registra a un jugador en el sistema.
    - `/mision [NombreJugador]`: Asigna una misión secreta a un jugador.
    - `/log`: Muestra las misiones asignadas.
    - `/reset`: Resetea el registro de misiones.

## Archivos Necesarios
- **jugadores.md**: Contiene la lista de jugadores.
- **.env**: Archivo que contiene el token de tu bot de Telegram.
- **misiones.json**: (Opcional) Contiene las misiones secretas.

## Instalación

1. Instalar dependencias:
   ```bash
   pip install python-telegram-bot --upgrade
