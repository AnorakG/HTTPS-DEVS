let users = []
let admin = [{nome:"admin",senha:"1234",dataDeNascimento:"11/11/2021",idade:"4 meses"}]
let idade,contaConectada,usuarios;
let id = 1

let formLogin = document.getElementById('formLogin')

let formCadastro = document.getElementById('formCadastro')

let dropdownPerfil = document.getElementsByClassName("dropdown-perfil")

let login=document.getElementById('nomeUsuario')
let senhaUsuario=document.getElementById('senhaUsuario')

let nome = document.getElementById('nome')
let senha1 = document.getElementById('senha1')
let senha2 = document.getElementById('senha2')
let email = document.getElementById('email')
let dataNascimento = document.getElementById('dataNascimento')

let senhaVisivel1 = document.getElementById('senhaVisivel1')
let senhaVisivel2 = document.getElementById('senhaVisivel2')

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
if(localStorage.length>0){
    const contasExistentes = JSON.parse(localStorage.getItem('users'))
    
    for(let i = 0;i<contasExistentes.length;i++)
    {
        users.push(contasExistentes[i])
    }
};
function dropdown(){
    let logado = getCookie("logado")

    if(logado == "sim"){
    for(let i = 0;i<dropdownPerfil.length;i++){
        dropdownPerfil[i].classList.add("perfil-dropdown")
    }
    }
}

localStorage.setItem('admin',JSON.stringify(admin))
localStorage.setItem('users', JSON.stringify(users))


senhaVisivel1.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      senha1.type="text"
      senha2.type="text"
    } else {
      senha1.type="password"
      senha2.type="password"
    }
})
senhaVisivel2.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      senhaUsuario.type="text"
    } else {
      senhaUsuario.type="password"
    }
})
function voltar(){
    formLogin.style.display = "inline"
    anuncioCadastro.style.display = "none";
    formCadastro.style.display = "none";
    nome.value=""
    email.value=""
    senha1.value=""
    senha2.value=""
    dataNascimento.value=""
}
function cadastramento(){
    formLogin.style.display = "none"
    anuncioCadastro.style.display = "none";
    formCadastro.style.display = "inline";
    nome.value=""
    email.value=""
    senha1.value=""
    senha2.value=""
    dataNascimento.value=""
}
function validarSenha(){
   if(senha1.value.length == 0||senha2.value.length == 0){}else{
    if(senha1.value != senha2.value ){
        Swal.fire({
            title: 'As senhas não combinam =(',
            icon: 'error',
            confirmButtonText: 'Confirme sua senha'
        })
    }else{
        Swal.fire({
            title: 'As senhas combinam =)',
            icon: 'success',
            confirmButtonText: 'Termine seu cadastro'
        })
    }}
}

function confirmarIdade(){
    const dataDeNascimento = new Date(dataNascimento.value)
    const hoje = new Date()

    idade = Math.floor((hoje-dataDeNascimento) / (365.25 * 24 * 60 * 60 * 1000))
    console.log(idade)
}

function cadastrar(){
    let pegaID = JSON.parse(localStorage.getItem('users'))
    let idFinal = pegaID.slice(-1) 
    if(idFinal.length == 0){
        id = 1
    }else{
        id = idFinal[0].id + 1;
    }
    console.log("cadastrar");
    //console.log(users);
    if(senha1.value.length == 0||senha2.value.length == 0||nome.value.length==0||email.value.length==0||dataNascimento.value.length==0){
        Swal.fire({
            title: 'Preencha todos os campos antes de se cadastrar',
            icon: 'error',
            timer:'800'
          })
    }/*else if(idade < 18){
        Swal.fire({
            title: 'Menores de Idade não podem se cadastrar.',
            icon: 'error',
            timer:'1200'
          })
    }*/else if(users.find(confirmarNome)||admin.find(confirmarAdmin)){
        Swal.fire({
            title: 'Nome de usuário já cadastrado <br> Tente outro',
            icon: 'error',
            timer:'700'
          })
    }else if(users.find(confirmarEmail)){
        Swal.fire({
            title: 'E-mail já cadastrado <br> Esqueceu sua senha?',
            icon: 'question',
            timer:'700'
        })
    }else if(senha1.value != senha2.value){
        Swal.fire({
            title: 'Senhas não combinam >=(',
            icon: 'error',
            timer:'700'
        })
    }else{
       
        users.push({nome: nome.value, senha: senha2.value, email: email.value, idade: idade + " anos",dataDeNascimento:dataNascimento.value, id:id})
        localStorage.setItem("users", JSON.stringify(users))
        //console.log(localStorage.getItem('users'))
        console.log("Cadastro feito =)")
        Swal.fire({
            title: 'Parabéns por se cadastrar! <br> Cadastro realizado =',
            icon: 'success',
            timer:'700'
        })
        setTimeout(function(){
            formCadastro.style.display = "none";
            formLogin.style.display = "inline"
        }, 700); 
    }
}

