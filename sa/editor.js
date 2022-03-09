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
function editarEmail(){
   if(!emailNovo.value.length){
       Swal.fire({
        title:'Insira o novo e-mail desejado por favor.',
        icon:'warning',
        timer:'700',
        showConfirmButton: false
    })
   }
}