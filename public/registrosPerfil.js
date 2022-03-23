let denuncias = JSON.parse(localStorage.getItem('denuncias'))
let obras = JSON.parse(localStorage.getItem('obras'))
let usuario = JSON.parse(getCookie("conta"))
let selectedRow;

let edit1, edit2,edit3;

let tituloDenuncia = document.getElementById("tituloDenuncias")
let tituloObras = document.getElementById("tituloObras")


function confirmaData(str1, str2)
{
    return new Date(str1) < new Date(str2);
}
// Essa função cria uma nova planilha com os dados das denuncias feitas pelo usuário.

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
                if(denuncias[i].imagem.length == 0){
                    td.appendChild(document.createTextNode("Imagem não registrada"));
                }else{
                    let img = document.createElement("img")
                    img.src = denuncias[i].imagem
                    img.alt = "Imagem não suportada e/ou inexistente"
                    img.width = 200
                    img.height = 100
                    td.appendChild(img)
            }}
            if(j==4){
                let btnDelRegistro = document.createElement("button")
                btnDelRegistro.classList.add("btn-planilhaDel")
                btnDelRegistro.innerText = "Deletar"
                btnDelRegistro.setAttribute("onclick",`deletarRegistro(this, ${denuncias[i].id})`)
                td.appendChild(btnDelRegistro)
            }
            }
        }
    }else{
        let denunciasDoUsuario = denuncias.filter(id =>  id.userId == usuario.id)
        if(denunciasDoUsuario.length==0){
            tituloDenuncia.style.display = "none"
            tbl.style.display = "none"
        }else{
        for (let i = 0; i < denunciasDoUsuario.length; i++) {      
            const tr = tbl.insertRow();
            for (let j = 0; j < 5; j++) {
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
                if(denunciasDoUsuario[i].imagem.length == 0){
                    td.appendChild(document.createTextNode("Imagem não registrada"));
                }else{
                    let img = document.createElement("img")
                    img.src = denunciasDoUsuario[i].imagem  
                    img.alt = "Imagem não suportada e/ou inexistente"
                    img.width = 200
                    img.height = 100
                    td.appendChild(img)
            }}
            if(j==4){
                let btnDelRegistro = document.createElement("button")
                btnDelRegistro.classList.add("btn-planilhaDel")
                btnDelRegistro.innerText = "Deletar"
                btnDelRegistro.setAttribute("onclick",`deletarRegistro(this, ${denunciasDoUsuario[i].id})`)
                let btnEditaRegistro = document.createElement("button")
                btnEditaRegistro.classList.add("btn-planilha")
                btnEditaRegistro.innerText = "Editar"
                btnEditaRegistro.setAttribute("onclick",`editarRegistro(${denunciasDoUsuario[i].id})`)
                td.appendChild(btnDelRegistro)
                td.appendChild(btnEditaRegistro)
            }
            }
        }
        }
    }
}
}
// Essa função cria uma nova planilha com os dados das obras registradas pelo usuário.

function planilhaObras(){
    let tbl = document.getElementById('planilhaObras')
    if (obras == null){
        tituloObras.style.display = "none"
        tbl.style.display = "none"
    }else if(obras.length === 0){
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
                if(obras[i].imagem.length == 0){
                    td.appendChild(document.createTextNode("Imagem não registrada"));
                }else{
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
                btnDelRegistro.setAttribute("onclick",`deletarRegistroObras(this, ${obras[i].id})`)
                td.appendChild(btnDelRegistro)
            }
            }
        }
    }else{
        let obrasDoUsuario = obras.filter(id =>  id.userId == usuario.id)
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
                td.appendChild(document.createTextNode(obrasDoUsuario[i].dataFinal));
            }
            if(j===4){
                if(obrasDoUsuario[i].imagem.length == 0){
                    td.appendChild(document.createTextNode("Imagem não registrada"));
                }else{
                    let img = document.createElement("img")
                    img.src = obrasDoUsuario[i].imagem  
                    img.alt = "Imagem não suportada e/ou inexistente"
                    img.width = 200
                    img.height = 100
                    td.appendChild(img)
            }}
            if(j==5){
                let btnDelRegistro = document.createElement("button")
                btnDelRegistro.classList.add("btn-planilhaDel")
                btnDelRegistro.innerText = "Deletar"
                btnDelRegistro.setAttribute("onclick",`deletarRegistroObras(this, ${obrasDoUsuario[i].id})`)
                let btnEditaRegistro = document.createElement("button")
                btnEditaRegistro.classList.add("btn-planilha")
                btnEditaRegistro.innerText = "Editar"
                btnEditaRegistro.setAttribute("onclick",`editarRegistroObras(${obrasDoUsuario[i].id})`)
                td.appendChild(btnDelRegistro)
                td.appendChild(btnEditaRegistro)
            }
            }
        }
        }
    }
}
}
// Essa função permite que o usuário possa deletar um unico registro de denuncia.

