const faturamentoPorDia = [1000.0, 0, 2000, 500, 0, 5000];

/**
 * Filtra valor válido, neste caso vou tentar usar o filter do javascript
 * acredito que ele para isso pode ser melhor do que escrever um código maior
 * para isso
 */

const faturamentoValido = faturamentoPorDia.filter(valor => valor > 0);

/**
 * Por meio da biblioteca Math do javascript, podemos calcular os valores máximo e mínimo
 * dos valores válidos.
 */

const menValor = Math.min(...faturamentoValido);
const maxValor = Math.max(...faturamentoValido);

/**
 * Da mesma forma que o código acima, vou usar uma ferramenta do javascript chamado reduce
 * para calcular a media anual. Neste caso, o reduce nos ajudará na soma dos valores validos totais.
 * A variável "total" é um acumulador, ele armazena o valor da interação que o reduce faz e soma com o valor
 * da próxima. Neste caso, ele inicia com o valor 0. 
 * */ 

const medAnual = faturamentoValido.reduce((total, valor) => total + valor, 0);

/**
 * Podemos agora achar os dias que o faturamento foi acima da média anual 
 * novamente usando o filter.
 */

const diasAcimaDaMediaAnual = faturamentoValido.filter(valor => valor > medAnual).length;

console.log("Menor valor de faturamento: ", menValor);
console.log("Maior valor de faturamento: ", maxValor);
console.log("Número de dias acima da média anual: ", diasAcimaDaMediaAnual);

