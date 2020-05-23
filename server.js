const koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_ENV !== 'peoduction'

const app = next({dev})

const router = new Router()

const handle = app.getRequestHandler()



app.prepare().then(() => {
	const serve = new koa()



	// routes
	router.get('/test',(ctx)=>{
		ctx.body = '<p>request /test</p>'
	})

	router.get('/other/:id',async (ctx)=>{
		const id =  ctx.params.id
		await handle(ctx.req,ctx.res,{
			pathname:'/other',// 返回pages下的other页面
			query:{amp:{"id":id,"name":"majy"}}
		})
		ctx.repsond = true
	})
	

	router.get('/test/list',(ctx)=>{
		ctx.body = {success:true}
		ctx.set('Content-Type','application/json')
	})



	serve.use(router.routes())

	serve.listen(3000,()=>{
		console.log('next success')
	})


	serve.use(async (ctx,next)=>{
		await handle(ctx.req,ctx.res)
		ctx.repsond = false
	}) 
})

