const $lis = document.querySelectorAll('ul li');
const $result = document.querySelector('.result');
const $errorMessage = document.querySelector('.error-message');

$lis.forEach((node) => {
    node.addEventListener('mousedown', function(e) {
        const value = node.innerText.trim();
        const resultText = $result.innerText.trim();

        if (resultText === '0' || resultText === 'undefined' || resultText === 'Infinity') {
            $result.innerText = '';
        }

        if (value === '=') {
            try {
                let solution = eval(resultText);
                if (isNaN(solution) || !isFinite(solution)) {
                    throw new Error('Invalid expression');
                }
                $result.innerText = solution;
            } catch (err) {
                $result.innerText = 'Error';
                $errorMessage.textContent = 'Invalid Expression';
            }
            return true;
        }

        if (value.toLowerCase() === 'c') {
            $result.innerText = '';
            $errorMessage.textContent = '';
            return true;
        }

        $result.append(value);
    });
});
