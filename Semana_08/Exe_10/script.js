let trfa = document.querySelector('input#tarefas') //input
let local = document.querySelector('ul#lista') //ul
let btn_adic = document.querySelector('button#add') //botão adicionar

function addTarefa(){
    let tarefa = trfa.value //tarefa digitada no input
    let novo_li = document.createElement('li') //cria elemento li
    novo_li.appendChild(document.createTextNode(`${tarefa}`)) //Insere o conteúdo
    local.appendChild(novo_li) //add li criada à ul existente

    //Adicionando os botões//
    // Concluir //
    let btn_concl = document.createElement('button') //cria botão
    btn_concl.textContent = 'Concluir'  //Insere o texto do botão
    btn_concl.classList = 'concl'       //Insere a classe 'concl'
    btn_concl.onclick = function() {concluirTarefa(novo_li)}    //função que será chamada quando pressionar o botão
    novo_li.appendChild(btn_concl)  //Insere o botão na li

    // Excluir //    
    btn_excl = document.createElement('button')
    btn_excl.textContent = 'Excluir'
    btn_excl.classList = 'excl'
    btn_excl.onclick = function(){excluirTarefa(novo_li)}     
    novo_li.appendChild(btn_excl)

    trfa.value = '' //limpa input    
}

function concluirTarefa(li_riscar){
    li_riscar.classList.toggle('completed') //alterna a classe 'completed'
}

function excluirTarefa(li_excluir){
    li_excluir.remove() //remove elemento pai no botão excluir
}