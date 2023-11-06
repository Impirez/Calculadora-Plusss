const todo = document.querySelector('#todo');
const btn_C = document.querySelectorAll('#btn_C');
const screen = document.querySelector('#screen');
const igual = document.querySelector('#igual');
const cero = document.querySelector('#cero');
const btn_oc = document.querySelector('#cientific_2');

function MostrarC(){
    todo.style.gridTemplateColumns = 'repeat(6, 1fr)';
    btn_C.forEach(elemento => {
        elemento.style.display = 'block';
    });
    screen.style.gridColumn = '1 / 7';
    igual.style.gridColumn = '5 / 7';
    cero.style.gridColumn = '2 / 4';    
    btn_oc.style.display = 'block';
}

function OcultarC(){
    screen.style.gridColumn = '1 / 6';
    igual.style.gridColumn = '4 / 6';
    cero.style.gridColumn = '1 / 3';    
    btn_oc.style.display = 'none';
    btn_C.forEach(elemento => {
        elemento.style.display = 'none';
    });
    todo.style.gridTemplateColumns = 'repeat(5, 1fr)';
}