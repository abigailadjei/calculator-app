let expression = '';

function pressKey(key) {
  expression += key;
  document.getElementById('screen').value = expression;
}

function clearScreen() {
  expression = '';
  document.getElementById('screen').value = '';
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById('screen').value = expression;
}

function calculate() {
  try {
    expression = eval(expression.replace('÷', '/').replace('×', '*')).toString();
    document.getElementById('screen').value = expression;
  } catch (error) {
    document.getElementById('screen').value = 'Error';
    expression = '';
  }
}
