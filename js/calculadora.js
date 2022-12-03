
window.addEventListener("load",()=>{/*ESCUCHAMOS CUANDO SE CARGA EL DOC*/
    const display = document.querySelector(".calculadora-display");
    const keypadButtons = document.getElementsByClassName("keypad-button");

/*creamos constante para convertir el htmlcolection a array para poder iterar*/
    const keypadButtonsArray = Array.from(keypadButtons);


/*iteramos array de botones*/
    keypadButtonsArray.forEach((button) =>{

/*cuando el usuario hace click en el boton, lo muestra en consola */
        button.addEventListener("click",()=>{
            calculadora(button,display);
        })
    })
});

function calculadora(button,display){
    switch(button.innerHTML){
        case "AC":
            borrar(display);
            break;
        case "=":
            calcular(display);
            break;
        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display,button){
    if(display.innerHTML == 0){
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}

