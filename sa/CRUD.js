let denuncias = []
let obras = []

let problema = document.getElementById("ipt-descricao-denuncia")
let endereco = document.getElementById("ipt-endereco-denuncia")
let data = document.getElementById("ipt-dataInicial-denuncia")


if(localStorage.length>0){
    const denunciasExistentes = JSON.parse(localStorage.getItem('denuncias'))
    for(let i = 0;i<denunciasExistentes.length;i++)
    {
        denuncias.push(denunciasExistentes[i])
    }
    
};

function registrarDenuncias(){
    denuncias.push({problema: problema.value, endereco: endereco.value,data: data.value.split('-').reverse().join('/')})
    localStorage.setItem("denuncias", JSON.stringify(denuncias))
    console.log(localStorage.getItem('denuncias'))
    console.log("Denuncia feita ( ͡° ͜ʖ ͡°)")
    Swal.fire({
        title: 'Parabéns por denunciar! <br> denuncia realizada =',
        icon: 'success',
        timer:'700'
    })
    problema.value = '';
    endereco.value = '';
    data.value= '';
    
}
