var titulo = document.querySelector('.titulo');
titulo.textContent = 'Marques Nutricionista';

// var paciente = document.querySelector('#primeiro-paciente'); busca por id

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var pesoEValido = validaPeso(peso);
    var alturaEValido = validaAltura(altura);
    
    if (!pesoEValido) {
        pesoEValido = false;
        tdImc.textContent = 'Peso inválido!';
/*      paciente.style.color = "red";
        paciente.style.backgroundColor = "lightcoral"; */
        paciente.classList.add('paciente-invalido');
    };
    
    if (!alturaEValido) {
        alturaEValido = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
    };
    
    if (pesoEValido && alturaEValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura){

    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.00) {
        return true;
    }else{
        return false;
    }
}






