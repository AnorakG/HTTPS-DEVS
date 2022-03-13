let denuncias = JSON.parse(localStorage.getItem('denuncias'))
let obras = JSON.parse(localStorage.getItem('obras'))
let usuario = JSON.parse(getCookie("conta"))

let tituloDenuncia = document.getElementById("tituloDenuncias")
let tituloObras = document.getElementById("tituloObras")

function planilhaDenuncias(){
    let tbl = document.getElementById('planilhaDenuncias')
    if (denuncias == null){
        tituloDenuncia.style.display = "none"
        tbl.style.display = "none"
    }else if(denuncias.length === 0){
        tituloDenuncia.style.display = "none"
        tbl.style.display = "none"
    }else{
    if(usuario.nome == "admin"){
        for (let i = 0; i < denuncias.length; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < 5; j++) {
            const td = tr.insertCell();
            if(j===0){
                td.appendChild(document.createTextNode(denuncias[i].problema));
            }
            if(j===1){
                td.appendChild(document.createTextNode(denuncias[i].endereco));
            }
            if(j===2){
                td.appendChild(document.createTextNode(denuncias[i].data));
            }
            if(j===3){
                if(denuncias[i].imagem.length == 0){}else{
                    let img = document.createElement("img")
                    img.src = denuncias[i].imagem  
                    img.alt = "Imagem não suportada e/ou inexistente"
                    img.width = 200
                    img.height = 100
                    td.appendChild(img)
            }}
            if(j==4){
                let btnDelRegistro = document.createElement("button")
                btnDelRegistro.classList.add("btn-planilha")
                btnDelRegistro.innerText = "Deletar"
                btnDelRegistro.setAttribute("onclick","deletarRegistroAdmin()")
                td.appendChild(btnDelRegistro)
            }
            }
        }
    }else{
        let denunciasDoUsuario = denuncias.filter(id =>  id.id == usuario.id)
        if(denunciasDoUsuario.length==0){
            tituloDenuncia.style.display = "none"
            tbl.style.display = "none"
        }else{
        for (let i = 0; i < denunciasDoUsuario.length; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < 6; j++) {
            const td = tr.insertCell();
            if(j===0){
                td.appendChild(document.createTextNode(denunciasDoUsuario[i].problema));
            }
            if(j===1){
                td.appendChild(document.createTextNode(denunciasDoUsuario[i].endereco));
            }
            if(j===2){
                td.appendChild(document.createTextNode(denunciasDoUsuario[i].data));
            }
            if(j===3){
                if(denunciasDoUsuario[i].imagem.length == 0){}else{
                    let img = document.createElement("img")
                    img.src = denunciasDoUsuario[i].imagem  
                    img.alt = "Imagem não suportada e/ou inexistente"
                    img.width = 200
                    img.height = 100
                    td.appendChild(img)
            }}
            if(j==4){
                let btnDelRegistro = document.createElement("button")
                btnDelRegistro.classList.add("btn-planilha")
                btnDelRegistro.innerText = "Deletar"
                btnDelRegistro.setAttribute("onclick","deletarRegistro()")
                let btnEditaRegistro = document.createElement("button")
                btnEditaRegistro.classList.add("btn-planilha")
                btnEditaRegistro.innerText = "Editar"
                td.appendChild(btnDelRegistro)
                td.appendChild(btnEditaRegistro)
            }
            }
        }
        }
    }
}
}
function planilhaObras(){
    let tbl = document.getElementById('planilhaObras')
    if (obras == null){
        tituloObras.style.display = "none"
        tbl.style.display = "none"
    }else if(denuncias.length === 0){
        tituloObras.style.display = "none"
        tbl.style.display = "none"
    }else{
    if(usuario.nome == "admin"){
        for (let i = 0; i < obras.length; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < 6; j++) {
            const td = tr.insertCell();
            if(j===0){
                td.appendChild(document.createTextNode(obras[i].descricao));
            }
            if(j===1){
                td.appendChild(document.createTextNode(obras[i].enderecoObra));
            }
            if(j===2){
                td.appendChild(document.createTextNode(obras[i].dataInicial));
            }
            if(j===3){
                td.appendChild(document.createTextNode(obras[i].dataFinal));
            }
            if(j===4){
                if(obras[i].imagem.length == 0){}else{
                    let img = document.createElement("img")
                    img.src = obras[i].imagem  
                    img.alt = "Imagem não suportada e/ou inexistente"
                    img.width = 200
                    img.height = 100
                    td.appendChild(img)
            }}
            if(j==5){
                let btnDelRegistro = document.createElement("button")
                btnDelRegistro.classList.add("btn-planilha")
                btnDelRegistro.innerText = "Deletar"
                btnDelRegistro.setAttribute("onclick","deletarRegistroAdmin()")
                td.appendChild(btnDelRegistro)
            }
            }
        }
    }else{
        let obrasDoUsuario = obras.filter(id =>  id.id == usuario.id)
        if(obrasDoUsuario.length==0){
            tituloObras.style.display = "none"
            tbl.style.display = "none"
        }else{
        for (let i = 0; i < obrasDoUsuario.length; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < 6; j++) {
            const td = tr.insertCell();
            if(j===0){
                td.appendChild(document.createTextNode(obrasDoUsuario[i].descricao));
            }
            if(j===1){
                td.appendChild(document.createTextNode(obrasDoUsuario[i].enderecoObra));
            }
            if(j===2){
                td.appendChild(document.createTextNode(obrasDoUsuario[i].dataInicial));
            }
            if(j===3){
                td.appendChild(document.createTextNode(obras[i].dataFinal));
            }
            if(j===4){
                if(obrasDoUsuario[i].imagem.length == 0){}else{
                    let img = document.createElement("img")
                    img.src = obrasDoUsuario[i].imagem  
                    img.alt = "Imagem não suportada e/ou inexistente"
                    img.width = 200
                    img.height = 100
                    td.appendChild(img)
            }}
            if(j==5){
                let btnDelRegistro = document.createElement("button")
                btnDelRegistro.classList.add("btn-planilha")
                btnDelRegistro.innerText = "Deletar"
                btnDelRegistro.setAttribute("onclick","deletarRegistro()")
                let btnEditaRegistro = document.createElement("button")
                btnEditaRegistro.classList.add("btn-planilha")
                btnEditaRegistro.innerText = "Editar"
                td.appendChild(btnDelRegistro)
                td.appendChild(btnEditaRegistro)
            }
            }
        }
        }
    }
}
}