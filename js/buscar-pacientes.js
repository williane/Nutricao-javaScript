var botaoAdicionar = document.querySelector('#buscar-paciente');

botaoAdicionar.addEventListener('click', function () {
    var erroAjax = document.querySelector('#erro-ajax');
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function () {

        if (xhr.status == 200) {
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {

                adicionaPacienteTabela(paciente);

            })
        } else {
            console.log(xhr.status)
            erroAjax.classList.remove('invisivel');
        }


    });
    xhr.send();

});