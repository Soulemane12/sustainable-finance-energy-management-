document.addEventListener('DOMContentLoaded', () => {
    function fetchSpendingData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ecoFriendly: 40,
                    nonEcoFriendly: 60,
                    tips: [
                        "Buy local and organic products.",
                        "Reduce plastic use.",
                        "Choose reusable items.",
                        "Support sustainable brands.",
                        "Opt for energy-efficient appliances.",
                        "Carpool or use public transport."
                    ]
                });
            }, 1000);
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

    function renderSpendingTips(tips) {
        const tipsList = document.getElementById('tips-list');
        tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    }

    fetchSpendingData().then(data => {
        renderSpendingChart(data);
        renderSpendingTips(data.tips);
    });
});
