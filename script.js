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