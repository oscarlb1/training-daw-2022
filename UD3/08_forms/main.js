window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = checkCombo
    document.getElementById('pregunta_no').onchange = checkCombo
    document.getElementById('pregunta_nsnc').onchange = checkCombo

  
    const submitButton = document.getElementById('submit')
    submitButton.disabled = true

    document.getElementById('condiciones').onchange = checkSubmit
    document.getElementById('privacidad').onchange = checkSubmit
    
    checkSubmit();
    checkCombo();

    // El botón enviar sólo debe estar habilitado si se han marcado los 2 checks
    // El combo de opciones sólo estará habilitado si se pulsa “si” en el primer check
    // Nombre y apellidos son obligatorios. Si no se han rellenado al pulsar el botón, informar al usuario
    // El tamaño máximo de la descripción es de 80 carácteres
    // Implementar algún mecanismo para prevenir el doble submit

    
    function checkSubmit(e) {
        if (document.getElementById('condiciones').checked && document.getElementById('privacidad').checked) {
            submitButton.disabled = false
        } else {
            submitButton.disabled = true
        }
    }


    function changeValue(e) {
        console.log('changed' + e.target.value)
    }

    function checkCombo() {
        const combo = document.getElementById('opciones');
        const siChecked = document.getElementById('pregunta_si').checked;
        combo.disabled = !siChecked;
    }
    
}
