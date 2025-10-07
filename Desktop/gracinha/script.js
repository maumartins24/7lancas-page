document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.heart-container');
    const body = document.body;
    let clickCount = 0; // Contador de cliques para o easter egg
    const requiredClicks = 10; // Mínimo de cliques para redirecionar

    // --- Parte do Código para CRIAR o Coração (MANTIDA DO CÓDIGO ANTERIOR) ---
    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posição e animações... (Mantenha o código de posicionamento e estilos do coração aqui)
        // ... (todo o bloco da função createHeart anterior) ...

        // Posição inicial do coração
        if (x !== undefined && y !== undefined) {
            heart.style.left = `${x - 25}px`;
            heart.style.top = `${y - 25}px`;
            heart.style.animation = 'fadeOutUp 2s forwards';
        } else {
            // Posições aleatórias para corações iniciais flutuantes
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.animation = `float ${3 + Math.random() * 2}s infinite alternate, pulse 1.5s infinite alternate`;
        }

        // Tamanho aleatório para corações
        const size = 30 + Math.random() * 40;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        // Cores aleatórias (simplificado aqui, mas mantenha a lógica do CSS no seu arquivo)
        const colors = ['#FF00AA', '#FF3366', '#CC00FF', '#9900FF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.backgroundColor = randomColor;

        // Ajustar pseudo-elementos (deve estar no CSS, mas o JavaScript manipula as cores/tamanhos dinâmicos)
        heart.style.setProperty('--heart-bg', randomColor); 
        
        heartContainer.appendChild(heart);

        if (x !== undefined && y !== undefined) {
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }
    }
    // Cria alguns corações flutuantes iniciais (Mantenha esta parte)
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
    // --- FIM da Parte de CRIAR o Coração ---


    // --- Parte do Código para CONTAR Cliques e REDIRECIONAR ---
    body.addEventListener('click', (event) => {
        // Cria o coração de clique (mantido)
        createHeart(event.clientX, event.clientY);

        // Aumenta o contador e atualiza a mensagem
        clickCount++;
        const messageBox = document.querySelector('.message-box p');
        
        if (clickCount < requiredClicks) {
            const remaining = requiredClicks - clickCount;
            messageBox.textContent = `Aperte mais ${remaining} vezes... quase lá!`;
        } else if (clickCount === requiredClicks) {
             messageBox.textContent = "Parabéns! Você encontrou meu currículo secreto.";
            // Redireciona após 1.5 segundos
            setTimeout(() => {
                window.location.href = 'curriculo.html';
            }, 1500);
        } else {
            // Se já tiver atingido, não faz mais nada
             messageBox.textContent = "Abrindo o currículo...";
        }
    });
});