

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    

                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        

        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        

        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            alert(`Gracias ${name}, tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.`);

            contactForm.reset();
        });
        

        const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productCard = button.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                const productPrice = productCard.querySelector('span').textContent;
                

                alert(`Agregaste ${productName} (${productPrice}) al carrito.`);
            });
        });
        
   
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    