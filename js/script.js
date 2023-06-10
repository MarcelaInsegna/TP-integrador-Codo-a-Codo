const valorTicket= 200;

let valorEstudiante = 0.2 //es el valor con el descuento
let valorTrainee = 0.5
let valorJunior = 0.85

const cantidad = document.getElementById ("cantidad");
const categoria = document.getElementById("categoria");
const calcular = document.getElementById("calcular");

const pagar = document.getElementById ("pagar");

const botonCalcular = document.getElementById ("calcular");
const botonBorrar = document.getElementById ("reset");


let totalValor=0
function totalPagar () {
    
   switch (categoria.value){
       case "1":  totalValor = parseInt (cantidad.value) * valorTicket * valorEstudiante;
       break;
       case "2":  totalValor = parseInt (cantidad.value) * valorTicket * valorTrainee;
       break;
       case "3":  totalValor = parseInt (cantidad.value) * valorTicket * valorJunior;
       break;
       default:  totalValor = parseInt (cantidad.value) * valorTicket;
       break;
    }

    pagar.innerHTML = `Total a Pagar: $ ${totalValor}` ;

}
botonCalcular.addEventListener("click",totalPagar);

// botonBorrar.reset();

// var elementos = document.getElementsByTagName('input');

// limpiar.onclick = (e)=> { 
//   e.preventDefault();
//   for (let i = 0; i < elementos.length; i++) {
//     elementos[i].value='';          
//   }
// }

