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
    switch (fruta.value.toLowerCase().trim()){
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
            alert('Inválido!')
            break
    }

    return fruta_selecionada, valor, unidade
}

function consultarPreco(){
    pegarValor()
    let mostra_preco = document.getElementById('texto')
    mostra_preco.innerHTML = `${fruta_selecionada} - R$${valor} ${unidade}`
}

function addCarrinho() {
    pegarValor()
    soma += Number(valor)

    let local_f = document.querySelector('ul#nome-fruta')
    let novo_li_f = document.createElement('li')
    novo_li_f.appendChild(document.createTextNode(`${fruta_selecionada}`))
    local_f.insertBefore(novo_li_f, local_f.children[0])

    let local_v = document.querySelector('ul#valor-fruta')
    let novo_li_v = document.createElement('li')
    novo_li_v.appendChild(document.createTextNode(`R$${valor}`))
    local_v.insertBefore(novo_li_v, local_v.children[0])

    document.querySelector('div#lista-total h3#soma').innerHTML = `R$${soma.toFixed(2)}`

    fruta.value = ''
}