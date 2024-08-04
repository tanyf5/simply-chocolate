(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-mobile-menu');
    const closeMenuBtn = document.querySelector('.js-close-mobile-menu');
    const closeMenuLinks = document.querySelectorAll('.mobile-menu-link');
    const socialMediaItems = document.querySelectorAll('.menu-socials-item-mob');
    const body = document.body;

    const toggleMenu = () => {
        const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        
        if (!isMenuOpen) {
            mobileMenu.style.display = 'flex';
            setTimeout(() => mobileMenu.classList.add('is-open'), 10); // slight delay to ensure the transition works
        } else {
            mobileMenu.classList.remove('is-open');
            setTimeout(() => mobileMenu.style.display = 'none', 300); // wait for the transition to end
        }

        body.classList.toggle('no-scroll', !isMenuOpen);
    };

    closeMenuLinks.forEach(item => item.addEventListener('click', toggleMenu));
    socialMediaItems.forEach(item => item.addEventListener('click', toggleMenu));
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
})();