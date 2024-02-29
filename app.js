document.addEventListener('DOMContentLoaded', function() {
    const $lis = document.querySelectorAll('.calculator ul li');
    const $result = document.querySelector('.result');

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
