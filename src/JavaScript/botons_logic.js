const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonClick = boton.textContent;
        const maxLength = 30 - 1;

        //max de caracteres
        if(pantalla.textContent.length > maxLength){
            pantalla.innerHTML = text.slice(0, maxLength);
        }

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

        //resolver operaciones del lado principal
        if (boton.id === "igual") {
            let contenido = pantalla.textContent;
            contenido = contenido.replace(/X/g, "*");
            const operaciones = {
                '√': (numero) => Math.sqrt(numero),
                'cos': (numero) => {
                    const anguloGrados = numero;
                    const anguloRadianes = anguloGrados * (Math.PI / 180);
                    const resultadoCos = Math.cos(anguloRadianes);
                    return resultadoCos;
                },
                'tan': (numero) => {
                    const anguloGrados = numero;
                    const anguloRadianes = anguloGrados * (Math.PI / 180);
                    const resultadoTan = Math.tan(anguloRadianes);
                    return resultadoTan;
                },
                'sen': (numero) => {
                    const anguloGrados = numero;
                    const anguloRadianes = anguloGrados * (Math.PI / 180);
                    const resultadoSen = Math.sin(anguloRadianes);
                    return resultadoSen;
                },
                '%': (numero) => numero / 100,
                'x²': (numero) => Math.pow(numero, 2),
                '!': (numero) => {
                    if(numero === 0){
                        return 1;
                    }else{
                        let resultado = 1;
                        for (let i = 1; i <= numero; i++) {
                            resultado *= i;
                        }
                        return resultado;
                    }
            },
                'π': (numero) =>  numero * 3.141592653589793
            };
            
            try {
                pantalla.textContent = eval(contenido);
                return;
            } catch (error) {
                for (const operacion in operaciones) {
                    if (contenido.includes(operacion)) {
                        const numero = parseFloat(contenido.match(/\d+/));
                        pantalla.textContent = operaciones[operacion](numero);
                        return;
                    }
                }
                pantalla.textContent = "Error";
            }
        }

        //escuchar el click
        if(pantalla.textContent == 0 || pantalla.textContent === "Error"){
            pantalla.innerHTML = botonClick;
        }else{
            pantalla.innerHTML += botonClick;
        }
    })
})