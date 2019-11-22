//helpers
const hbs = require('hbs');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
 });
 
 hbs.registerHelper('capitalizar',(texto)=>{
 
   let palabra=texto.split('');
   palabra.forEach((palabras,idx)=>{
     palabra[idx]=palabras.charAt(0).toUpperCase()+palabras.slice(1).toLowerCase();
 
   });
   return palabra.join('');
 
 });
 