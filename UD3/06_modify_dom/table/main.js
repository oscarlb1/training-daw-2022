// Variable global para el ID autoincremental, iniciada en el valor del último ID existente.
let currentID = 0; 

function onClick() {
    currentID++;

    let tbody = document.getElementsByTagName('tbody')[0];
    let tr = document.createElement('tr');

    let tdID = document.createElement('td');
    tdID.innerText = currentID;
    tr.appendChild(tdID);

    let tdName = document.createElement('td');
    tdName.innerText = 'Example';
    tr.appendChild(tdName);

    let tdSurname = document.createElement('td');
    tdSurname.innerText = 'Surname';
    tr.appendChild(tdSurname);
    
    let tdActions = document.createElement('td');
    let editLink = document.createElement('a');
    
    editLink.href = 'http://localhost/edit/' + currentID;
    editLink.innerText = 'Editar';
    
    tdActions.appendChild(editLink);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);
    console.log('Registro añadido con ID:', currentID);
}