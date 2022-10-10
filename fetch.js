let url = 'https://reqres.in/api/users?delay=3' //se crea variable url que es la que nos proporcionara el origen de los datos
    fetch (url) //solicitud a la url

    //promesas usando metodo then
        .then(response => response.json())//se resuelve la promesa: obtiene respuesta y pasa a un formato utilizando json
        .then(data => mostrarData(data))//se lee el objeto respondido= "data" mostrandolo con una funcion
        .catch(error => console.log(error))//si hay error se atrapa con catch

        const mostrarData = (data) =>{
            console.log(data)
            let body = ""
            for (let i=0; i<data.length; i++){//irá dibujando los registros
                body+=`<tr><td>${data[i].id}</td><td>${data[i].first_name}</td><td>${data[i].last_name}</td><td>${data[i].email}</td><td>${data[i].avatar}</td></tr>`
            }

            document.getElementById('data').innerHTML = body

        }

