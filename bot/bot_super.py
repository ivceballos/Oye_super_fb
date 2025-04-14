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
        return

    if len(context.args) == 0:
        await update.message.reply_text("¿A quién le quieres mandar misión?")
        return

    jugador = context.args[0]
    if jugador not in jugadores:
        await update.message.reply_text("Jugador no encontrado.")
        return

    codigo = generar_codigo()
    mision = random.choice(misiones)

    asignadas[jugador] = codigo

    await context.bot.send_message(chat_id=jugadores[jugador],
        text=f"🔥 Misión secreta de El Súper 🔥\nCódigo de misión: *{codigo}*\n\n{mision}",
        parse_mode='Markdown')

    await update.message.reply_text(f"Misión enviada a {jugador} con código {codigo}.")

async def log(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if update.effective_chat.id != MASTER_CHAT_ID:
        return
    if not asignadas:
        await update.message.reply_text("Ninguna misión asignada aún.")
    else:
        texto = "\n".join([f"{j} → Código: {c}" for j, c in asignadas.items()])
        await update.message.reply_text(texto)

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
