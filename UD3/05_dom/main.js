window.onload = () => {
    console.log('start');

    // Listar todos los divs
    console.log('Listar todos los divs');
    const allDivs = document.getElementsByTagName('div');
    console.log(`DIVs encontrados: ${allDivs.length}`);
    for (const node of allDivs) {
        console.log(node);
    }

    // Listar todos los elementos con style == 'buttons' 
    console.log('Listar todos los elementos con style == "buttons"');
    const styleButtons = document.querySelectorAll('.buttons');
    console.log(`Elementos con clase buttons encontrados: ${styleButtons.length}`);
    for (const element of styleButtons) {
        console.log(element);
    }

    // Listar 1 div con class == buttons
    console.log('Listar 1 div con class == buttons');
    const OneDivClassButtons = document.querySelector('div.buttons');
    console.log('Primer div con class buttons:');
    console.log(OneDivClassButtons);
    
    // Listar TODOS los divs con class == buttons
    console.log('Listar TODOS los divs con class == buttons');
    const DivsButtons = document.querySelectorAll('div.buttons');
    console.log(`Buttons ${DivsButtons.length}`)
};  