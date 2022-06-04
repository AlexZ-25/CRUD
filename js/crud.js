const sp = [
    {
        "Id": 'T1E0',
        "Nombre": 'Piloto',
        "URL": '2KKK6W4bslPNveAzIAUetz',
    },
    {
        "Id": 'T1E1',
        "Nombre": 'Ingeniería de Procesos',
        "URL": '5uc2DQxvxS7NfsDNrB7B8i',
    },
    {
        "Id": 'T1E2',
        "Nombre": 'El Proceso de Salir de tu Zona de Confort',
        "URL": '5c3stOhy7C1I4cRfHlp87A',
    },
    {
        "Id": 'T1E3',
        "Nombre": '¿Profesionales de la Comunicación e Ing. de Procesos?',
        "URL": '3QOfloYy2HaAnfu9Qsz5yP',
    },
    {
        "Id": 'T1E4',
        "Nombre": 'DMAIC - Definir',
        "URL": '6yb7xDvITTbmWxedc3fhIp',
    },
    {
        "Id": 'T1E5',
        "Nombre": 'DMAIC - Medir',
        "URL": '6rLRCZQO7YGa9ICwZusWuX',
    },
    {
        "Id": 'T1E6',
        "Nombre": 'DMAIC - Analizar',
        "URL": '2DYHddXendx8VAkl44uwSl',
    },
    {
        "Id": 'T1E7',
        "Nombre": 'DMAIC - Mejorar',
        "URL": '4cGCBiWUiOf13XuXKqhX8w',
    },
    {
        "Id": 'T1E8',
        "Nombre": 'DMAIC - Control',
        "URL": '762QwSu7iKBaonpMfaKvrv',
    },
    {
        "Id": 'T1E9',
        "Nombre": 'Hablemos de Industria 4.0',
        "URL": '0o45QMpGIfAzPSNkcYdQgR',
    },
    {
        "Id": 'T1E10',
        "Nombre": "Indicadores de Desempeño (KPI's)",
        "URL": '7nDZwdHthb16OxOdv2IPnF',
    },
    {
        "Id": 'T1E11',
        "Nombre": '¿El Límite de la Mejora Continua? (Costo-Tiempo-Calidad)',
        "URL": '6fRfEVzAiCS19k0dPYdycc',
    },
    {
        "Id": 'T1E12',
        "Nombre": 'Finanzas Personales / Empresariales y Mejora Continua',
        "URL": '53B9oWi1I2e8SWZU43wVMn',
    },
    {
        "Id": 'T1E13',
        "Nombre": 'Liderazgo y Mejora Continua',
        "URL": '0oazHzczozqfhTcJXg5Uzu',
    },
    {
        "Id": 'T1E14',
        "Nombre": 'Logística y Cadena de Suministro',
        "URL": '1xojP5rccThncZsg8CD0wX',
    },
    {
        "Id": 'T1E15',
        "Nombre": 'Las 7 Herramientas Básicas de Calidad',
        "URL": '1PQWmWBmdTfvZnm6HmgvN0',
    },
    {
        "Id": 'T1E16',
        "Nombre": 'Administración de Inventario',
        "URL": '4HnDukFmo9gfQ4HRJmpYtE',
    },
    {
        "Id": 'T1E17',
        "Nombre": 'Tips para Conseguir tu Primer Empleo',
        "URL": '3R0JbDbk5ARnplM3qnozUB',
    },
    {
        "Id": 'T1E18',
        "Nombre": 'Los 8 Desperdicios',
        "URL": '3GrjjTRbEJbxPkc7B8NST3',
    },
    {
        "Id": 'T1E19',
        "Nombre": 'Inteligencia Artificial',
        "URL": '3bcMJIqZ9BMaRQP3riz0Lo',
    },
    {
        "Id": 'T1E20',
        "Nombre": '4 Libros de Mejora Continua',
        "URL": '0syZgCLlIhBCJVHqGP2gPS',
    },
    {
        "Id": 'T2E1',
        "Nombre": 'Capital Humano: Tendencias y Mejora Continua',
        "URL": '6GrLVySyv4fNb0291spTHP',
    },
    {
        "Id": 'T2E2',
        "Nombre": "Estudiar o No Una Maestría",
        "URL": '1urLlPxHbT0F7ltTFpk1BN',
    },
    {
        "Id": 'T2E3',
        "Nombre": 'Control de Almacén Vs Control de Inventario',
        "URL": '5S2ltNltHx7mvPDimJvuLp',
    },
    {
        "Id": 'T2E4',
        "Nombre": 'Todos Debemos de Aprender a Programar',
        "URL": '6AMIkDTI5I82iYVVu3cRyA'
    },
    {
        "Id": 'T2E5',
        "Nombre": 'Logística y Cadena de Suministro con Lucy González',
        "URL": '4rsPCAa3qQY1Vfs6TNgpKz',
    },
    {
        "Id": 'T2E6',
        "Nombre": 'Hablemos de RPA',
        "URL": '2yJjYWBL8slc0ivrivG4ni'
    },
    {
        "Id": 'T2E7',
        "Nombre": 'Hablemos de Blockchain',
        "URL": '4d1KC18N58lwmO2jYuWOCc',
    },
    {
        "Id": 'T2E8',
        "Nombre": 'La Adopción de Modelos Híbridos y la Importancia del “Lado Humano” del Empleo',
        "URL": '2oiFtjtITIXRoJSi7OaHDZ',
    }
];

