document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('receipt-form');
    const loadingSpinner = document.getElementById('loading');
    const receiptStatus = document.getElementById('receipt-status');
    const rewardsContainer = document.getElementById('rewards');
    const itemsList = document.getElementById('items-list');
    const infoBtn = document.getElementById('info-btn');
    const tooltipText = document.getElementById('tooltip-text');

    infoBtn.addEventListener('mouseover', () => {
        tooltipText.style.display = 'inline-block';
    });

    infoBtn.addEventListener('mouseout', () => {
        tooltipText.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        uploadReceipt();
    });

    function uploadReceipt() {
        const file = document.getElementById('receipt').files[0];
        if (file) {
            loadingSpinner.style.display = 'block';
            Tesseract.recognize(
                file,
                'eng',
                {
                    logger: (m) => console.log(m)
                }
            ).then(({ data: { text } }) => {
                loadingSpinner.style.display = 'none';
                analyzeReceipt(text);
            }).catch((err) => {
                loadingSpinner.style.display = 'none';
                receiptStatus.textContent = 'Error analyzing receipt. Please try again.';
                console.error(err);
            });
        }
    }

    function analyzeReceipt(text) {
        console.log('Analyzed Text:', text);
        // Simple keyword check to verify receipt content
        if (text.includes('organic') || text.includes('apple') || text.includes('banana')) {
            receiptStatus.textContent = 'Receipt verified. Found items: "organic apples, organic bananas". You have earned 20 points!';
            updateRewards(20);
        } else {
            receiptStatus.textContent = 'Receipt verification failed. No organic products found.';
        }
    }

    function updateRewards(points) {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        user.rewardsEarned = (user.rewardsEarned || 0) + points;
        localStorage.setItem('user', JSON.stringify(user));
        loadRewards();
    }

    function loadRewards() {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        rewardsContainer.innerHTML = `<p>You have earned ${user.rewardsEarned || 0} points.</p>`;
    }

    function loadRedeemableItems() {
        const items = [
            { name: 'Eco-Friendly Water Bottle', points: 50 },
            { name: 'Reusable Shopping Bag', points: 30 },
            { name: 'Organic T-Shirt', points: 100 }
        ];

        itemsList.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - ${item.points} points <button onclick="redeemItem('${item.name}', ${item.points})">Redeem</button>`;
            itemsList.appendChild(li);
        });
    }

    window.redeemItem = function (itemName, itemPoints) {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        if ((user.rewardsEarned || 0) >= itemPoints) {
            user.rewardsEarned -= itemPoints;
            localStorage.setItem('user', JSON.stringify(user));
            alert(`You have successfully redeemed ${itemName}!`);
            loadRewards();
        } else {
            alert('You do not have enough points to redeem this item.');
        }
    }

    loadRewards();
    loadRedeemableItems();
});
