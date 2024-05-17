[Índice](README.md)

# Exercícios - Strings e Arrays

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

1. Diga quais mensagens serão escritas na tela

    ```js
    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log('f. ', valor)
    ```
1. No código abaixo, qual será o valor impresso no console se a entrada do usuário for: `"Socorram-me! Subi no ônibus em Marrocos."`?

    ```js
    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    ```

## Escrita de código

1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Cada resposta deve ser guardada, respectivamente, em uma variável chamada `nomeDoUsuario` e `emailDoUsuario`. Em seguida, Imprima no console a seguinte mensagem, substituindo o valor das variáveis onde for apropriado:

    ```
    O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
    ```

1. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    - Imprima no console o array completo
    - Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    - Pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.

1. Faça um programa que:
    - Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    - Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    - Imprima o array no console
    - Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
    - Remova da lista o item de índice que o usuário escolheu.
    - Imprima o array no console
💡

    Para remover um item de um array, você pode utilizar a função splice() (consulte os [slides](slides/aula05-strings-e-arrays.pdf) para ver exemplos).

1. Escreva um programa que recebe pelo teclado uma frase e retorna um array onde cada elemento é uma das palavras da frase, ignorando os espaços.

    > Dica: Existe uma função que cria um array a partir de uma string, onde cada elemento do array criado é uma palavra da string. Procure nos slides ou na internet qual é ela.

1. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que ache o índice da palavra Abacaxi e imprima tanto o índice quanto o tamanho do array. 

[Índice](README.md)