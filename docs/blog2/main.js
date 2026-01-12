document.addEventListener("DOMContentLoaded", () => {

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider img");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    window.nextSlide = function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    window.prevSlide = function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    setInterval(() => {
        nextSlide();
    }, 5000);

});
