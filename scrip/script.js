const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const btn2 = document.querySelector('#btnNuevo');




document.addEventListener('keypress', function(evt) {

    // Si el evento NO es una tecla Enter
    if (evt.key !== 'Enter') {
      return;
    }
    
    let element = evt.target;
  
    // Si el evento NO fue lanzado por un elemento con class "focusNext"
    if (!element.classList.contains('focusNext')) {
      return;
    }
  
    // AQUI logica para encontrar el siguiente
    let tabIndex = element.tabIndex + 1;
    var next = document.querySelector('[tabindex="'+tabIndex+'"]');
  
    // Si encontramos un elemento
    if (next) {
      next.focus();
      event.preventDefault();
    }
  });

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    event.preventDefault();
    const sumaInputs = +input1.value - (+input2.value * +input3.value);
    pResult.innerText = 'Total en KG ' + sumaInputs;

}

btn2.addEventListener('click', limpiarCampos);

function limpiarCampos() {
    input1.value = '';
    input3.value = '';
}
