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
} 
// --- SAUDAÇÃO E RECRUTAMENTO ---
    const elementoSaudacao = document.getElementById('mensagem-saudacao');
    let nomeSalvo = localStorage.getItem('nomeSoldado');

    // 1. Se NÃO tem nome, faz as perguntas (SÓ UMA VEZ)
    if (elementoSaudacao && !nomeSalvo) {
        let nomeInput = prompt("Qual o seu nome, soldado?");
        if (nomeInput) {
            localStorage.setItem('nomeSoldado', nomeInput);
            nomeSalvo = nomeInput; // Atualiza para usar na frase abaixo

            let idade = prompt("Soldado " + nomeInput + ", qual a sua idade?");
            if (idade >= 12) {
                alert("Ótimo, você será enviado à Capital da Realidade Z!");
            } else {
                alert("Soldado, você será enviado para a zona sul da Realidade Z!");
            }
        }
    }

    // 2. EXIBIÇÃO: Esta parte roda SEMPRE que houver um nome salvo ou novo
    if (elementoSaudacao && nomeSalvo) {
        elementoSaudacao.textContent = "Bem-vindo soldado " + nomeSalvo + "!";
    }

    // 3. VERIFICAÇÃO DE ANO (Item da Rubrica)
    const anoAtual = new Date().getFullYear();
    if (anoAtual === 2026) {
        alert("Ano de Grande Lançamento: Realidade Z está On!");
    }
};