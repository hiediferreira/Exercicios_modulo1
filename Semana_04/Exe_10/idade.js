function maioridade(){
    let idade = Number(document.getElementById('idade').value)
    let msg = document.getElementById('resposta')

    if(idade < 0){
        alert('Insira uma idade válida!')
    } else{
        if(idade < 18){
            msg.innerText = `Sua idade é ${idade}, você é menor de idade!`
        } else{
            msg.innerText = `Sua idade é ${idade}, você é maior de idade!`
        } 
    }
}