

let obras = JSON.parse(localStorage.getItem('obras'))
function registroObras () {
    let obras = JSON.parse(localStorage.getItem('obras'))
    let novoConteudo = document.getElementById("obras")
    let div = document.createElement("div")
   
    if(obras == null){}else if(obras.length === 0){}else{
    for(let i=0; i<obras.length;i++){
       const linhaNova = novoConteudo.appendChild(div)
        for(let j=0; j<5;j++){
            if(j===0){
                let descricao = document.createElement("p")
                descricao.classList.add("p-descricao")
                descricao.innerHTML = obras[i].descricao
                linhaNova.appendChild(descricao)
            }
            if(j===1){
                let enderecoObra = document.createElement("p")
                enderecoObra.classList.add("p-enderecoObra")
                enderecoObra.innerHTML = "Endereço da Obra: " + obras[i].enderecoObra
                linhaNova.appendChild(enderecoObra)
            }
            if(j===2){
                let dataInicial = document.createElement("p")
                dataInicial.classList.add("p-datainicial")
                dataInicial.innerHTML = "Data Inicial: "+ obras[i].dataInicial
                linhaNova.appendChild(dataInicial)
            }
            if(j===3){
                let dataFinal = document.createElement("p")
                dataFinal.classList.add("p-dataFinal")
                dataFinal.innerHTML = "Data Final: "+ obras[i].dataFinal
                linhaNova.appendChild(dataFinal)
            }
            if(j===4){
                if(obras[i].imagem.length == 0){linhaNova.appendChild(document.createElement("br"))}else{
                let img = document.createElement("img")
                img.src = obras[i].imagem  
                img.alt = "Imagem não suportada e/ou inexistente"
                img.classList.add("img-obra")
                linhaNova.appendChild(img)
                }
            }
        }
    }
    }
}
function registroDenuncias () {
    let denuncias = JSON.parse(localStorage.getItem('denuncias'))
    let novoRegistro = document.getElementById("denuncias")
    let div2 = document.createElement("div2") 


    if (denuncias == null){}else if(denuncias.length === 0){}else{
    for(let i=0; i<denuncias.length;i++){
        const linhaNova2 = novoRegistro.appendChild(div2)
         for(let j=0; j<4;j++){
            if(j===0){
                let problema = document.createElement("p")
                problema.classList.add("p-problema")
                problema.innerHTML = denuncias[i].problema
                linhaNova2.appendChild(problema)
             }
            if(j===1){
                let endereco = document.createElement("p")
                endereco.classList.add("p-endereco")
                endereco.innerHTML = "Endereço: "+ denuncias[i].endereco
                linhaNova2.appendChild(endereco)
             }
            if(j===2){
                let data = document.createElement("p")
                data.classList.add("p-data")
                data.innerHTML = "Data: "+ denuncias[i].data
                linhaNova2.appendChild(data)
            }
            if(j===3){
                if(denuncias[i].imagem.length == 0){linhaNova2.appendChild(document.createElement("br"))}else{
                let img = document.createElement("img")
                img.src = denuncias[i].imagem  
                img.alt = "Imagem não suportada e/ou incorreta"
                linhaNova2.appendChild(img)
                }
            }
        }
    }
    }
}