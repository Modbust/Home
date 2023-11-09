document.addEventListener('DOMContentLoaded', function () {
    const scrollToElement = document.getElementsByClassName('box');
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    for (let i = 0; i < scrollToElement.length; i++) {

        const Element = scrollToElement[i];

        const observer = new IntersectionObserver(entries => {
             entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Element.style.opacity = '1';
                    Element.style.transform = 'translateY(0)';
                    observer.unobserve(Element);
                }
            });
        }, options);

        observer.observe(Element);
    }
});
