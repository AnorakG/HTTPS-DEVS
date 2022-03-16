
    // A primeira variável pega o id da div de obras para os dados do array do registros de obras

let obras = JSON.parse(localStorage.getItem('obras'))

    // Essa função pega os dados do localStorage e joga numa nova div associando a uma postagem.
    // Sempre irá criar uma nova div a cada novo registro feito pelo usuário.
function registroObras () {
    let obras = JSON.parse(localStorage.getItem('obras'))
    let novoConteudo = document.getElementById("obras")
    let div = document.createElement("div")

    // Aqui diz se o array "obras" estiver vazio ele não preenche a div.
    // Caso contrário ele pega o tamanho do array da div com os dados do registro feito pelo usuário.

    if(obras == null){}else if(obras.length === 0){}else{

    // O for vai pegar apenas uma das linhas da array "obras" do localStorage, criar uma linha nova
    // e adicionar na div "container-conteudo2" de registro de obras.

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
                let divLinha1 = document.createElement('hr')
                linhaNova.appendChild(divLinha1)
                divLinha1.classList.add('hr-registros')
                }
            }
        }
    }
    }
}

    // Essa função pega os dados do localStorage e joga numa nova div associando a uma postagem.
    // Sempre irá criar uma nova div a cada novo registro feito pelo usuário.

function registroDenuncias () {
    let denuncias = JSON.parse(localStorage.getItem('denuncias'))
    let novoRegistro = document.getElementById("denuncias")
    let div2 = document.createElement("div2") 

    // Aqui diz se o array "denuncias" estiver vazio ele não preenche a div.
    // Caso contrário ele pega o tamanho do array da div com os dados do registro feito pelo usuário.

    if (denuncias == null){}else if(denuncias.length === 0){}else{

    // O for vai pegar apenas uma das linhas da array "denuncias" do localStorage, criar uma linha nova
    // e adicionar na div "container-conteudo2" de registro de denuncias.

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
                let divLinha = document.createElement('hr')
                linhaNova2.appendChild(divLinha)
                divLinha.classList.add('hr-registros')
                }
            }
        }
    }
    }
}