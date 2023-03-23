const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  ctx.body = "hello, Marquez, it's time to learn deploy docker image using jenkins,update 1 + update 2"
})

app.listen(3010, () => {
  console.log('3010端口已启动')
})
