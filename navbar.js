document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.topnav .icon');
    const navMenu = document.getElementById('myLinks');

    navToggle.addEventListener('click', () => {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        }
    });
});
