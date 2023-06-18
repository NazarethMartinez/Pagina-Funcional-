var url= window.location.href;
console.log(url);
var urlobj= new URL(url);
var params =urlobj.searchParams;
console.log(params);
var nombre = params.get('nombre');
var edad = params.get('edad');
var vacunas =params.get('vac');

var label1=document.getElementById('bot');
label1.innerHTML="Paciente de nombre: "+nombre+",  su edad es: "+edad+", tiene:"+vacunas+"vacunas en total.";