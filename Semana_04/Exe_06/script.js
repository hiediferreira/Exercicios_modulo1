function recebeInfo(){
    let pessoa = {nome:'', idade:'0', nacionalidade:'BR', profissão:''}
    let msg = document.getElementById('exibe')
    pessoa.nome = document.getElementById('nome').value
    pessoa.idade = Number(document.getElementById('idade').value)
    pessoa.nacionalidade = document.getElementById('nac').value
    pessoa.profissão = document.getElementById('prof').value

    msg.innerHTML = `<strong>Nome:</strong> ${pessoa.nome}<br>
                    <strong>Idade:</strong> ${pessoa.idade}<br>
                    <strong>Nacionalidade:</strong> ${pessoa.nacionalidade}<br>
                    <strong>Nome:</strong> ${pessoa.profissão}`


    //console.log(pessoa.nome)
    //console.log(pessoa.idade)
    //console.log(pessoa.nacionalidade)
    //console.log(pessoa.profissão)
}