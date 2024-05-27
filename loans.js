document.addEventListener('DOMContentLoaded', () => {
    function calculateLoan(amount, rate, term) {
        const monthlyRate = rate / 100 / 12;
        const payments = term * 12;
        const x = Math.pow(1 + monthlyRate, payments);
        const monthly = (amount * x * monthlyRate) / (x - 1);
        return monthly.toFixed(2);
    }

    function renderLoanCalculator() {
        const calculatorContainer = document.getElementById('loan-calculator');
        calculatorContainer.innerHTML = `
            <h3>Loan Calculator</h3>
            <form id="loan-form">
                <label for="amount">Loan Amount ($):</label>
                <input type="number" id="amount" name="amount" required>
                
                <label for="rate">Interest Rate (%):</label>
                <input type="number" id="rate" name="rate" required>
                
                <label for="term">Term (years):</label>
                <input type="number" id="term" name="term" required>
                
                <button type="submit">Calculate</button>
            </form>
            <div id="result"></div>
        `;

        document.getElementById('loan-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = parseFloat(document.getElementById('amount').value);
            const rate = parseFloat(document.getElementById('rate').value);
            const term = parseFloat(document.getElementById('term').value);
            const monthlyPayment = calculateLoan(amount, rate, term);
            document.getElementById('result').innerHTML = `<h4>Monthly Payment: $${monthlyPayment}</h4>`;
        });
    }

    renderLoanCalculator();
});
