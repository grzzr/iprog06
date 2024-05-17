[Índice](README.md)

# Execícios - laços/loops

Estes exercícios usam o pacote `readline-sync`. O código para importar o pacote foi omitido dos exemplos por brevidade.

## Instruções para começar o trabalho
Para fazer os exercícios você precisa:

1. criar um diretório
2. nesse diretório, instalar o `readline-sync` usando o `npm`

  ```sh
  npm install readline-sync

  ```

3. em cada um de seus programas, incluir no começo deles a linha:

  ```js
  const rl = require('readline-sync');
  ```

## Interpretação de código

1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    ```js
    let valor = 0
    for(let i = 0; i < 5; i++) {
    valor += i
    }
    console.log(valor)
    ```

1. Leia o código e responda:
    - O que vai ser impresso no console?

    - Se eu quisesse acessar o índice de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

    ```js
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
    if (numero > 18) {
            console.log(numero)
        }
    }
    ```
1. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    ```js
    const quantidadeTotal = Number(
        rl.question("Digite a quantidade de linhas: ")
        );
    
    let quantidadeAtual = 0;
    
    while(quantidadeAtual < quantidadeTotal) {
    
        let linha = "";
    
        for(let asteriscos = 0;
            asteriscos < quantidadeAtual + 1;
            asteriscos++) {
            linha += "*";
        }
    
        console.log(linha);

        quantidadeAtual++;
    }
    ```

## Escrita de código

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

    - a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    - b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.

        > Para resolver a parte `b` você deve fazer o pedido (ex. `rl.question('Qual o nome do seu pet? ')`) dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, o loop vai rodar 4 vezes para que ele consiga inserir 4 nomes, um a cada vez.

    - c) Por fim, imprima o array com os nomes dos bichinhos no console

1. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

    - a) Escreva um programa que imprime cada um dos valores do array original.
    - b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
    - c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
    - d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índice `i` é: `numero`". Depois, imprima este novo array.
    - e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
        > Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.
    - Exemplo de saídas esperadas:
    ```js
    // Este array será usado para exemplificar as respostas de todos os itens
    const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    // Resposta item a.
    80
    30
    130
    40
    60
    21
    70
    120
    90
    103
    110
    55

    // Resposta item b.
    8
    3 
    13
    4
    6
    2.1
    7 
    12
    9
    10.3
    11 
    5.5

    // Resposta item c.
    [80, 30, 130, 40, 60, 70, 120, 90, 110] 

    // Resposta item d.
    [ 'O elemento do índex 0 é 80',
    'O elemento do índice 1 é 30',
    'O elemento do índice 2 é 130',
    'O elemento do índice 3 é 40',
    'O elemento do índice 4 é 60',
    'O elemento do índice 5 é 21',
    'O elemento do índice 6 é 70',
    'O elemento do índice 7 é 120',
    'O elemento do índice 8 é 90',
    'O elemento do índice 9 é 103',
    'O elemento do índice 10 é 110',
    'O elemento do índice 11 é 55' ]

    // Resposta e.
    "O maior número é 130 e o menor é 21"
    ```

[Índice](README.md)