window.addEventListener('DOMContentLoaded', () => {
    const animatables = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, li, figure'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.remove('show');
            entry.target.classList.toggle('show', entry.isIntersecting);
        })
    }, {
        threshold: .3,
    });

    animatables.forEach(section => {
        observer.observe(section);
    })
}) 