// Insertar las opciones de episodios
for (i = 0; i < sp.length; i++) {
    episodio = sp[i]
    let listaEpisodios = document.createElement('Option');
    listaEpisodios.innerHTML = episodio.Nombre;
    document.getElementsByTagName('select')[0].appendChild(listaEpisodios);
}

// Botón agregar
let agregar = () => {
    const selectedOption = document.getElementById('inputGroupSelect01').value;
    const defaultOption = document.getElementById('defaultOption').value;
    const addedList = document.getElementsByTagName('tr');
    let output = false
    for (i = 0; i < addedList.length; i++) {
        let textoInterior = addedList[i].innerText;
        output = textoInterior.includes(selectedOption);
        if (output == true) {
            alert('Este episodio ya ha sido añadido. Favor de seleccionar uno diferente.');
            break;
        }
    }
    if (selectedOption != defaultOption && output == false) {
        let tbody = document.getElementsByTagName('tbody');
        const selectedEpisode = sp.find(value => value.Nombre == selectedOption);
        const nameEpisode = selectedEpisode.Nombre;
        const buttons = `<button type="button" class="btn btn-primary" id='${nameEpisode}' onclick="editarUno(this.id)">Editar</button><button type="button" class="btn btn-danger" id='${nameEpisode}' onclick="eliminar(this.id)">Eliminar</button>`;
        let addedEpisode = document.createElement('tr');
        addedEpisode.innerHTML = `<td>${selectedEpisode.Id}</td><td>${selectedOption}</td><td>${buttons}</td>`;
        console.log(addedEpisode);
        localStorage.setItem('addedEpisode',String(addedEpisode));
        addedEpisode = localStorage.getItem('addedEpisode');
        console.log(addedEpisode);
        tbody[0].appendChild(addedEpisode);
        document.getElementById('inputGroupSelect01').value = defaultOption
    }
    cuadrosEdicion = document.getElementsByClassName('btn btn-primary editar').length;
    console.log(cuadrosEdicion);
    if (cuadrosEdicion > 0)
        document.getElementsByClassName('btn btn-primary editar')[0].remove();
}

// Botones editar
let editarUno = (episodio) => {
    cuadrosEdicion = document.getElementsByClassName('btn btn-primary editar').length;
    if (cuadrosEdicion > 0) {
        alert('Ya hay un cuadro de edición abierto. Favor de terminar el proceso de edición actual.');
    } else {
        document.getElementById('inputGroupSelect01').value = episodio
        let botones = document.getElementById('botones');
        let botonEditar = document.createElement('button');
        botonEditar.className = 'btn btn-primary editar';
        botonEditar.id = episodio;
        botonEditar.setAttribute("onclick","editarDos(this.id);");
        botonEditar.innerText = 'Editar'
        botones.appendChild(botonEditar);
    }

}
let editarDos = (episodio) => {
    const selectedOption = document.getElementById('inputGroupSelect01').value;
    const defaultOption = document.getElementById('defaultOption').value;
    const addedList = document.getElementsByTagName('tr');
    let output = false
    for (i = 0; i < addedList.length; i++) {
        let textoInterior = addedList[i].innerText;
        output = textoInterior.includes(selectedOption);
        if (output == true) {
            alert('Este episodio ya ha sido añadido. Favor de seleccionar uno diferente.');
            break;
        }
    }
    if (selectedOption.includes('Lista de episodios')) {
        alert('Favor de seleccionar un episodio válido.')
    } else {
        const selectedEpisode = sp.find(value => value.Nombre == selectedOption);
        const buttons = `<button type="button" class="btn btn-primary" id='${selectedOption}' onclick="editarUno(this.id)">Editar</button><button type="button" class="btn btn-danger" id='${selectedOption}' onclick="eliminar(this.id)">Eliminar</button>`;
        document.getElementsByClassName('btn btn-primary editar')[0].remove();
        lista = document.getElementsByTagName('tr');
        for (i = 0; i < lista.length; i++) {
            texto = String(lista[i].innerText);
            output = texto.includes(episodio);
            if (output == true) {
                document.getElementsByTagName('tr')[i].innerHTML = `<td>${selectedEpisode.Id}</td><td>${selectedOption}</td><td>${buttons}</td>`;
                document.getElementById('inputGroupSelect01').value = defaultOption
                break;
            }
        }
    }
}

// Botón eliminar
let eliminar = (index) => {
    lista = document.getElementsByTagName('tr');
    for (i = 0; i < lista.length; i++) {
        texto = String(lista[i].innerText);
        output = texto.includes(index);
        if (output == true) {
            console.log(i);
            document.getElementsByTagName('tr')[i].remove()
            break;
        }
    }
}