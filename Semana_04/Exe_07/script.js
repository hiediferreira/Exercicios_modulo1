function verificaHora(){
    let dado1 = document.getElementById('id_hora').value
    let hora_array = dado1.split(':')
    let hora = Number(hora_array[0])
    let msg = document.getElementById('texto')

    if(hora >= 0 && hora < 12){
        msg.innerHTML = '<strong>Bom dia!</strong>'
    } else if(hora < 18){  //maior que 12 e menor que 18
        msg.innerHTML = '<strong>Boa tarde!</strong>'
    } else{ //mais que 18 e 
        msg.innerHTML = '<strong>Boa noite!</strong>'
    }
}