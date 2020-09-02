const button = document.getElementById('button');

button.addEventListener('click', () => {
    //axios es un metodo que recibe un objeto y devuelve una promesa
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
        .then(res => {
            const list = document.getElementById('list');
            const fragment = document.createDocumentFragment();
            for (const data of res.data) {
                const listItem = document.createElement('LI');
                listItem.textContent = `${data.id} - ${data.name} - ${data.address.city}`;
                fragment.appendChild(listItem);
            }

            list.appendChild(fragment);

        }) //en axios no hace falta convertir el objeto con json(), internamente lo hace automatico
        .catch(err => console.log(err))
})