function somar(){
    let num1 = Number(document.getElementById('id_num1').value)
    let num2 = Number(document.getElementById('id_num2').value)
    let texto = document.getElementById('exibir')

    texto.innerHTML = `A soma de ${num1} + ${num2} = ${num1 + num2}`
    console.log(num1 + num2)
}