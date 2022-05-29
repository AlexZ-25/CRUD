sp = [
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



for (i = 0; i<sp.length; i++){
    //let lista = document.getElementsByTagName('option')
    episodio = sp[i]
    let listaEpisodios = document.createElement('Option');
    listaEpisodios.innerHTML = episodio.Nombre;
    // console.log(listaEpisodios);
    document.getElementsByTagName('select')[0].appendChild(listaEpisodios);
}