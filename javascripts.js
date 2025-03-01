// Navbar toggle functionality
function toggleNavbar() {
    const navbarMenu = document.querySelector('#navbar ul');
    navbarMenu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");

    if (!track) {
        console.error("Carousel track not found.");
        return;
    }

    const slides = Array.from(track.children);
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    let position = 0;
    let speed = 1; // Adjust speed if needed

    function scrollCarousel() {
        position -= speed;
        track.style.transform = `translateX(${position}px)`;

        if (Math.abs(position) >= slides[0].offsetWidth * slides.length) {
            position = 0;
        }

        requestAnimationFrame(scrollCarousel);
    }

    scrollCarousel();
});
