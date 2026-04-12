// --- VALIDAÇÃO DE IDADE ---
const rotulo = document.getElementById('tema-rotulo');

const botaoTema = document.querySelector('.tema-container');
const rotuloTexto = document.getElementById('tema-rotulo');
const corpoPagina = document.body;

botaoTema.addEventListener('click', () => {
    //altera visual css
    corpoPagina.classList.toggle('modo-escuro');
    //alterar txt
    if (corpoPagina.classList.contains('modo-escuro'))
    {
        rotuloTexto.textContent = "Tema Escuro";
    } else {
        rotuloTexto.textContent = "Tema Claro"
    }
});
window.onload = function() {
    const elementoSaudacao = document.getElementById('mensagem-saudacao');
    let nomeSalvo = localStorage.getItem('nomeSoldado');
    if (elementoSaudacao && !nomeSalvo) {
        let nome = prompt("Qual o seu nome, soldado?");
        
        if (nome) {
            localStorage.setItem('nomeSoldado',nome);
            elementoSaudacao.textContent = "Boa sorte na missão, soldado " + nome + "!";
    
            let idade = prompt("Bem-vindo ao recrutamento soldado " + nome + "! Qual a sua idade?");
            
            if (idade >= 12) {
                alert("Ótimo, você será enviado a Capital da Realidade Z!");
            } else {
                alert("Soldado, você será enviado para a zona sul da Realidade Z");
            }
        } else if (elementoSaudacao && nomeSalvo) {
            elementoSaudacao.textContent = "Bem-vindo de volta soldado " + nomeSalvo + "!";
        }
        const anoAtual = new Date().getFullYear();
        if (anoAtual === 2026) {
            alert("Ano de Grande Lançamento: Realidade Z está On!");
        }
    }
};
