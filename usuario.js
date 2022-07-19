const aplication = document.querySelector('.table');
const getUrl = new URLSearchParams(window.location.search);

const url = 'https://jsonplaceholder.typicode.com/users';

id = getUrl.get('id');
console.log(id);

fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        const id = document.createElement('tr');
        id.innerHTML = `ID: <td>${data.id}</td>`;
        const name = document.createElement('tr');
        name.innerHTML = `Nombre: <td>${data.name}</td>`
        const dir = document.createElement('tr');
        dir.innerHTML = `Dirección: <td>${data.address.street}</td>`
        const phone = document.createElement('tr');
        phone.innerHTML = `Teléfono: <td>${data.phone}</td>`
        
        aplication.appendChild(id);
        aplication.appendChild(name);
        aplication.appendChild(dir);
        aplication.appendChild(phone);
        console.log(data);
    })
    .catch(err=>console.log(err));