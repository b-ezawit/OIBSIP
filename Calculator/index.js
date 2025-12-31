let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let value = btn.getAttribute('data-value');

        // CLEAR
        if (value === "clear") {
            expression = "";
            display.textContent = "0";
            return;
        }

        // DELETE
        if (value === "delete") {
            expression = expression.slice(0, -1);
            display.textContent = expression || "0";
            return;
        }

        // EQUAL (=)
        if (value === "=") {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = "Undefined";
            }
            display.textContent = expression;
            return;
        }
        expression += value;
        display.textContent = expression;
    });
});
