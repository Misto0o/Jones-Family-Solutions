function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('active');
        });
    });
});

// Dropdown toggle
document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    document.querySelector('.dropdown-menu').classList.toggle('open');
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelector('.dropdown-menu').classList.remove('open');
    }
});
