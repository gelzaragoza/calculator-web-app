document.addEventListener('DOMContentLoaded', function() {
    const $lis = document.querySelectorAll('.calculator ul li');
    const $result = document.querySelector('.result');

    function handleKeyPress(event) {
        const key = event.key;
        let resultText = $result.innerText.trim();

        if (/[0-9+\-*/.=]/.test(key)) {
            if (resultText === '0' || resultText === 'undefined' || resultText === 'Infinity') {
                resultText = '';
            }
            $result.innerText += key;
        }

        if (key === 'Enter') {
            try {
                const solution = eval(resultText);
                if (!isNaN(solution) && isFinite(solution)) {
                    $result.innerText = solution;
                } else {
                    throw new Error('Invalid expression');
                }
            } catch (err) {
                $result.innerText = 'Error';
            }
        }

        if (key === 'Backspace') {
            $result.innerText = $result.innerText.slice(0, -1);
        }

        if (key === 'Escape' || key.toLowerCase() === 'c') {
            $result.innerText = '';
        }
    }

    document.addEventListener('keydown', handleKeyPress);

    $lis.forEach((node) => {
        node.addEventListener('click', function(e) {
            const value = node.innerText.trim();
            let resultText = $result.innerText.trim();

            if (resultText === '0' || resultText === 'undefined' || resultText === 'Infinity') {
                resultText = '';
            }

            if (value === '=') {
                try {
                    const solution = eval(resultText);
                    if (!isNaN(solution) && isFinite(solution)) {
                        $result.innerText = solution;
                    } else {
                        throw new Error('Invalid expression');
                    }
                } catch (err) {
                    $result.innerText = 'Error';
                }
            } else if (value.toLowerCase() === 'c') {
                $result.innerText = '';
            } else {
                $result.append(value);
            }
        });
    });
});
