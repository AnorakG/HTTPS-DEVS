let denuncias = []
let obras = []

let problema = document.getElementById("ipt-descricao-denuncia")
let endereco = document.getElementById("ipt-endereco-denuncia")
let data = document.getElementById("ipt-dataInicial-denuncia")
let imagemDenuncia = document.getElementById('ipt-fotos-denuncia')

let descricao = document.getElementById("ipt-descricao")
let enderecoObra = document.getElementById("ipt-endereco")
let dataInicial = document.getElementById("ipt-dataInicial")
let dataFinal = document.getElementById("ipt-dataFinal")

if(localStorage.length>0){
    const obrasExistentes = JSON.parse(localStorage.getItem('obras'))
    const denunciasExistentes = JSON.parse(localStorage.getItem('denuncias'))

    for(let i = 0;i<obrasExistentes;i++)
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

function registrarDenuncias(){
    denuncias.push({problema: problema.value, endereco: endereco.value,data: data.value.split('-').reverse().join('/'), imagem: imagemDenuncia.value})
    localStorage.setItem("denuncias", JSON.stringify(denuncias))
    console.log(localStorage.getItem('denuncias'))
    console.log("Denuncia feita")
    Swal.fire({
        title: 'Obrigado pela denunciar! <br> Denúncia realizada ',
        icon: 'success',
        timer:'700'
    })
    problema.value = '';
    endereco.value = '';
    data.value= '';
    imagemDenuncia.value = '';
}
function registrarObras(){
    obras.push({descricao: descricao.value, enderecoObra: enderecoObra.value,dataInicial: dataInicial.value.split('-').reverse().join('/'), dataFinal: dataFinal.value.split('-').reverse().join('/'),imagem: imagemDenuncia.value})
    localStorage.setItem("obras", JSON.stringify(obras))
    console.log(localStorage.getItem('obras'))
    console.log("registro feito ( ͡° ͜ʖ ͡°)")
    Swal.fire({
        title: 'obrigado pelo registro ! <br> registro realizado =',
        icon: 'success',
        timer:'700'
    })
    descricao.value = '';
    enderecoObra.value = '';
    dataInicial.value= '';
    dataFinal.value= '';      
    }
