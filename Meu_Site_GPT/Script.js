document.addEventListener('DOMContentLoaded', () => {
    const botaoMostrarMais = document.getElementById('mostrar-mais');
    const textoExtra = document.getElementById('texto-extra');

    botaoMostrarMais.addEventListener('click', (event) => {
        event.stopPropagation();
        
        if (textoExtra.style.display === 'none') {
            textoExtra.style.display = 'block';
            botaoMostrarMais.textContent = 'Mostrar Menos';
        } else {
            textoExtra.style.display = 'none';
            botaoMostrarMais.textContent = 'Mostrar Mais';
        }

        botaoMostrarMais.blur();
    });
});

