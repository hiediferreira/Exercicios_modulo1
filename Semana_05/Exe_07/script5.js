///////// PREÇO DAS FRUTAS ////////////
const preco_abacate = 5.49   //kg
const preco_abacaxi = 9.98   //unidade
const preco_banana = 9.98    //kg
const preco_coco = 3.00      //unidade
const preco_kiwi = 23.80     //kg
const preco_maca = 5.74      //kg
const preco_morango = 5.00   //bandeja
const preco_pitaya = 6.59    //unidade
const preco_tangerina = 7.70 //kg
const preco_uva = 9.00       //kg
//////////////////////////////////////

let fruta = document.querySelector('input') //input onde será informado a fruta

let valor = 0             
let fruta_selecionada = ''
let unidade = ''
let soma = 0

function pegarValor(){
    switch (fruta.value.toLowerCase().trim()){    //remove espaços desnecessários e torna todas as letras minúsculas
        case 'abacate':
        case '01':
        case '1':
            valor = preco_abacate.toFixed(2)
            fruta_selecionada = 'Abacate'
            unidade = 'kg'
            break

        case 'abacaxi':
        case '02':
        case '2':
            valor = preco_abacaxi.toFixed(2)
            fruta_selecionada = 'Abacaxi'
            unidade = 'unidade'
            break

        case 'banana':
        case '03':
        case '3':
            valor = preco_banana.toFixed(2)
            fruta_selecionada = 'Banana'
            unidade = 'kg'
            break

        case 'cocoverde':
        case 'coco verde':
        case 'coco':
        case '04':
        case '4':
            valor = preco_coco.toFixed(2)
            fruta_selecionada = 'Coco verde'
            unidade = 'unidade'
            break

        case 'kiwi':
        case '05':
        case '5':
            valor = preco_kiwi.toFixed(2)
            fruta_selecionada = 'Kiwi'
            unidade = 'kg'
            break

        case 'maca':
        case 'maça':
        case 'maçã':
        case '06':
        case '6':
            valor = preco_maca.toFixed(2)
            fruta_selecionada = 'Maçã'
            unidade = 'kg'
            break

        case 'morango':
        case '07':
        case '7':
            valor = preco_morango.toFixed(2)
            fruta_selecionada = 'Morango'
            unidade = 'bandeja'
            break

        case 'pitaya':
        case '08':
        case '8':
            valor = preco_pitaya.toFixed(2)
            fruta_selecionada = 'Pitaya'
            unidade = 'unidade'
            break

        case 'tangerina':
        case '09':
        case '9':
            valor = preco_tangerina.toFixed(2)
            fruta_selecionada = 'Tangerina'
            unidade = 'kg'
            break

        case 'uva':
        case '10':
            valor = preco_uva.toFixed(2)
            fruta_selecionada = 'Uva'
            unidade = 'kg'
            break

        default:            
            fruta_selecionada = ''
            break
    }

    return fruta_selecionada, valor, unidade
}

function consultarPreco(){
    pegarValor()
    if(fruta_selecionada != ''){
        let mostra_preco = document.getElementById('texto')  //<p> onde vou exibir o preço da fruta selecionada
        mostra_preco.innerHTML = `${fruta_selecionada} - R$${valor} ${unidade}`
    } else{alert('Inválido!')}
}

let data = [] 

function addCarrinho() {
    pegarValor()
    
    if(fruta_selecionada != ''){
        //objeto com fruta e valor
        const produtoAdicionado = {
            nome_fruta: fruta_selecionada,
            preco_fruta: valor
        }        

        localStorage.setItem('fruta-adicionada', JSON.stringify(produtoAdicionado)) //converte objeto JS em JSON para poder salvar no localStorage

        const produtos_add_str = localStorage.getItem('frutas-adicionadas')

        if(produtos_add_str){ //se já houver alguma fruta add
            data = JSON.parse(produtos_add_str) //converte JSON para objeto JS
        }
        data.push(produtoAdicionado) //add ao array data a última fruta informada pelo usuário
        localStorage.setItem('frutas-adicionadas', JSON.stringify(data))

        console.log('Histórico')
        console.log(data)
        document.getElementById('quant').innerText = data.length

        // Adicionando informações ao carrinho de compras //
        let mostraFruta = produtoAdicionado.nome_fruta
        let mostraValorFruta = produtoAdicionado.preco_fruta

        let local_f = document.querySelector('ul#nome-fruta')
        let novo_li_f = document.createElement('li')
        novo_li_f.appendChild(document.createTextNode(`${mostraFruta}`))
        local_f.insertBefore(novo_li_f, local_f.children[0])

        let local_v = document.querySelector('ul#valor-fruta')
        let novo_li_v = document.createElement('li')
        novo_li_v.appendChild(document.createTextNode(`R$${mostraValorFruta}`))
        local_v.insertBefore(novo_li_v, local_v.children[0])

        let total = 0 
        data.forEach(function(preco){
        total += Number(preco.preco_fruta)
        })
        if(total == 0){
            document.querySelector('h3#soma').innerHTML = 'Carrinho vazio'
        } else{
            document.querySelector('h3#soma').innerHTML = `R$${total.toFixed(2)}`
        }
    } else {alert('Inválido!')}

    fruta.value = '' //limpa input
}

function limpar(){
    localStorage.clear()
    data = []
    document.querySelector('ul#nome-fruta').innerHTML = ''
    document.querySelector('ul#valor-fruta').innerHTML = ''
    document.getElementById('quant').innerText = data.length

    let total = 0 
    data.forEach(function(preco){
    total += Number(preco.preco_fruta)
    })
    document.querySelector('h3#soma').innerHTML = `R$${total.toFixed(2)}`
}
