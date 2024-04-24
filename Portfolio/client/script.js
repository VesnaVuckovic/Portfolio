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


document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const carousel = document.querySelector('.skills-carousel');
    let currentPosition = 1;
    const maxPosition = 4;
    let intervalId;

    function moveCarousel() {
        currentPosition++;
        if (currentPosition > maxPosition) {
            currentPosition = 1;
        }
        carousel.style.setProperty('--position', currentPosition);
        updateRadioButtons(currentPosition);
    }

    function updateRadioButtons(currentPosition) {
        radioButtons.forEach((button, index) => {
            button.checked = (index + 1 === currentPosition);
        });
    }

    intervalId = setInterval(moveCarousel, 1500);

    radioButtons.forEach((button, index) => {
        button.addEventListener('change', () => {
            clearInterval(intervalId);
            currentPosition = index + 1;
            carousel.style.setProperty('--position', currentPosition);
            intervalId = setInterval(moveCarousel, 1500); 
        });
    });
});




function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
};

function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Slanje AJAX zahteva na serversku stranu
    fetch('http://localhost:3000/submitMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Opciono: resetujte formu nakon slanja
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
}


