window.addEventListener('load', start);
var rangeRed = null;
var rangeGreen = null;
var rangeBlue = null;
var inputTextRed = null;
var inputTextGreen = null;
var inputTextBlue = null;

// Função Stater
function start() {
  carregaInputs();
  activateInput();
  atualizaDivColor();
}

// Monitor alteração no input range
function activateInput() {
  rangeRed.addEventListener('input', atualizaDivBox);
  rangeGreen.addEventListener('input', atualizaDivBox);
  rangeBlue.addEventListener('input', atualizaDivBox);
}

function atualizaDivBox() {
  atualizaInputText();
  atualizaDivColor(rangeRed.value, rangeGreen.value, rangeBlue.value);
}
// Altera o box de cores
function atualizaDivColor(r = 0, g = 0, b = 0) {
  var divColor = document.querySelector('#boxRgb');
  divColor.style.backgroundColor = 'rgb(' + [r, g, b].join(',') + ')';
  atualizaInputText(r, g, b);
  atualizaInputRange(r, g, b);
}
// Alterar input range
function atualizaInputRange(red, green, blue) {
  rangeRed.value = red;
  rangeGreen.value = green;
  rangeBlue.value = blue;
}

// Alterar input text
function atualizaInputText(red, green, blue) {
  inputTextRed.value = red;
  inputTextGreen.value = green;
  inputTextBlue.value = blue;
}
// Carrega configuração padrão
function carregaInputs() {
  inputTextRed = document.querySelector('#text-red');
  inputTextGreen = document.querySelector('#text-green');
  inputTextBlue = document.querySelector('#text-blue');

  rangeRed = document.querySelector('#range-red');
  rangeGreen = document.querySelector('#range-green');
  rangeBlue = document.querySelector('#range-blue');
}
