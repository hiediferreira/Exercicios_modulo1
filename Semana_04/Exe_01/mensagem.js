function exibeMensagem(){
    let nome = prompt('Informe seu nome:')
    let mostra = document.getElementById('mostra')
    mostra.innerText = `Seja bem vindo(a), ${nome}!`
    console.log(`Seja bem vindo(a), ${nome}!`)    
}

exibeMensagem()