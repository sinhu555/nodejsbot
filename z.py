from discord.ext.commands import Bot

bot = Bot(command_prefix='!')

@bot.event
async def on_ready():
    print(f'{bot.user} 에 로그인하였습니다!')

@bot.command()
async def ping(ctx):
    await ctx.send('pong! {0}초'.format(bot.latency))

bot.run('NzQ5Mjc0NjMxMjY5MjUzMTUw.X0pmYA.xdf5rm0cqZ8gqBK3jupLU_DD9Gg')