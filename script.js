document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links e botões que devem ser interativos
    const interactiveElements = document.querySelectorAll('a, button.cta-button');

    interactiveElements.forEach(element => {
        // Verifica se o elemento já tem um href diferente de '#' ou um manipulador de clique
        const href = element.getAttribute('href');
        if (element.tagName.toLowerCase() === 'a' && href && href !== '#') {
            // Não faz nada se já tem um link válido
            return;
        }

        element.addEventListener('click', function(event) {
            // Previne o comportamento padrão se for um link para '#'
            if (element.tagName.toLowerCase() === 'a' && (href === '#' || !href)) {
                event.preventDefault();
            }
            
            // Ação placeholder
            console.log(`Elemento clicado: ${element.textContent.trim() || element.className || element.tagName}`);
            // Aqui você poderia adicionar outras lógicas, como analytics, etc.
            // Para este exemplo, apenas um log no console.
            
            // Se for um botão ou link que não deve navegar mas sim executar uma ação JS:
            if (element.classList.contains('cta-button')) {
                // Exemplo: poderia abrir um modal, enviar dados, etc.
                alert('Botão "SEE PRODUCT" clicado! (Ação placeholder)');
            }
        });
    });

    // Pequena animação para os círculos (opcional, apenas para dar um toque)
    const circles = document.querySelectorAll('.decorative-circle');
    circles.forEach(circle => {
        circle.style.transition = 'transform 0.5s ease-in-out';
        // Exemplo de animação ao carregar
        // setTimeout(() => {
        //     circle.style.transform = (circle.style.transform || '') + ' scale(1.05)';
        // }, 500);
    });
});
