document.addEventListener('DOMContentLoaded', () => {
    function checkAuthentication() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }

    function logout() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    }

    window.logout = logout;
    checkAuthentication();
});
