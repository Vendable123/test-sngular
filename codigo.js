const aplication = document.querySelector('.table');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(err => console.log(err)); 

const mostrarData = (data)=>{
    console.log(data);
    data.forEach(element => {
        const tr = document.createElement('tr')
        tr.setAttribute('id',element.id);
        tr.addEventListener('click',()=>{
            window.location.href = `./usuario.html?id=${element.id}`
        });
        tr.innerHTML = `<td>${element.id}</td><td>${element.name}</td><td>${element.email}</td>`;
        aplication.appendChild(tr);
    });
}