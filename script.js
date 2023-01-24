let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var datachegada = document.getElementById("datachegada").value;
    var datadepartida = document.getElementById("datadepartida").value;
    var adultos = document.getElementById("adultos").value;
    var criancas = document.getElementById("criancas").value;
  
    var url = "https://wa.me/5522997397377?text=" // Meu numero
      + "*DADOS*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Data Chegada*: " + datachegada + "%0a"
      + "*Data Partida*: " + datadepartida + "%0a"
      + "*Adultos*: " + adultos + "%0a"
      + "*Criancas*: " + criancas + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }
  