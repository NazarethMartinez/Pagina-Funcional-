var nombre= document.getElementById('name');
var buttom1= document.getElementById('bot');
var edad= document.getElementById('age');
var vacunas =document.getElementById('vac');

buttom1.addEventListener('click',

function(){
    window.location.href= "resultados.html"+"?"+"nombre="+nombre.value+"&"+"edad="+edad.value+"&"+"vacunas="+vacunas.value;
}
);

   
