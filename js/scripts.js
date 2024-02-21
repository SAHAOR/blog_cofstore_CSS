console.log('funciona bien');

//DOM SCRIPTING

//querySelector (devuelve solo uno o ningun selector del documento html)
const heading = document.querySelector('.header__texto h2');
//heading.textContent = 'Nuevo heading'; //cambiar elementos en html
//heading.classList.add('nueva__clase'); //agregar clase al elemento





//querySelectorAll (devuelve todos o ningun selector del documento)
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
//enlaces[0].textContent = 'Nuevo texto para enlace'; //modificar texto html
//enlaces[0].href = 'https://www.google.com'; //modificar href del enlace
//enlaces[0].classList.add('nueva--clase'); //agregar clase
//enlaces[0].classList.remove('nueva--clase');





//getElementById (devuele un elemento segun su identificador unico)
const heading2 = document.getElementById('nuevo__heading');
console.log(heading2);




//GENERAR CODIGO HTML DESDE JS

const nuevoEnlace = document.createElement('A'); // crear la etiqueta
nuevoEnlace.href = 'nuevo__enlace.html'; //agregarle el href
nuevoEnlace.textContent = 'Un enlace'; //agregar el contenido
nuevoEnlace.classList.add('navegacion__enlace'); //agregar la clase
const navegacion = document.querySelector('.navegacion'); //agregarlo al documento
//navegacion.appendChild(nuevoEnlace); //agregarlo al documento

console.log(nuevoEnlace);





//EVENTOS EN JS

console.log(1);
//window es el documento global, incluso document es hijo
window.addEventListener('load', imprimir ); //recibe funciones ya listas

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //domcontentload solo espera a que este listo html
    console.log(4);
})

console.log(5);

function imprimir(){
    console.log(2);
}

window.onscroll =function(){
    console.log('scrolling...');
}


//seleccionar elementos de html y ponerle eventos (click en este caso)
//const botonEnviar = document.querySelector('.boton--enviar');

//botonEnviar.addEventListener('click', function(evento){ 
    //console.log(evento); //para ver mucha informacion
    //evento.preventDefault(); //previene comportamiento default del evento 
   // console.log('enviando formulario');
//})


//eventos de los inputs y text area (en este caso  para validar formulario)
const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');

//nombreInput.addEventListener('input', function(e){ //'validacion' tiempo real en input formulario
    //console.log(e.target.value);
//})

nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}


//evento de submit (es mejor que click en formulario porque tiene asociado el formiulario)
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    event.preventDefault();

    //validar el formulario
    const {nombre, email, mensaje} = datos; 
    if(nombre == '' || email == '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios');
        return; //corta el if
    }

    //enviar el formulario correcto alerta
    envioCorrecto('mensaje enviado correctamente');
    console.log('Enviando formulario');
})

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error'); 
    formulario.appendChild(error);

    //Desaparezca alerta luego de 5 segundos
    setTimeout(() => {
        error.remove();
    },2000);
}

function envioCorrecto(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto'); 
    formulario.appendChild(alerta);

    //Desaparezca alerta luego de 5 segundos
    setTimeout(() => {  
        alerta.remove();
    },2000);
}