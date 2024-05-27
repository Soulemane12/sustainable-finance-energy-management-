// settings.js
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    loadUserProfile();

    document.getElementById('settings-form').addEventListener('submit', (e) => {
        e.preventDefault();
        updateUserProfile();
    });

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            window.location.href = 'login.html';
        }
    }

    function loadUserProfile() {
        const user = JSON.parse(localStorage.getItem('user'));
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
    }

    function updateUserProfile() {
        const user = JSON.parse(localStorage.getItem('user'));
        user.name = document.getElementById('name').value;
        user.email = document.getElementById('email').value;
        localStorage.setItem('user', JSON.stringify(user));
        alert('Profile updated successfully!');
    }
});
