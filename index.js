let Koa = require('koa');
let Router = require('koa-router');
let static = require('koa-static');
let path = require('path');
let fs = require('fs');
let app = new Koa();
let router = new Router();

app.use(static(path.join(__dirname, 'www')));

app.on('error', (err)=>{
  console.log(err);
})
app.use(router.routes());
app.listen(9004);
