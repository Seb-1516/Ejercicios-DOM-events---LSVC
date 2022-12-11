
//ejercicio #1
function ChangeText(){
    var text1 = document.getElementById('textoblue');
    text1.innerText = 'Text Red';
    text1.style.color='red';

    var text2 = document.getElementById('textoy');
    text2.innerText = 'Text Gray';
    text2.style.color='gray';

    var text3 = document.getElementById('textog');
    text3.innerText = 'Text Pink';
    text3.style.color='pink';

}

//ejercicio #2
function ChangeFigure(){
    
    
    var square = document.getElementsByClassName('square');
    console.log(square[0]);
    
    var element = square[0];
    
    element.style.borderRadius = "100%";
}

//ejercicio #3
function ChangeColors(){

    var parent = document.querySelector('div.padre');
    console.log(parent);

    var children = parent.children;
    console.log(children);

    for(var i=0; i<children.length; i++){
        if (i % 2 === 0) 
        {
            var colors = ['red', 'yellow', 'green', 'pink'];
            var random = Math.floor(Math.random() * colors.length);
            children[i+1].style.background = colors[random];
        }
    }
}



//ejercicio #4
function ChangeBackG() {
    // Acceder al elemento body
    var bgchange = document.getElementsByTagName("body")[0];
    // Cambiar el color de fondo del elemento body
    var colors = ['cyan', 'greenyellow', 'violet'];
    var random = Math.floor(Math.random() * colors.length);
    bgchange.style.backgroundColor = colors[random];
}

//ejercicio #5
function ChangeText(){
    // Acceder al elemento de la lista con el índice 1
    var uno = document.getElementById("listauno").children[0];
    uno.textContent = "Naranjas agrias";

    var dos = document.getElementById("listauno").children[1];
    dos.textContent = "Manzanas rojas";

    var tres = document.getElementById("listauno").children[2];
    tres.textContent = "Uvas sin semillas";

    var cuatro = document.getElementById("listauno").children[3];
    cuatro.textContent = "Melón";

    var cinco = document.getElementById("listauno").children[4];
    cinco.textContent = "Carne y pollo";

}


function InvertText(){
    

    var lista = document.getElementById('listados'); 
    var datos = document.getElementsByClassName('textin'); 
    for (var i = datos.length - 2; i >= 0; i--) 
    { 
	    lista.appendChild(datos[i]); 
    } 

}



