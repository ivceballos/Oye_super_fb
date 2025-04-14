import json
import random
import string
import os
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes, MessageHandler, filters
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('BOT_TOKEN')

# Diccionario de jugadores y variantes
jugadores_oficiales = {
    "Adrián": ["Adrian", "Adri"],
    "Bea": ["Bea", "Bei"],
    "María": ["Maria", "Meri", "Mari"],
    "Paco": ["Paco", "Francisco", "Francisco José"],
    "Gonzalo": ["Gonzalo", "Gon"],
    "Rubén": ["Ruben"],
    "Crina": ["Crina", "Cristina"],
    "Álvaro": ["Alvaro"],
    "Aída": ["Aida"],
    "Iván": ["Ivan"],
    "Anita": ["Anita", "Ana"],
    "Adri Cuadrado": ["Adri Cuadrado", "Cuadrado"],
    "Raquel": ["Raquel"]
}

# Carga o crea jugadores.json
if not os.path.exists('bot/jugadores.json'):
    with open('bot/jugadores.json', 'w') as f:
        json.dump({}, f)

def guardar_jugadores():
    with open('bot/jugadores.json', 'w') as file:
        json.dump(jugadores, file, indent=2)

def cargar_jugadores():
    global jugadores
    with open('bot/jugadores.json', 'r') as file:
        jugadores = json.load(file)

cargar_jugadores()

misiones = {
    1: "Debes conseguir que alguien te abrace espontáneamente.",
    2: "Haz que alguien te cuente un secreto.",
    3: "Provoca que alguien cante contigo.",
    4: "Consigue que alguien diga 'Te quiero'.",
    5: "Logra que alguien te prepare una bebida."
}

asignaciones = {}

def generar_codigo():
    return ''.join(random.choices(string.ascii_uppercase, k=2))

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Bienvenido. Usa /registrar [TuNombre] para entrar en el sistema.")

async def registrar(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if len(context.args) != 1:
        lista = ', '.join(jugadores_oficiales.keys())
        await update.message.reply_text(f"Uso: /registrar [TuNombre]\nNombres disponibles: {lista}")
        return

    entrada = context.args[0].capitalize()
    username = update.effective_user.username or "sin_username"
    chat_id = update.effective_user.id

    cargar_jugadores()

    nombre_detectado = None
    for nombre, variantes in jugadores_oficiales.items():
        if entrada in variantes or entrada == nombre:
            nombre_detectado = nombre
            break

    if not nombre_detectado:
        lista = ', '.join(jugadores_oficiales.keys())
        await update.message.reply_text(f"No te reconozco. Elige un nombre de esta lista: {lista}")
        return

    if nombre_detectado in jugadores:
        await update.message.reply_text("Ese jugador ya está registrado.")
        return

    jugadores[nombre_detectado] = {
        "username": username,
        "id": chat_id
    }

    guardar_jugadores()
    await update.message.reply_text(f"Registrado como {nombre_detectado}. Prepárate para las misiones...")

async def mision(update: Update, context: ContextTypes.DEFAULT_TYPE):
    cargar_jugadores()
    if len(context.args) != 1:
        await update.message.reply_text("Uso: /mision [NombreJugador]")
        return

    jugador = context.args[0].capitalize()

    if jugador not in jugadores:
        await update.message.reply_text("Jugador no encontrado.")
        return

    codigo = generar_codigo()
    numero_mision = random.choice(list(misiones.keys()))
    mision_text = misiones[numero_mision]

    asignaciones[codigo] = jugador
    chat_id_jugador = jugadores[jugador]["id"]

    mensaje = (
        f"🔥 Misión secreta de El Súper 🔥\n"
        f"Código: {codigo}\n\n"
        f"{mision_text}\n"
        f"Si lo logras, El Súper lo sabrá... si te pillan, adiós puntos."
    )

    await context.bot.send_message(chat_id=chat_id_jugador, text=mensaje)
    await update.message.reply_text(f"Misión enviada a {jugador}.")

async def log(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not asignaciones:
        await update.message.reply_text("No hay misiones asignadas.")
        return

    texto = "Misiones asignadas:\n"
    for codigo, jugador in asignaciones.items():
        texto += f"- {jugador}: {codigo}\n"

    await update.message.reply_text(texto)

async def reset(update: Update, context: ContextTypes.DEFAULT_TYPE):
    asignaciones.clear()
    await update.message.reply_text("Registro de misiones reseteado.")

app = ApplicationBuilder().token(TOKEN).build()

app.add_handler(CommandHandler("start", start))
app.add_handler(CommandHandler("registrar", registrar))
app.add_handler(CommandHandler("mision", mision))
app.add_handler(CommandHandler("log", log))
app.add_handler(CommandHandler("reset", reset))

app.run_polling()
