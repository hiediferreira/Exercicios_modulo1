function declaraNum(){
    let num = Number(prompt('Informe um número:'))
    let dado = document.getElementById('mostra2')

    dado.innerText = `Você informou o número ${num}`
    console.log(`Você informou o número ${num}`)
}

declaraNum()