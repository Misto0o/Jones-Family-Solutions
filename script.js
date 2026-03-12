function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('active');
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    event.target.reset();
}

document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    document.querySelector('.dropdown-menu').classList.toggle('open');
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelector('.dropdown-menu').classList.remove('open');
    }
});