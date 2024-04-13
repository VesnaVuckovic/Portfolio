document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});


const radioButtons = document.querySelectorAll('input[type="radio"]');
const carousel = document.querySelector('.skills-carousel');

radioButtons.forEach((button, index) => {
    button.addEventListener('change', () => {
        carousel.style.setProperty('--position', index + 1);
    });
});
