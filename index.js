document.addEventListener('DOMContentLoaded', () => {
    function fetchChartData() {
        // Simulate fetching data
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    energy: {
                        usage: [50, 60, 55, 70, 65, 80, 75],
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    spending: {
                        ecoFriendly: 40,
                        nonEcoFriendly: 60
                    },
                    investment: {
                        impact: [30, 50, 80, 60, 90],
                        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5']
                    }
                });
            }, 1000);
        });
    }

    function renderEnergyChart(data) {
        const ctx = document.createElement('canvas');
        ctx.style.maxWidth = '400px';
        ctx.style.maxHeight = '400px';
        document.getElementById('energyChart').appendChild(ctx);
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
                }
            }
        });
    }

    function renderSpendingChart(data) {
        const ctx = document.createElement('canvas');
        ctx.style.maxWidth = '400px';
        ctx.style.maxHeight = '400px';
        document.getElementById('spendingChart').appendChild(ctx);
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
                responsive: true
            }
        });
    }

    function renderInvestmentChart(data) {
        const ctx = document.createElement('canvas');
        ctx.style.maxWidth = '400px';
        ctx.style.maxHeight = '400px';
        document.getElementById('investmentChart').appendChild(ctx);
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Investment Impact',
                    data: data.impact,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    fetchChartData().then(data => {
        renderEnergyChart(data.energy);
        renderSpendingChart(data.spending);
        renderInvestmentChart(data.investment);
    });
});
