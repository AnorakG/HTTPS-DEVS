let denuncias = []
let obras = []
let idObras, idDenuncias

let problema = document.getElementById("ipt-descricao-denuncia")
let endereco = document.getElementById("ipt-endereco-denuncia")
let data = document.getElementById("ipt-dataInicial-denuncia")
let imagemDenuncia = document.getElementById('ipt-fotos-denuncia')
let imagemObras = document.getElementById('ipt-fotos')

let descricao = document.getElementById("ipt-descricao")
let enderecoObra = document.getElementById("ipt-endereco")
let dataInicial = document.getElementById("ipt-dataInicial")
let dataFinal = document.getElementById("ipt-dataFinal")

// Essa função adiciona os registros feitos pelo usuário no LocalStorage.

function confirmaRegistros(){
if(localStorage.length>0){
    const obrasExistentes = JSON.parse(localStorage.getItem('obras'))
    const denunciasExistentes = JSON.parse(localStorage.getItem('denuncias'))
    if(obrasExistentes == null){localStorage.setItem("obras", JSON.stringify(obras))}else{
    for(let i = 0;i<obrasExistentes.length;i++)
    {
         obras.push(obrasExistentes[i])
    }
    localStorage.setItem("obras",JSON.stringify(obras));
    }
    if(denunciasExistentes == null){localStorage.setItem("denuncias", JSON.stringify(denuncias))}else{
    for(let i = 0;i<denunciasExistentes.length;i++)
    {
        denuncias.push(denunciasExistentes[i])
    }
    localStorage.setItem("denuncias",JSON.stringify(denuncias))
}
}
}

//essa função pega o cookie de dentro do parâmetro

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
/* Essa função verifica se o usuário está logado e caso esteja ela permite que o usuário faça um novo registro
de denuncia*/

function registrarDenuncias(){
    
    let logado = getCookie("logado")
    
    let pegaIDDenuncias = JSON.parse(localStorage.getItem('denuncias'))
    let idFinalDenuncias = pegaIDDenuncias.slice(-1) 
    if(idFinalDenuncias.length == 0){
        idDenuncias = 1
    }else{
        idDenuncias = idFinalDenuncias[0].id + 1;
    }
    if(problema.value.length == 0||endereco.value.length==0||data.value.length==0){
        Swal.fire({
            title: 'Preencha todos os campos',
            icon: 'error',
            timer:'800'
        })
    }else if(logado !=="sim"){
        Swal.fire({
            title: 'É preciso estar logado para utilizar nossos serviços',
            icon: 'error',
            timer:'800'
        })
    }else{
        let conta = JSON.parse(getCookie("conta"))
        denuncias.push({problema: problema.value, endereco: endereco.value,data: data.value.split('-').reverse().join('/'), imagem: imagemDenuncia.value, userId:conta.id, id:idDenuncias})
        localStorage.setItem("denuncias", JSON.stringify(denuncias))
        console.log("Denuncia feita")
        Swal.fire({
            title: 'Obrigado pela denunciar! <br> Denúncia realizada',
            icon: 'success',
            timer:'700'
        })
        problema.value = '';
        endereco.value = '';
        data.value= '';
        imagemDenuncia.value = '';
    }
}

// Essa função verifica se a data final é mais recente que a data inicial.
function confirmaData(str1, str2)
{
    return new Date(str1) < new Date(str2);
}

/* Essa função verifica se o usuário está logado e caso esteja ela permite que o usuário faça um novo registro
de obras*/
function registrarObras(){   
    let logado = getCookie("logado")

    let pegaIDObras = JSON.parse(localStorage.getItem('obras'))
    let idFinalObras = pegaIDObras.slice(-1) 
    if(idFinalObras.length == 0){
        idObras = 1
    }else{
        idObras = idFinalObras[0].id + 1;
    }
    
    if(descricao.value.length == 0||enderecoObra.value.length==0||dataInicial.value.length==0 ||dataFinal.value.length==0){
        Swal.fire({
            title: 'Preencha todos os campos',
            icon: 'error',
            timer:'800'
        })
    }else if(logado !=="sim"){
        Swal.fire({
            title: 'É preciso estar logado para utilizar nossos serviços',
            icon: 'error',
            timer:'800'
        })
    }else if(confirmaData(dataInicial.value,dataFinal.value) == false){
        Swal.fire({
            title: 'Data final mais recente que a data inicial',
            icon: 'error',
            timer:'800'
        })
    }else{
        let conta = JSON.parse(getCookie("conta"))
        obras.push({descricao: descricao.value, enderecoObra: enderecoObra.value,dataInicial: dataInicial.value.split('-').reverse().join('/'), dataFinal: dataFinal.value.split('-').reverse().join('/'),imagem: imagemObras.value, userId: conta.id, id: idObras})
        localStorage.setItem("obras", JSON.stringify(obras))
        console.log("Registro feito")
        Swal.fire({
            title: 'Obrigado pelo registro ! <br> Registro realizado',
            icon: 'success',
            timer:'700'
        })
        descricao.value = '';
        enderecoObra.value = '';
        dataInicial.value= '';
        dataFinal.value= '';     
    }
}
