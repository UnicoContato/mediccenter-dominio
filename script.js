document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-primary', 'shadow-lg');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-primary', 'shadow-lg');
            header.classList.add('bg-transparent');
        }

        // Hide header on scroll down, show on scroll up
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.classList.add('-translate-y-full');
        } else {
            header.classList.remove('-translate-y-full');
        }
        lastScrollY = window.scrollY;
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Unit Tabs System
    const tabs = document.querySelectorAll('.unit-tab');
    const contents = document.querySelectorAll('.unit-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active classes
            tabs.forEach(t => {
                t.classList.remove('bg-primary', 'text-white');
                t.classList.add('text-primary', 'hover:bg-primary', 'hover:text-white');
            });
            contents.forEach(c => c.classList.add('hidden'));

            // Add active class to clicked tab
            tab.classList.remove('text-primary', 'hover:bg-primary', 'hover:text-white');
            tab.classList.add('bg-primary', 'text-white');

            // Show target content
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Privacy Modal
    const modal = document.getElementById('privacy-modal');
    const privacyBtn = document.getElementById('privacy-btn');
    const closeBtn = document.getElementById('close-modal');
    const closeBtnBottom = document.getElementById('close-modal-btn');

    const toggleModal = () => {
        modal.classList.toggle('hidden');
    };

    privacyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });

    closeBtn.addEventListener('click', toggleModal);
    closeBtnBottom.addEventListener('click', toggleModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    
    const totalSlides = indicators.length;
    let currentSlide = 0;
    let slideInterval;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.remove('opacity-50');
                indicator.classList.add('opacity-100');
            } else {
                indicator.classList.remove('opacity-100');
                indicator.classList.add('opacity-50');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    indicators.forEach((indicator) => {
        indicator.addEventListener('click', (e) => {
            stopAutoSlide();
            currentSlide = parseInt(e.target.getAttribute('data-index'));
            updateCarousel();
            startAutoSlide();
        });
    });

    startAutoSlide();

    const unitTabs = document.querySelectorAll(".unit-tab");
    const unitContents = document.querySelectorAll(".unit-content");

    unitTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-target");

            unitContents.forEach((content) => {
                if (content.id === target) {
                    content.classList.remove("hidden");
                } else {
                    content.classList.add("hidden");
                }
            });

            unitTabs.forEach((t) => {
                t.classList.remove("bg-primary", "text-white");
                t.classList.add("text-primary", "hover:bg-primary", "hover:text-white");
            });

            tab.classList.remove("text-primary", "hover:bg-primary", "hover:text-white");
            tab.classList.add("bg-primary", "text-white");
        });
    });

    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.remove("bg-transparent", "text-white");
            header.classList.add("bg-white", "shadow-md", "text-primary");
        } else {
            header.classList.add("bg-transparent", "text-white");
            header.classList.remove("bg-white", "shadow-md", "text-primary");
        }
    });

    const privacyBtn = document.getElementById("privacy-btn");
    const privacyModal = document.getElementById("privacy-modal");
    const closeModal = document.getElementById("close-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");

    function openModal() {
        privacyModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    function closeModalFunc() {
        privacyModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }

    privacyBtn.addEventListener("click", openModal);
    closeModal.addEventListener("click", closeModalFunc);
    closeModalBtn.addEventListener("click", closeModalFunc);
    
    privacyModal.addEventListener("click", (e) => {
        if (e.target === privacyModal) {
            closeModalFunc();
        }
    });
});