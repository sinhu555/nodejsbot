import discord
import asyncio

client = discord.Client()
game = discord.Game("ㅋㅋㅋㅋㅋㅋㅋ")

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
    if message.content == "콘스":
        await message.channel.send("코스스")
client.run("NzQ5NTYxNjA0OTMyMjM5NDEw.X0txpA.ilZ2735OW-1terCpO8EMThLR1Bg")