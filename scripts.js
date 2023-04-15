document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    for (const link of navLinks) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            const headerHeight = header.getBoundingClientRect().height;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        });
    }

    // Parallax effect for the home section
    const homeSection = document.querySelector("#home");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.pageYOffset;
        homeSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Fade-in effect for the gallery section
    const gallerySection = document.querySelector("#gallery");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.pageYOffset;
        const galleryPosition = gallerySection.getBoundingClientRect().top + scrollPosition;

        if (scrollPosition + window.innerHeight > galleryPosition) {
            gallerySection.style.opacity = 1;
            gallerySection.style.transform = "translateY(0)";
        } else {
            gallerySection.style.opacity = 0;
            gallerySection.style.transform = "translateY(40px)";
        }
    });

    // Testimonials slider
    const testimonials = [
        {
            text: "Rhino Garage Doors provided excellent service and a top-quality product. Highly recommended!",
            name: "John Doe",
        },
        {
            text: "Their team was professional and efficient. Our new garage door has completely transformed our home!",
            name: "Jane Smith",
        },
        {
            text: "Rhino Garage Doors is the best in the business. Their attention to detail and customer service are unmatched.",
            name: "Mike Johnson",
        },
    ];

    let currentTestimonial = 0;
    const testimonialsSection = document.querySelector("#testimonials");
    const testimonialText = document.createElement("p");
    const testimonialName = document.createElement("h3");

    function updateTestimonial() {
        testimonialText.textContent = testimonials[currentTestimonial].text;
        testimonialName.textContent = testimonials[currentTestimonial].name;
    }

    testimonialsSection.appendChild(testimonialText);
    testimonialsSection.appendChild(testimonialName);

    updateTestimonial();

    setInterval(function () {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000); // Change the interval duration for faster or slower transitions
});
