let desafios = [
  "Te pediram um curriculo, Rápido! O que você sabe? (Popularidade: TIOBE)",
  "Cuidado! Trolls à Frente! Rápido defenda sua linguagem de Programação Favorita! (Popularidade: PYPL)",
  "Inspeção do Comitê, Sabe aqueles caras que gostam de um padrão? Que linguagem mostrar pra eles (Popularidade: IEEE)",
  "Dica do Amigo: Sempre fique atento a novas oportunidades e vagas de emprego (Demanda: Indeed.com)",
  "Jogando Conversa fora no escritório quem tem mais colegas de trabalho? (Demanda: Trendy Skills)",
  "Hora do Aumento! Seu chefe lhe deu 6 meses para aprender uma nova linguagem de programação (Salário)",
  "Dia dos velhinhos quem nasceu primeiro? (Lançamento: Original)",
  "Git add, Git Commit, Git Push! (Lançamento: Mais Recente)", 
  "Seu dia de sorte, essa rodada vale o dobro (Descarte uma carta)",
  "Os últimos seram os primeiros, quem ta perdendo escolhe (Atributo escolhido pelo jogador com menos pontos)",
  "Bolsa Família (Salário: Mais baixo)",
  "Quem quer ser um milionario? (Salário)", 
  "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah! (Descarte 2 cartas)"
  
];

function generate() {
  let challenges = document.querySelectorAll('.challenge');
  for (var i = 0; i < challenges.length; i++) {
    challenges[i].innerText = desafios[Math.floor(Math.random() * desafios.length)];
  }
}

window.onload = function() {
  generate();
  document.querySelector('button').onclick = generate;
}