function confirmarNome(users){
    return users.nome === nome.value
}
function confirmarEmail(users){
    return users.email === email.value
}
function confirmarAdmin(admin){
    return admin.nome === nome.value;
}
function buscarNome(users){
    return users.nome === login.value;
}
function buscarEmail(users){
    return users.email === login.value;
}
function buscarAdmin(admin){
    return admin.nome === login.value;
}
function confirmar(){
    usuarios = JSON.parse(localStorage.getItem('users'))
    adm = JSON.parse(localStorage.getItem('admin'))

    if(adm.find(buscarAdmin)){
        console.log('Bem Vindo Administrador')
        //console.log(adm.find(buscarAdmin))
        contaConectada = adm.find(buscarAdmin)
        confirmarSenha()
    }else if(usuarios.find(buscarNome)){
        console.log('Nome encontrado!')
        //console.log(usuarios.find(buscarNome))
        contaConectada = usuarios.find(buscarNome)
        confirmarSenha()
    }else if(usuarios.find(buscarEmail)){
        console.log('E-mail encontrado!')
        //console.log(usuarios.find(buscarEmail))
        contaConectada = usuarios.find(buscarEmail)
        confirmarSenha()
    }else{
        Swal.fire({
            title: 'Cadastre-se por favor.',
            icon: 'warning',
            timer:'700'
        })
    }
}

function confirmarSenha(){
    if(contaConectada.senha === senhaUsuario.value){
        Swal.fire({
            title: 'Você está logado.',
            icon: 'success',
            timer:'700'
        })
        console.log("Senha Correta!")
        senhaUsuario.value = ""
        login.value = ""
        anuncioCadastro.style.display = "none";
        document.cookie="conta="+JSON.stringify(contaConectada)
        document.cookie="logado=sim"
        setTimeout(function(){window.location.reload(true)},800)
    }else{
        Swal.fire({
            title: 'Senha ou usuário incorretas <br> Tente novamente ou cadastre-se por favor.',
            icon: 'error',
            timer:'700'
        })
    }
}

function acessarPerfil(){
    let verifica = getCookie("logado")
    if(verifica == "sim"){
        window.location.href= "./perfil.html"
    }else{
        window.location.href= "./login.html"
    }
}

function logOut(){
    let cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=./sa;";
    }
    Swal.fire({
        title: 'Logout feito com sucesso <br> volte sempre =)',
        icon: 'success',
        timer:'700'
    })
    setTimeout(function(){window.location.href="./index.html"},750)
}
function perfil(){
    let perfilConectado = JSON.parse(getCookie("conta"))
    let nomeUsuarioPerfil = document.getElementById('nomeUsuarioPerfil')
    let emailUsuarioPerfil = document.getElementById('emailUsuarioPerfil')
    let emailPerfil = document.getElementById('emailPerfil')
    let idadeUsuarioPerfil = document.getElementById('idadeUsuarioPerfil')
    let dataDeNascimentoUsuarioPerfil = document.getElementById('dataNascimentoUsuarioPerfil')
    let btnDel = document.getElementById("btn-del")

    nomeUsuarioPerfil.innerHTML= perfilConectado.nome
    emailUsuarioPerfil.innerHTML= perfilConectado.email
    dataDeNascimentoUsuarioPerfil.innerHTML= perfilConectado.dataDeNascimento.split('-').reverse().join('/')
    idadeUsuarioPerfil.innerHTML= perfilConectado.idade

    if(perfilConectado.nome == admin[0].nome){
        emailPerfil.style.display = "none"
        btnDel.style.display = "none"
    }
}
function deletar(){
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Você não conseguirá recuperar sua conta nem seus registros!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33',
        reverseButtons: true,
        confirmButtonText: 'Sim, pode deletar!',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
        let cadastros = JSON.parse(localStorage.getItem("users"))
        let obras = JSON.parse(localStorage.getItem("obras"))
        let denuncias = JSON.parse(localStorage.getItem('denuncias'))
        let conta = JSON.parse(getCookie("conta"))
        let cookies = document.cookie.split(";");
        for (i = 0; i < cadastros.length; i++) {
            if (conta.id == cadastros[i].id) {
                excluirUsers = i
                cadastros.splice(excluirUsers, 1)
                localStorage.setItem('users', JSON.stringify(cadastros))
            }
        }
        if(obras == null){}else if(obras.length === 0){}else{
        for (i = 0; i < obras.length; i++) {
            if (conta.id == obras[i].id) {
                excluirObras = i
                obras.splice(excluirObras, 1)
                localStorage.setItem('obras', JSON.stringify(obras))
                i--
            }
        }}
        if (denuncias == null){}else if(denuncias.length === 0){}else{
        for (i = 0; i < denuncias.length; i++) {
            if (conta.id == denuncias[i].id) {
                excluirDenuncias = i
                denuncias.splice(excluirDenuncias, 1)
                localStorage.setItem('denuncias', JSON.stringify(denuncias))
                i--
            }
        }}
        Swal.fire(
            'Conta Deletada',
            'Sua conta foi deletada com sucesso.',
            'success',
            '700'
        )
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=./sa;";
        }
        setTimeout(function(){window.location.href="./index.html"},750)
        }
      })
}