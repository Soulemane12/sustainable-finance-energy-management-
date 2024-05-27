document.addEventListener('DOMContentLoaded', () => {
    fetchNotifications().then(notifications => {
        renderNotifications(notifications);
    });

    function fetchNotifications() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { message: 'New course available: Advanced Climate Tech', date: '2024-05-22' },
                    { message: 'You earned 10 points for using public transport', date: '2024-05-21' },
                    { message: 'Energy savings tips updated', date: '2024-05-20' }
                ]);
            }, 1000);
        });
    }

    function renderNotifications(notifications) {
        const notificationsContainer = document.getElementById('notifications');
        notificationsContainer.innerHTML = '<h3>Notifications</h3>';
        const ul = document.createElement('ul');
        notifications.forEach(notification => {
            const li = document.createElement('li');
            li.innerHTML = `<p>${notification.message}</p><small>${notification.date}</small>`;
            ul.appendChild(li);
        });
        notificationsContainer.appendChild(ul);
    }
});
