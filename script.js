// 1. Mapeamento dos elementos do HTML para o JavaScript
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// 2. Lista de objetos contendo as perguntas e respostas
const perguntas = [
{
enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat de Inteligência Artificial. Qual o seu primeiro pensamento?",
alternativas: [
{
texto: "Isso é assustador!",
afirmacao: "No início, você teve receio das transformações promovidas pela IA."
},
{
texto: "Isso é incrível!",
afirmacao: "Você ficou entusiasmado com as possibilidades da IA desde o primeiro instante."
}
]
},
{
enunciado: "Sua professora decide fazer uma aula prática sobre como a IA pode ajudar nos estudos. Como você age?",
alternativas: [
{
texto: "Utiliza ferramentas de IA para gerar resumos e organizar ideias.",
afirmacao: "Aprendeu a usar a tecnologia como uma aliada para otimizar suas tarefas diárias."
},
{
texto: "Prefere fazer a pesquisa inteiramente sem o auxílio de IA.",
afirmacao: "Optou por manter métodos tradicionais para garantir a originalidade do trabalho."
}
]
},
{
enunciado: "Ao final da aula, a turma precisa debater o futuro da automação no trabalho. O que você defende?",
alternativas: [
{
texto: "Defende que a IA criará novas profissões e oportunidades.",
afirmacao: "Passou a enxergar a IA como uma ferramenta de evolução e inovação."
},
{
texto: "Defende que devemos limitar o uso da IA para proteger os empregos atuais.",
afirmacao: "Passou a defender a regulamentação rigorosa e o cuidado com os impactos sociais."
}
]
}
];

// 3. Variáveis de controle do estado do jogo
let posicaoAtual = 0;
let perguntaAtual;
let historiaFinal = "";

// 4. Função para exibir a pergunta atual na tela
function mostraPergunta() {
if (posicaoAtual >= perguntas.length) {
exibeResultado();
return;
}
perguntaAtual = perguntas[posicaoAtual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

// 5. Função para criar e desenhar os botões das escolhas
function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativa = document.createElement("button");
botaoAlternativa.textContent = alternativa.texto;
// Adiciona evento de clique a cada botão
botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativa);
}
}

// 6. Função para processar a escolha feita pelo usuário
function respostaSelecionada(opcaoSelecionada) {
historiaFinal += opcaoSelecionada.afirmacao + " ";
posicaoAtual++;
mostraPergunta();
}

// 7. Função de conclusão (Condição de parada)
function exibeResultado() {
caixaPerguntas.textContent = "Fim da sua jornada!";
caixaAlternativas.textContent = "";
textoResultado.textContent = historiaFinal;
}

// Inicia a primeira pergunta quando a página carrega
mostraPergunta();
