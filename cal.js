let currentInput = '';
    let currentOperation = '';
    let previousInput = '';

    function updateDisplay() {
      const display = document.getElementById('display');
      if (previousInput && currentOperation) {
        display.value = `${previousInput} ${currentOperation} ${currentInput}`;
      } else {
        display.value = currentInput;
      }
    }

    function appendNumber(number) {
      if (number === '.' && currentInput.includes('.')) return;
       if (number === '0' && currentInput === '') return;
      currentInput += number;
      updateDisplay();
    }

    function appendOperation(operation) {
      if (currentInput.trim() === '') return;

      if (previousInput !== '') {
        calculate();
      }

      currentOperation = operation;
      previousInput = currentInput;
      currentInput = '';
      updateDisplay();
    }

    function calculate() {
      if (previousInput === '' || currentInput === '') return;

      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);
      let result;

      switch (currentOperation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          if (current === 0) {
            alert("Cannot divide by zero.");
            clearDisplay();
            return;
          }
          result = prev / current;
          break;
        default:
          return;
      }

      currentInput = result.toString();
      currentOperation = '';
      previousInput = '';
      updateDisplay();
    }

    function clearDisplay() {
      currentInput = '';
      previousInput = '';
      currentOperation = '';
      updateDisplay();
    }

    function backspace() {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    }

