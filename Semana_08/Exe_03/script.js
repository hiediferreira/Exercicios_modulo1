function showImage(){
    let div_image = document.querySelector('div#image') //div existente onde vou add a imagem
    div_image.innerHTML = ''                            //Limpando a imagem 
    let image_create = document.createElement('img')    //criando um elemento <img>
    image_create.src = 'cafe2.jpg'                      //src da imagem desejada
    image_create.setAttribute('id','size-img')          //Inserindo um id para personalisar largura e altura
    div_image.appendChild(image_create)                 //Inserindo no elemento pai (div) o filho criado (img)
}

// OU:

// function showImage2(){
//     let div_image = document.querySelector('div#image') //div existente onde vou add a imagem
//     div_image.innerHTML = ''                            //Limpando a imagem    
//     let image_create = new Image(300, 200);             //largura e altura desejada para a imagem
//     image_create.src = 'cafe2.jpg'                      //src da imagem desejada
//     div_image.appendChild(image_create)                 //Inserindo no elemento pai (div) o filho criado (img)
// }

let btn = document.querySelector('img#btn')
btn.addEventListener('click', showImage)