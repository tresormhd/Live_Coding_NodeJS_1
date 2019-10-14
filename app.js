const express = require('express')

const app = express()
const port = 9090

app.set('views','./views');
app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/',(request,response)=>{
    response.render('index')
})
app.get('/menu',(request,response)=>{
    response.render('menu')
})
app.get('/reservation',(request,response)=>{
    response.render('reservation')
})
app.get('/gallery',(request,response)=>{
    response.render('gallery')
})
app.get('/about',(request,response)=>{
    response.render('about')
})
app.get('/blog',(request,response)=>{
    response.render('blog')
})
app.get('/blog-detail',(request,response)=>{
    response.render('blog-detail')
})
app.get('/contact',(request,response)=>{
    response.render('contact')
})


app.listen(port,()=> console.log('demarre sur ' + port ))