function handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Display the success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally, reset the form after submission
    document.getElementById('contactForm').reset();
    
    return false; // Prevent the form from submitting to a server
}
// Tampilkan pesan selamat datang saat halaman dimuat
window.onload = function() {
    alert('Selamat datang di situs PORTOFOLIO ANDINI!');
};

// Tambahkan scroll halus ketika menavigasi ke bagian lain di halaman
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'instant'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".testimonial-slider");
    const slides = document.querySelectorAll(".testimonial");
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");
    const dotsContainer = document.querySelector(".slider-dots");
    
    let currentSlide = 0;
    let autoSlideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
        resetAutoSlide();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Event listeners
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Start auto-sliding
    startAutoSlide();

    // Handle testimonial submission
    function handleTestimonialSubmit(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById("testimonial-name");
        const testimonialInput = document.getElementById("testimonial-text");
        const successMessage = document.getElementById("testimonialSuccessMessage");
        
        // Here you would typically send the data to a server
        // For now, we'll just show the success message
        successMessage.style.display = "block";
        
        // Reset the form
        nameInput.value = "";
        testimonialInput.value = "";
        
        // Hide the success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
        
        return false;
    }

    // Add the function to the global scope
    window.handleTestimonialSubmit = handleTestimonialSubmit;
});
