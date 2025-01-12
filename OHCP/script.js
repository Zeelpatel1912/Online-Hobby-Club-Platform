// You can add interactivity, such as AJAX requests or event listeners, for the panels
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
        document.querySelectorAll('.main-content section').forEach(section => {
            section.style.display = 'none';
        });
        const targetPanel = document.querySelector(this.getAttribute('href'));
        if (targetPanel) {
            targetPanel.style.display = 'block';
        }
    });
});

// Default: Show the first section on page load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#login-users-panel').style.display = 'block';
});
