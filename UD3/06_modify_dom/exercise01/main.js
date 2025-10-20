window.onload = function(e) {
    console.log('documento cargado')

    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'

    // Cambiar el título del segundo h2
    const allH2 = document.getElementsByTagName('h2')
    allH2[1].innerText = 'Patata';

    // Seleccionar el elemento con id == username
    const idUsername = document.getElementById('username')
    console.log(idUsername)

    // Cambiar el color de todos los .first que estén dentro de un artículo
    const articleFirstElements = document.querySelectorAll('article .first');
    articleFirstElements.forEach (element => {
        element.style.color = 'blue';
    });

    // Seleccionar todos lo elementos li con class == item
    const allLi = document.querySelectorAll('li.item');
    console.log(allLi)

    // Seleccionar todos lo buttons dentro de class == buttons
    const buttonButtons = document.querySelectorAll('button .buttons');
    console.log(buttonButtons)

    // Cambiar el color de fondo del primer párrafo
    const primerParrafo = document.querySelector('p')
    primerParrafo.style.backgroundColor = 'lightblue';

    // Cambiar el color de los elementos buttons dentro de class == buttons
    const allButtons = document.querySelectorAll('.buttons button')
    allButtons.forEach (element => {
        element.style.color = 'orange';
    });

}