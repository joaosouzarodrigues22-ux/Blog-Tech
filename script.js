// // Seleciona todos os elementos <button> da página e os guarda na constante "botoes" como uma lista
1 const botoes = document.querySelectorAll("button");
2 
3 // Passa por cada botão da lista (um por um) para aplicar as regras abaixo
4 botoes.forEach(function (botao) {
5 
6     // Cria uma variável interna para controlar se O BOTÃO ATUAL foi clicado ou não (começa como falso)
7     let curtiu = false;
8 
9     // Adiciona um "escutador" que aguarda o clique especificamente neste botão
10     botao.addEventListener("click", botaoClicado);
11 
12     // Define a função que roda toda vez que este botão específico recebe um clique
13     function botaoClicado() {
14         // Exibe uma mensagem no console do navegador apenas para testar se o clique funcionou
15         console.log("Fui clicado");
16 
17         // Procura e seleciona a tag <span> (o número do contador) que está dentro deste botão
18         let texto = botao.querySelector("span");
19 
20         // Se o usuário ainda não tiver clicado neste botão (curtiu é igual a false)
21         if (curtiu == false) {
22             texto.textContent++; // Soma +1 ao número atual do contador
23             curtiu = true;       // Muda o status para true (indicando que agora está "curtido")
24 
25         // Caso o usuário clique novamente (ou seja, curtiu já era true)
26         } else {
27             texto.textContent--; // Subtrai -1 do número do contador (desfaz a curtida)
28             curtiu = false;      // Volta o status para false (permitindo curtir de novo depois)
29         }
30     }
31 });
