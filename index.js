const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonClick = boton.textContent;

        //borra todo
        if(boton.id === "clear"){
            pantalla.textContent = "0";
            return;
        }

        //boora el ultimo
        if(boton.id === "left"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.innerHTML = "0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0,-1);
        } 
        return;
        }

        //resolver
        if(boton.id === "igual"){
            let regex = /\d+/;
            let matches = pantalla.textContent.match(regex);
            try{  
                    pantalla.textContent = eval(pantalla.textContent)
            }catch{
                if(pantalla.textContent.includes("X")){
                    let operacion = pantalla.textContent;
                    operacion = operacion.replace(/X/g, "*");//remplazamos la X por * para eval
                    pantalla.textContent = eval(operacion);
                }
                //resolvemos pero la raiz pq eval no calcula eso
                else if(pantalla.textContent.includes("√")){
                     //formula para encontrar numeros
                     //sacamos los numeros
                    if (matches) {
                        let numero = parseFloat(matches[0]); // Convertir la coincidencia a un número
                        let resultado = Math.sqrt(numero); // Calcular la raíz cuadrada
                        pantalla.textContent = resultado;//resltado de la raiz
                    } else {
                        console.log("No se encontró un número en la pantalla.");
                    }
                }else if(pantalla.textContent.includes("cos")){
                    let numero = parseFloat(matches[0]);
                    let resultado = Math.cos(numero); 
                    pantalla.textContent = resultado;
                }else if(pantalla.textContent.includes("tan")){
                    let numero = parseFloat(matches[0]);
                    let resultado = Math.tan(numero); 
                    pantalla.textContent = resultado;
                }else if(pantalla.textContent.includes("sin")){
                    let numero = parseFloat(matches[0]);
                    let resultado = Math.sin(numero); 
                    pantalla.textContent = resultado;
                }else{
                    pantalla.textContent = "Error";
                }
            }
            return;
        }

        //escuchar el click
        if(pantalla.textContent == 0 || pantalla.textContent === "Error"){
            pantalla.innerHTML = botonClick;
        }else{
            pantalla.innerHTML += botonClick;
        }
    })
})