function diaSemana(){
    let num = Number(document.getElementById('idnum').value)
    let texto = document.getElementById('mostra')
    switch(num){
        case 1:
            texto.innerHTML = '<strong>Domingo</strong>!'
            break
        case 2:
            texto.innerHTML = '<strong>Segunda-feira!</strong>'
            break
        case 3:
            texto.innerHTML = '<strong>Terça-feira!'
            break
        case 4:
            texto.innerHTML = '<strong>Quarta-feira!'
            break
         case 5:
            texto.innerHTML = '<strong>Quinta-feira!'
            break
        case 6:
            texto.innerHTML = '<strong>Sexta-feira!'
             break
        case 7:
            texto.innerHTML = '<strong>Sábado!</strong>'
            break
        default:
            alert('Informe um número entre 1 e 7!')
            break
    }
}
