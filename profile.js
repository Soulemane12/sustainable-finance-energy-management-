// profile.js
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    displayUserProfile();

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            window.location.href = 'login.html';
        }
    }

    function displayUserProfile() {
        const user = JSON.parse(localStorage.getItem('user'));
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('profile-name').textContent = user.name;
        document.getElementById('profile-email').textContent = user.email;
        document.getElementById('join-date').textContent = user.joinDate;
        document.getElementById('courses-completed').textContent = user.coursesCompleted;
        document.getElementById('rewards-earned').textContent = user.rewardsEarned;
        document.getElementById('energy-saved').textContent = user.energySaved;
    }
});
