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
const carousel = document.querySelector('.skills-carousel, .projects-carousel');

radioButtons.forEach((button, index) => {
    button.addEventListener('change', () => {
        carousel.style.setProperty('--position', index + 1);
    });
});

let currentPosition = 1;
const maxPosition = 4;

function moveCarousel() {
    currentPosition++;
    if (currentPosition > maxPosition) {
        currentPosition = 1;
    }
    carousel.style.setProperty('--position', currentPosition);
}
setInterval(moveCarousel, 1000);

function topFunction() {    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
