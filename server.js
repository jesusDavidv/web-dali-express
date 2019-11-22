const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));//con esto podemos mostrar la vista del html
// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/',  (req, res)=> {
 
   res.render('home',{
     nombre:'JESUS',
  
   });

  // res.send('Hello World')
});


app.get('/about',  (req, res)=> {
 
  res.render('about',{
    
  });

});

///app.get('/data',  (req, res)=> {
//res.send('Hello World')
//});
app.listen(port, ()=>{
  console.log(`EsEscuchado peticiones en el puerto ${port}`);
}); 