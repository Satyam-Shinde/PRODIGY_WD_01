document.addEventListener('DOMContentLoaded', ()=>{
    const Links = document.querySelectorAll('.link');

    const Sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        Sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 51) {
                current = section.getAttribute('id');
            }
        });

        Links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

})