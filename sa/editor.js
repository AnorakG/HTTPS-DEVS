let contas = JSON.parse(localStorage.getItem("users"))
let usuarioLogado = JSON.parse(getCookie('conta'))

let senhaVisivel3 = document.getElementById("senhaVisivel3")

let senhaNova1 = document.getElementById('senhaNova1')
let senhaNova2 = document.getElementById('senhaNova2')
let emailNovo = document.getElementById('emailNovo')

let editarUser;

for(i=0; i<contas.length; i++){
    if(usuarioLogado.id == contas[i].id){
        editarUser = i
    }
}

senhaVisivel3.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      senhaNova1.type="text"
      senhaNova2.type="text"
    } else {
      senhaNova1.type="password"
      senhaNova2.type="password"
    }
})
// Essa função verifica se o novo E-mail registrado é diferente do e-mail antigo.

function verificarEmail(contas){
    return contas.email === emailNovo.value
}
// Essa função verifica se as novas senhas combinam.

function validarNovaSenha(){
    if(senhaNova1.value.length == 0||senhaNova2.value.length == 0){}else{
        if(senhaNova1.value != senhaNova2.value ){
            Swal.fire({
                title: 'As senhas não combinam.',
                icon: 'error',
                confirmButtonText: 'Confirme sua nova senha'
            })
        }else{
            Swal.fire({
                title: 'As senhas combinam.',
                icon: 'success',
                confirmButtonText: 'Termine seu cadastro'
            })
        }
    }
}
// Essa função cadastra e verifica se o novo E-mail registrado é diferente do e-mail antigo.

function editarEmail(){
    if(!emailNovo.value.length){
        Swal.fire({
            title:'Insira o novo e-mail desejado por favor.',
            icon:'warning',
            timer:'1000',
            showConfirmButton: false
        })
    }else if(contas.find(verificarEmail)){
        Swal.fire({
            title:'E-mail já cadastrado.',
            icon:'warning',
            timer:'1000',
            showConfirmButton: false
        })
    }else{
        Swal.fire({
            title:'Novo e-mail cadastrado.',
            icon:'success',
            timer:'1000',
            showConfirmButton: false
        })
        contas[editarUser].email = emailNovo.value
        usuarioLogado.email = emailNovo.value
        
        localStorage.setItem("users", JSON.stringify(contas))
        document.cookie = 'conta='+ JSON.stringify(usuarioLogado)
    }
}
// Essa função cadastra e verifica se as novas senhas combinam.

function editarSenha(){
    if(!senhaNova1.value.length ||!senhaNova2.value){
        Swal.fire({
            title:'Insira a nova senha desejada por favor.',
            icon:'warning',
            timer:'1000',
            showConfirmButton: false
        })
    }else if(senhaNova1.value != senhaNova2.value){
        Swal.fire({
            title: 'As senhas não combinam.',
            icon: 'error',
            timer:'1000',
            showConfirmButton: false
        })
    }else{
        Swal.fire({
            title:'Nova senha cadastrada.',
            icon:'success',
            timer:'1000',
            showConfirmButton: false
        })
        contas[editarUser].senha = senhaNova2.value
        usuarioLogado.senha = senhaNova2.value
        
        localStorage.setItem("users", JSON.stringify(contas))
        document.cookie = 'conta='+ JSON.stringify(usuarioLogado)
    }
}