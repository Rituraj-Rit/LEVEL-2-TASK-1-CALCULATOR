const inputField = document.querySelector('input[type="text"]');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    const value = button.textContent;

    if (!isNaN(value) || value === '.') {
      inputField.value += value;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      inputField.value += value;
    }

    if (value === '=') {
      const result = eval(inputField.value);
      inputField.value = result;
    }

    if (value === 'AC') {
      inputField.value = '';
    }

    if (value === 'DE') {
      inputField.value = inputField.value.slice(0, -1);
    }
  });
}); 