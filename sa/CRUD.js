let denuncias = []
let obras = []

let problema = document.getElementById("ipt-descricao-denuncia")
let endereco = document.getElementById("ipt-endereco-denuncia")
let data = document.getElementById("ipt-dataInicial-denuncia")
let imagemDenuncia = document.getElementById('ipt-fotos-denuncia')
let imagemObras = document.getElementById('ipt-fotos')

let descricao = document.getElementById("ipt-descricao")
let enderecoObra = document.getElementById("ipt-endereco")
let dataInicial = document.getElementById("ipt-dataInicial")
let dataFinal = document.getElementById("ipt-dataFinal")

if(localStorage.length>0){
    const obrasExistentes = JSON.parse(localStorage.getItem('obras'))
    const denunciasExistentes = JSON.parse(localStorage.getItem('denuncias'))

    for(let i = 0;i<obrasExistentes.length;i++)
    {
         obras.push(obrasExistentes[i])
    }
    for(let i = 0;i<denunciasExistentes.length;i++)
    {
        denuncias.push(denunciasExistentes[i])
    }
    
};
localStorage.setItem("denuncias",JSON.stringify(denuncias))
localStorage.setItem("obras",JSON.stringify(obras))
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


function registrarDenuncias(){
    
    let logado = getCookie("logado")
    
    
    if(problema.value.length == 0||endereco.value.length==0||data.value.length==0||imagemDenuncia.value.length==0){
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
        denuncias.push({problema: problema.value, endereco: endereco.value,data: data.value.split('-').reverse().join('/'), imagem: imagemDenuncia.value, id:conta.id})
        localStorage.setItem("denuncias", JSON.stringify(denuncias))
        //console.log(localStorage.getItem('denuncias'))
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
function confirmaData(str1, str2)
{
    return new Date(str1) < new Date(str2);
}
function registrarObras(){
    //console.log(confirmaData(dataInicial.value,dataFinal.value))   
    let logado = getCookie("logado")
    
    if(descricao.value.length == 0||enderecoObra.value.length==0||dataInicial.value.length==0 ||dataFinal.value.length==0||imagemObras.value.length==0){
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
        obras.push({descricao: descricao.value, enderecoObra: enderecoObra.value,dataInicial: dataInicial.value.split('-').reverse().join('/'), dataFinal: dataFinal.value.split('-').reverse().join('/'),imagem: imagemObras.value, id: conta.id})
        localStorage.setItem("obras", JSON.stringify(obras))
       //console.log(localStorage.getItem('obras'))
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