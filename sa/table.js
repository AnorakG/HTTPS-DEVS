

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
                linhaNova.appendChild(document.createElement("br"))
                linhaNova.appendChild(document.createTextNode(obras[i].descricao))
                linhaNova.appendChild(document.createElement("br"))
            }
            if(j===1){
                linhaNova.appendChild(document.createTextNode("Endereço da Obra: "+ obras[i].enderecoObra))
                linhaNova.appendChild(document.createElement("br"))
            }
            if(j===2){
                linhaNova.appendChild(document.createTextNode("Data Inicial: "+ obras[i].dataInicial))
                linhaNova.appendChild(document.createElement("br"))
            }
            if(j===3){
                linhaNova.appendChild(document.createTextNode("Data Final: "+ obras[i].dataFinal))
                linhaNova.appendChild(document.createElement("br"))
            }
            if(j===4){
                if(obras[i].imagem.length == 0){linhaNova.appendChild(document.createElement("br"))}else{
                let img = document.createElement("img")
                img.src = obras[i].imagem  
                img.alt = "Imagem não suportada e/ou inexistente"
                img.width = 300
                linhaNova.appendChild(img)
                linhaNova.appendChild(document.createElement("br"))
                linhaNova.appendChild(document.createElement("br"))
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
                 linhaNova2.appendChild(document.createElement("br"))
                 linhaNova2.appendChild(document.createTextNode(denuncias[i].problema))
                 linhaNova2.appendChild(document.createElement("br"))
             }
            if(j===1){
                 linhaNova2.appendChild(document.createTextNode("Endereço: "+ denuncias[i].endereco))
                 linhaNova2.appendChild(document.createElement("br"))
             }
            if(j===2){
                 linhaNova2.appendChild(document.createTextNode("Data: "+ denuncias[i].data))
                 linhaNova2.appendChild(document.createElement("br"))
            }
            if(j===3){
                if(denuncias[i].imagem.length == 0){linhaNova2.appendChild(document.createElement("br"))}else{
                let img = document.createElement("img")
                img.src = denuncias[i].imagem  
                img.alt = "Imagem não suportada e/ou incorreta"
                img.width = 300
                linhaNova2.appendChild(img)
                linhaNova2.appendChild(document.createElement("br"))
                linhaNova2.appendChild(document.createElement("br"))
                }
            }
        }
    }
    }
}