function deletarRegistro(td, id){
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Você não conseguirá recuperar esse registro.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33',
        reverseButtons: true,
        confirmButtonText: 'Sim, pode deletar.',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
        row = td.parentElement.parentElement;
        document.getElementById("planilhaDenuncias").deleteRow(row.rowIndex);
        let index = denuncias.findIndex((elem)=> {return elem.id == id})
        console.log(index)
        denuncias.splice(index,1)
        localStorage.setItem("denuncias",JSON.stringify(denuncias))
        setTimeout(function(){window.location.reload(true)},100)
      }})
}
// Essa função permite que o usuário possa deletar um unico registro de obras registradas.
function deletarRegistroObras(td, id){
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Você não conseguirá recuperar esse registro.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33',
        reverseButtons: true,
        confirmButtonText: 'Sim, pode deletar.',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
        row = td.parentElement.parentElement;
        document.getElementById("planilhaObras").deleteRow(row.rowIndex);
        let index = obras.findIndex((elem)=> {return elem.id == id})
        obras.splice(index,1)
        localStorage.setItem("obras",JSON.stringify(obras))
        setTimeout(function(){window.location.reload(true)},100)
      }})
}
// Essa função permite que o usuário possa editar os dados de um único registro de denúncia.

function editarRegistro(id){
    let index = denuncias.findIndex((elem)=> {return elem.id == id})
    Swal.fire({
        title: 'Edite seu registro',
        html:
        '<br>'+'<label for="swal-input1">Edite a descrição do seu problema:</label>'+
        '<br>'+`<input id="swal-input1" class="swal2-input" value=${denuncias[index].problema}>`+
        '<br>'+ '<br>'+'<label for="swal-input2">Edite a imagem do seu problema:</label>'+
        '<br>'+`<input type="text" id="swal-input2" class="swal2-input" value=${denuncias[index].imagem === undefined ? "" : denuncias[index].imagem}>`,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#28a745',
        reverseButtons: true,
        confirmButtonText: 'Editar',
        cancelButtonText:'Cancelar',
        preConfirm: () => {
              edit1 = document.getElementById('swal-input1').value,
              edit2 = document.getElementById('swal-input2').value
          }
    }).then((result) => {
        if (result.isConfirmed) {
            let index = denuncias.findIndex((elem)=> {return elem.id == id})
            denuncias[index].problema = edit1;
            denuncias[index].imagem = edit2;
            localStorage.setItem("denuncias", JSON.stringify(denuncias))
            setTimeout(function(){window.location.reload(true)},100)
    }})
}
// Essa função permite que o usuário possa editar os dados de um único registro de obra.
function editarRegistroObras(id){
    let index = obras.findIndex((elem)=> {return elem.id == id})
    Swal.fire({
        title: 'Edite seu registro',
        html:
        '<br>'+'<label for="swal-input1">Edite a descrição da sua obra:</label>'+
        '<br>'+`<input id="swal-input1" class="swal2-input" value=${obras[index].descricao}>`+
        '<br>'+ '<br>'+'<label for="swal-input2">Edite a data final da sua obra:</label>'+
        '<br>'+`<input style="width: 299px;" type="date" id="swal-input2" class="swal2-input" value=${obras[index].dataFinal.split('/').reverse().join('-')}>`+
        '<br>'+ '<br>'+'<label for="swal-input3">Edite a imagem da sua obra:</label>'+
        '<br>'+`<input type="text" id="swal-input3" class="swal2-input" value=${obras[index].imagem === undefined ? "" : obras[index].imagem}>`,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#28a745',
        reverseButtons: true,
        confirmButtonText: 'Editar',
        cancelButtonText:'Cancelar',
        preConfirm: () => {
              edit1 = document.getElementById('swal-input1').value,
              edit2 = document.getElementById('swal-input2').value,
              edit3 = document.getElementById('swal-input3').value
          }
    }).then((result) => {
        if (result.isConfirmed) {
            let index = obras.findIndex((elem)=> {return elem.id == id})
            obras[index].descricao = edit1;
            if(confirmaData(obras[index].dataInicial,edit2) === false){
                Swal.fire({
                    title: 'Data final mais recente que a data inicial',
                    icon: 'error',
                    timer:'5000'
                })
            }else{
                obras[index].dataFinal = edit2.split('-').reverse().join('/')
            }
            obras[index].imagem = edit3;
            localStorage.setItem("obras", JSON.stringify(obras))
            setTimeout(function(){window.location.reload(true)},2000)
    }})
}