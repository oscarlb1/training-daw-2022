window.onload = function() {
    console.log('documento cargado');

    for (let i = 1; i <= 3; i++) {
        const link = document.getElementById(`enlace_${i}`);
        const content = document.getElementById(`contenidos_${i}`);

        link.onclick = function(e) {
            e.preventDefault(); 

            if (content.style.display === 'none') {
                content.style.display = 'block';
                link.innerHTML = 'Ocultar contenidos';
            } else {
                content.style.display = 'none';
                link.innerHTML = 'Mostrar contenidos';
            }
        };
    }
};