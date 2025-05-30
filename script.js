document.addEventListener('DOMContentLoaded', function() {
    // Lógica do Menu Hambúrguer
    const navToggle = document.querySelector('.nav-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');
    const body = document.body;

    if (navToggle && navWrapper) {
        navToggle.addEventListener('click', function() {
            // Alterna a classe no body para o estado aberto/fechado do menu
            body.classList.toggle('nav-open'); 
            
            // Acessibilidade: Atualizar aria-expanded
            const isExpanded = body.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Lógica para links e botões interativos (mantida)
    const interactiveElements = document.querySelectorAll('a, button.cta-button');

    interactiveElements.forEach(element => {
        const href = element.getAttribute('href');
        if (element.tagName.toLowerCase() === 'a' && href && href !== '#') {
            return;
        }

        element.addEventListener('click', function(event) {
            if (element.tagName.toLowerCase() === 'a' && (href === '#' || !href)) {
                event.preventDefault();
            }
            
            console.log(`Elemento clicado: ${element.textContent.trim() || element.className || element.tagName}`);
            
            if (element.classList.contains('cta-button')) {
                // Removido o alert para não ser intrusivo durante os testes de responsividade
                // alert('Botão "SEE PRODUCT" clicado! (Ação placeholder)');
                console.log('Botão CTA "SEE PRODUCT" clicado!');
            }

            // Se o menu estiver aberto e um link do menu for clicado, fechar o menu
            if (body.classList.contains('nav-open') && element.closest('.nav-wrapper')) {
                body.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Animação dos círculos (mantida, mas comentada para não distrair)
    // const circles = document.querySelectorAll('.decorative-circle');
    // circles.forEach(circle => {
    //     circle.style.transition = 'transform 0.5s ease-in-out';
    // });
});
