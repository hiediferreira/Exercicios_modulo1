function hello(){
    let name = document.getElementById('id-name').value
    let texto = document.getElementById('mostra-texto')
    texto.innerHTML = `Seja bem vindo(a), ${name}!`    
}
