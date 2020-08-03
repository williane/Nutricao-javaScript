var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {
    var pacientes = document.querySelectorAll('.paciente');
    var nomePaciente = this.value;

    if (nomePaciente.length > 0) {
        pacientes.forEach(function (paciente) {
            var nome = paciente.querySelector('.info-nome').textContent;
            var expressao = new RegExp(nomePaciente,'i')
            if (!expressao.test(nome)) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        });
    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove('invisivel');

        });
    }

})