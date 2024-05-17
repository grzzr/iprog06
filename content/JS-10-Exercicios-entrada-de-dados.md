[Índice](README.md)

# Exercícios - Entrada de dados

Nestes exercícios você vai alterar os programas que escreveu no [Lab - Variáveis (JS-08)](JS-08-Lab-Variaveis.md) para que eles aceitem entradas de dados pelo teclado.

O código abaixo, por exemplo, usa valores fixos, que só podem ser alterados se modificarmos o progra e rodarmos ele de novo.

```js
const ano = 2023
const nome = 'Gustavo'
const idade =  45
const email = 'grz@oooi.xyz'

const anoDeNascimento = ano - idade

console.log(`Ano de nascimento: ${anoDeNascimento}`)
```

Podemos alterá-lo para que ele receba esses valores pelo teclado, usando a função `question` do pacote `readline-sync`.

O programa fica assim:

```js
const rl = require('readline-sync');

const ano = rl.question('Ano: ');
const nome = rl.question('Nome: ');
const idade =  rl.question('Idade: ');
const email = rl.question('E-mail: ');

/*
    question() retorna uma String.

    Por isso precisamos converter
    ano e idade
    para um valor numerérico, para
    podermos fazer operações
    matemáticas com eles
    Para isso usamos Number()
*/
const anoDeNascimento = Number(ano) - Number(idade)

console.log(`Ano de nascimento: ${anoDeNascimento}`)
```

## Exercícios

1. Altere o programa que você fez na tarefa 1 do [Lab - Variáveis](JS-08-Lab-Variaveis.md) para que ele receba `ano`, `nome`, `idade` e `email` pelo teclado e imprima no console os valores em formato CSV.

1. Altere o programa 2 do [Lab - Variáveis](JS-08-Lab-Variaveis.md) (registro de estudante) para que ele receba `nome`, `sobrenome` e `idade` pelo teclado.

1. Altere o programa 3 do [Lab - Variáveis](JS-08-Lab-Variaveis.md) (distância percorrida) para que ele receba `velocidade` e `tempo` pelo teclado.

1. Altere o programa 4 do [Lab - Variáveis](JS-08-Lab-Variaveis.md) (cálculo da média) para ele receba as 3 notas pelo teclado

[Índice](README.md)