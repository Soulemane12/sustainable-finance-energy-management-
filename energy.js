document.addEventListener('DOMContentLoaded', () => {
    function fetchEnergyData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    usage: [50, 60, 55, 70, 65, 80, 75],
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    tips: [
                        "Turn off lights when not in use.",
                        "Use energy-efficient bulbs.",
                        "Unplug devices when not in use."
                    ]
                });
            }, 1000);
        });
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
                }
            }
        });
    }

    function renderEnergyTips(tips) {
        const tipsContainer = document.getElementById('tips-list');
        tipsContainer.innerHTML = '';
        tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsContainer.appendChild(li);
        });
    }

    fetchEnergyData().then(data => {
        renderEnergyChart(data);
        renderEnergyTips(data.tips);
    });
});
