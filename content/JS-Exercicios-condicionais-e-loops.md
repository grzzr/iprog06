[Índice](README.md)

# Exercícios - condicionais e loops

1. Crie dois programas que escrevam seu nome no console 10 vezes. Um dos programas deve resolver o problema usando `while` e o outro usando `for`.

1. Leia o programa abaixo e, sem rodá-lo no computador, responda: 
    1. qual resultado será mostrado no console pelo programa
    1. qual o valor de `x` ao final da execução do programa    

    ```js
    let x = 4;

    if(x>2 && x<4) {
        console.log("X");
        x = 3;
    }

    if(x>2 || x<=4) {
        console.log("Y");
        x = 2;
    }

    if(x>=2 && x<=4) {
        console.log("Z")
        x = 1;
    }

    console.log("fim");
    ```

1. Faça um programa que:
    - peça ao usuário um número (`n`) entre 1 e 10
    - confira se `n` está mesmo entre 1 e 10
    - caso não esteja, o programa deve escrever no console `número inválido` e terminar sua execução.
    - caso `n` esteja no intevalo esperado, o programa agradeçe e encerra.

1. Escreva um programa que conte de 1 a 100 e que escreva no console o valor da contagem mas apenas quando a contagem estiver entre os valores 32 e 39.

1. Escreva um programa que:
    - conte de 1 a 1000 (usando variável contadora)
    - e que escreva `contando até 1000...` e, quando a contagem for `500`, escreva `cheguei na metade...`, e quando a contagem for maior que `990` escreva `chegando no final...`. Quando chegar ao final da contagem, o programa escreve `1000! Terminei.`

1. Crie um jogo de adivinhação de números. O programa deve ter uma variável `const segredo` que contém um número desconhecido pelo jogador. O programa tem um loop que: 
    - pede ao jogador que digite um número
    - testa se o número digitado é maior ou menor que o número secreto
    - se for maior, diz ao jogador `tente um número menor`
    - se for menor, diz ao jogador `tente um número maior`
    - depois, volta ao início do loop para pedir ao jogador um número novamente
    - o loop encerra quando o jogador acerta o número secreto
    - quando o loop encerra, o programa parabeniza o jogador

1. Faça um programa que peça um número (`n`) de 1 a 10 ao usuário; confira se `n` é válido (informando ao usuário caso não seja e, nesse caso, terminando a execução do programa). O programa deve imprimir um triângulo formado por `n` linhas de asteríscos - por exemplo, se `n=5` o programa imprime no console:
    ```
    *
    **
    ***
    ****
    *****
    ```

[Índice](README.md)