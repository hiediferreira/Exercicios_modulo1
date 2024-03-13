let inputPass = document.getElementById('input-senha')
let inputEmail = document.getElementById('id-email')


function mostrar(){    
    let btn = document.getElementById('btn-senha')
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btn.setAttribute('src','imagens/olho2.png')
    } else {
        inputPass.setAttribute('type','password')
        btn.setAttribute('src','imagens/olho.png')
    }
}

function entrar(){
    if((inputPass.value == '')||(inputEmail.value == '')){
        alert('Preencha todos os campos!')
    } else{
        alert('Login com sucesso!')
    }
}