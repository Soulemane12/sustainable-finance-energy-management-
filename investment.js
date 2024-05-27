document.addEventListener('DOMContentLoaded', () => {
    function fetchInvestmentOptions() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { name: 'Tesla Inc.', symbol: 'TSLA', impact: 'High', description: 'Invest in Tesla, a leader in electric vehicles.', link: 'https://www.tradingview.com/symbols/NASDAQ-TSLA/' },
                    { name: 'NextEra Energy', symbol: 'NEE', impact: 'Medium', description: 'Support renewable energy projects by investing in NextEra Energy.', link: 'https://www.tradingview.com/symbols/NYSE-NEE/' },
                    { name: 'First Solar', symbol: 'FSLR', impact: 'High', description: 'Invest in First Solar, a company specializing in solar energy solutions.', link: 'https://www.tradingview.com/symbols/NASDAQ-FSLR/' }
                ]);
            }, 1000);
        });
    }

    function renderInvestmentOptions(options) {
        const investmentContainer = document.getElementById('investment-tools');
        investmentContainer.innerHTML = '<h3>Investment Options</h3>';
        const ul = document.createElement('ul');
        options.forEach(option => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h4>${option.name}</h4>
                <p>Impact: ${option.impact}</p>
                <p>${option.description}</p>
                <a href="${option.link}" target="_blank"><button>View Stock Price</button></a>
            `;
            ul.appendChild(li);
        });
        investmentContainer.appendChild(ul);
    }

    fetchInvestmentOptions().then(options => {
        renderInvestmentOptions(options);
    });
});
