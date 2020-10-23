from discord.ext.commands import Bot

bot = Bot(command_prefix='!')

@bot.event
async def on_ready():
    print(f'{bot.user} 에 로그인하였습니다!')

@bot.command()
async def ping(ctx):
    await ctx.send('pong! {0}초'.format(bot.latency))

bot.run('NzQ5NTYxNjA0OTMyMjM5NDEw.X0txpA.cV7ymrMfyLaxm6FEx2075EMiGVA')