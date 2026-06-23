document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        if (tag.textContent === '初級') {
            tag.style.background = '#e8f5e9';
            tag.style.color = '#2e7d32';
        } else if (tag.textContent === '中級') {
            tag.style.background = '#fff3e0';
            tag.style.color = '#e65100';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .path-step, .lesson-card, .resource-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
