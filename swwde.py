import discord
import asyncio

client = discord.Client()
game = discord.Game("상태메세지")

@client.event
async def on_ready():
    print('Bot Online')
    print(client.user.name)
    print(client.user.id)

@client.event
async def on_message(message):
    if message.author.bot:
        return None
    if message.content == "안녕":
        await message.channel.send("안녕!")

client.run("NzQ0MTA2NTcxMDY3NDI0ODE4.XzeZPw.lV9M90PiBpnDhatkgJnmKby3mso")