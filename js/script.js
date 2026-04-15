// tema escuro
const rotulo = document.getElementById('tema-rotulo');

const botaoTema = document.querySelector('.tema-container');
const rotuloTexto = document.getElementById('tema-rotulo');
const corpoPagina = document.body;

botaoTema.addEventListener('click', () => {
    //altera visual css
    corpoPagina.classList.toggle('modo-escuro');
    //alterar txt
    if (corpoPagina.classList.contains('modo-escuro')){
        rotuloTexto.textContent = "Tema Escuro";
        localStorage.setItem('tema','escuro');
    } else {
        rotuloTexto.textContent = "Tema Claro";
        localStorage.setItem('tema','claro');
    }
});
window.onload = function() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        corpoPagina.classList.add('modo-escuro');
    rotuloTexto.textContent = "Tema Escuro"
} const botaoRedefinir = document.getElementById('redefinir');

if (botaoRedefinir) {
    botaoRedefinir.onclick = function() {
        localStorage.clear(); 
        window.location.reload();
    };
}
// --- SAUDAÇÃO E RECRUTAMENTO ---
    const elementoSaudacao = document.getElementById('mensagem-saudacao');
    let nomeSalvo = localStorage.getItem('nomeSoldado');
    let idadeSalva = localStorage.getItem('idadeSoldado')

    // 1. Se NÃO tem nome, faz as perguntas (SÓ UMA VEZ)
    if (elementoSaudacao && !nomeSalvo) {
        let nomeInput = prompt("Qual o seu nome, soldado?");
        if (nomeInput) {
            localStorage.setItem('nomeSoldado', nomeInput);
            nomeSalvo = nomeInput; // Atualiza para usar na frase abaixo

            let idade = prompt("Soldado " + nomeInput + ", qual a sua idade?");
            localStorage.setItem("idadeSoldado", idade);
            if (idade >= 12) {
                alert("Ótimo, você será enviado à Capital da Realidade Z!");
            } else {
                alert("Soldado, você será enviado para a zona B da Realidade Z!");

                    const boxSocial = document.getElementById('sociais');
              {
                boxSocial.classList.add('idade-borrada')
            }
            }
        }
    }
    if (elementoSaudacao && nomeSalvo) {
        elementoSaudacao.textContent = "Bem-vindo soldado " + nomeSalvo + "!";
    }
    const boxSocial = document.getElementById("sociais");

    if (idadeSalva && parseInt(idadeSalva) < 12 && boxSocial) {
        boxSocial.classList.add("idade-borrada");
    }

    // 3. VERIFICAÇÃO DE ANO
    const anoAtual = new Date().getFullYear();
    if (anoAtual === 2026 && (window.location.pathname.endsWith("index.html") || window.location.pathname === "/")) {
        alert("Ano de Grande Lançamento: Realidade Z está On!");
    }
    // --- FICHA TÉCNICA DO JOGO ---

const campoDev = document.getElementById('dev');

if (campoDev) { 
    const nomeDev = "G14MES";
    const generoJogo = "Top Down / Ação";
    const plataformaJogo = "PC";
    const precoSugerido = "Gratuito";
    const classifOficial = "12 anos";

    campoDev.textContent = nomeDev;
    document.getElementById('genero').textContent = generoJogo;
    document.getElementById('plataforma').textContent = plataformaJogo;
    document.getElementById('preco').textContent = precoSugerido;
    document.getElementById('classificacao').textContent = classifOficial;
}
};