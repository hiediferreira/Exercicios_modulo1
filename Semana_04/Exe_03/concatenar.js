function concatenaDados(){
    let nome = document.getElementById('idnome').value
    let idade = Number(document.getElementById('idade').value)
    let texto = document.getElementById('concat')

    texto.innerHTML = `<strong>Seu nome é ${nome} e sua idade é ${idade} anos.</strong>`

    // OU:

    //texto.innerHTML = 'Seu nome é ' + nome + ' e sua idade é ' + idade + ' anos.'
}