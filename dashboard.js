document.addEventListener('DOMContentLoaded', () => {
    function fetchEnergyData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    usage: [50, 60, 55, 70, 65, 80, 75],
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                });
            }, 1000);
        });
    }

    function fetchSpendingData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ecoFriendly: 40,
                    nonEcoFriendly: 60
                });
            }, 1000);
        });
    }

    function getRandomInvestmentChart() {
        const companies = [
            { name: 'Tesla Inc.', symbol: 'TSLA' },
            { name: 'NextEra Energy', symbol: 'NEE' },
            { name: 'First Solar', symbol: 'FSLR' }
        ];
        return companies[Math.floor(Math.random() * companies.length)];
    }

    function renderEnergyChart(data) {
        const ctx = document.createElement('canvas');
        document.getElementById('energy-chart').appendChild(ctx);
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Energy Usage (kWh)',
                    data: data.usage,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Daily Energy Usage'
                    }
                }
            }
        });
    }

    function renderSpendingChart(data) {
        const ctx = document.createElement('canvas');
        document.getElementById('spending-chart').appendChild(ctx);
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Eco-friendly', 'Non-Eco-friendly'],
                datasets: [{
                    data: [data.ecoFriendly, data.nonEcoFriendly],
                    backgroundColor: ['#4CAF50', '#FF6347']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Sustainable vs. Non-Sustainable Spending'
                    }
                }
            }
        });
    }

    function renderInvestmentChart(company) {
        const container = document.getElementById('investment-chart');
        container.innerHTML = `<iframe src="https://www.tradingview.com/widgetembed/?symbol=${company.symbol}&interval=D&theme=light&style=1&locale=en" style="width: 100%; height: 400px;" frameborder="0"></iframe>`;
    }

    fetchEnergyData().then(data => {
        renderEnergyChart(data);
    });

    fetchSpendingData().then(data => {
        renderSpendingChart(data);
    });

    const randomCompany = getRandomInvestmentChart();
    renderInvestmentChart(randomCompany);
});
