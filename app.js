

const inputBuscar = document.getElementById('buscar');
const celdas = document.getElementsByTagName('td');

// treemo los datos

let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarDatos(data))
    .catch(error => console.log(error));


const mostrarDatos = (data) => {

    console.log(data);

    let body = "";
    for (let i in data) {

        body += `<tr><td>${data[i].name}</td></tr>`;
       
    }

    document.querySelector('tbody').innerHTML = body;

}


// buscar datos
inputBuscar.addEventListener('keyup', (e) => {
    let texto = e.target.value;
    console.log(texto);
    let er = new RegExp(texto, 'i');

    for (let i = 0; i < celdas.length; i++) {

        let valor = celdas[i]
        // console.log(valor);
        if (er.test(valor.innerText)) {

            valor.classList.remove('ocultar');
            
        } else {
            console.log(valor);
            valor.classList.add('ocultar');

        }

    }
})