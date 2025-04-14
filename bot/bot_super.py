import os
import json
import random
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")
MASTER_CHAT_ID = int(os.getenv("MASTER_CHAT_ID"))

with open('bot/misiones.json', 'r') as file:
    misiones = json.load(file)

with open('bot/jugadores.json', 'r') as file:
    jugadores = json.load(file)

asignadas = {}

def generar_codigo():
    letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return random.choice(letras) + random.choice(letras)

async def mision(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if update.effective_chat.id != MASTER_CHAT_ID:
        await update.message.reply_text("Solo El Súper puede asignar misiones.")
        return

    if len(context.args) == 0:
        await update.message.reply_text("Uso: /mision @username")
        return

    username = context.args[0].replace("@", "")
    jugador_encontrado = None

    for nombre, datos in jugadores.items():
        if datos["username"] == username:
            jugador_encontrado = nombre
            break

    if not jugador_encontrado:
        disponibles = [j for j in jugadores if j not in asignadas.values()]
        sugerencia = ", ".join(disponibles) if disponibles else "Ninguno libre"
        await update.message.reply_text(f"No encontrado. Jugadores libres: {sugerencia}")
        return

    codigo = generar_codigo()
    mision = random.choice(misiones)

    asignadas[codigo] = jugador_encontrado

    await context.bot.send_message(chat_id=jugadores[jugador_encontrado]["id"],
        text=f"🔥 Misión secreta de El Súper 🔥\nCódigo: *{codigo}*\n\n{mision}",
        parse_mode='Markdown')

    await update.message.reply_text(f"Misión enviada a {jugador_encontrado} con código {codigo}")

async def log(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if update.effective_chat.id != MASTER_CHAT_ID:
        return
    if not asignadas:
        await update.message.reply_text("Ninguna misión asignada.")
        return
    text = "\n".join([f"{codigo} → {jugador}" for codigo, jugador in asignadas.items()])
    await update.message.reply_text(text)

async def reset(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if update.effective_chat.id != MASTER_CHAT_ID:
        return
    asignadas.clear()
    await update.message.reply_text("Todas las misiones han sido reseteadas.")

app = ApplicationBuilder().token(BOT_TOKEN).build()

app.add_handler(CommandHandler("mision", mision))
app.add_handler(CommandHandler("log", log))
app.add_handler(CommandHandler("reset", reset))

app.run_polling()
