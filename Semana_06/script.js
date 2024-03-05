function hello(){
    let name = document.getElementById('id-name').value
    let texto = document.getElementById('mostra-texto')
    texto.innerHTML = `&#9996 Seja bem vindo(a), ${name}!` 

    let mudaCor = document.getElementById('form')
    mudaCor.style.backgroundColor = 'rgba(0, 255, 255, 0.300)'
}
