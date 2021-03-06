titulo.addEventListener('click', function () {
    alert('Seja Bem-Vindo!');
});

var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obterPacientDoFormulario(form);    

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    }    

   adicionaPacienteTabela(paciente);

    form.reset();

    document.querySelector('#mensagem-de-erro').innerHTML='';

});

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

}

function obterPacientDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;

    return td;

}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) erros.push('O nome é inválido')

    if (paciente.gordura.length == 0) erros.push('A gordura é inválida!');

    if (!validaPeso(paciente.peso) || paciente.peso.length == 0) erros.push('O Peso é inválido!');

    if (!validaAltura(paciente.altura) || paciente.altura.length == 0) erros.push('A Altura é inválida!');

    return erros;
}

function exibeMensagemErro(erros) {
    var ul = document.querySelector('#mensagem-de-erro');
    ul.innerHTML = '';
    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });

}