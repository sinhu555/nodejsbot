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
    if message.content == "!봇":
        await message.channel.send("난봇임")
    if message.content == "24":
        await message.channel.send("24시간")

client.run("NzYzNjUwNTU3OTQ0MDA0NjU4.X36zAA.haJ5ibQr27Wt-AkZtU_1IAHE9TE")