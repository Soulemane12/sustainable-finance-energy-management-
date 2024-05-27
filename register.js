document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        registerUser();
    });

    function registerUser() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = {
            name: name,
            email: email,
            password: password,
            joinDate: new Date().toISOString().split('T')[0],
            coursesCompleted: 0,
            rewardsEarned: 50,  // Initialize with 50 points
            energySaved: 0
        };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        alert('Registration successful! Redirecting to home page.');
        window.location.href = 'index.html';
    }
});
