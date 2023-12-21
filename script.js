function verificar() {
    var idade = window.document.querySelector("#idade-txt")  
    var idadeSelecionada = Number(idade.value)              
    var resultado = window.document.querySelector(".m__result")     

    if (idadeSelecionada >= 18 && idadeSelecionada < 65) {          
        resultado.innerHTML = `Você tem ${idadeSelecionada} anos, então o voto é obrigatório!`
    }   else if (idadeSelecionada >= 16 || idadeSelecionada >= 65) {
            resultado.innerHTML = `Você tem ${idadeSelecionada} anos, então o voto é opcional!`
        }
        else if (idadeSelecionada <= 15 && idadeSelecionada > 1) {
            resultado.innerHTML = `Você tem ${idadeSelecionada} anos, então não pode votar!`
        }
        else if (idadeSelecionada == 1) {
            resultado.innerHTML = `Você tem 1 ano, então não pode votar!`
        }
    else {
        window.alert(`Por favor, infome uma idade acima de 0`)
    }
}
