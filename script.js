// Script principal
document.addEventListener('DOMContentLoaded', function() {
    // Detectar desplazamiento para efectos en la navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if(window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(14, 119, 181, 0.9)';
            navbar.style.padding = '5px 0';
        } else {
            navbar.style.backgroundColor = '#0e77b5';
            navbar.style.padding = '0';
        }
    });
    
    // Efecto de desplazamiento para los enlaces del menú cuando están en la misma página
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Solo aplicar el desplazamiento suave si es un enlace interno
            if(targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});