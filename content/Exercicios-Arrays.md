# Exercícios com Arrays

## Exercício 0

Escreva um programa que execute as seguintes operações em sequência:

1. Criar um array com os valores: 1, 2, 3, 4, 5 e 6.
1. Imprir o array
1. Imprir o tamanho do array -- `array.length`
1. Adicionar o número 7
1. Imprimir o array
1. Pesquisar o índice dos números 4 e 5 e remover esses 2 elementos do array -- `array.splice(indice, 1)`
1. Imprimir o array
1. Imprimir o novo tamanho do array

## Exercício 1

Escreva um programa que escreva no console quantos emails existem no arquivo `emails.json`.

## Exercício 2

Imprima no console a lista completa dos emails que estão em `emails.json` -- use o método `forEach()`

## Exercício 3

Imprima todos os emails de `emails.json` porém cercados por '<' e '>'. Exemplo: \<ljohns@witting.net\>

## Exercício 4

Imprima todos os emails de `emails.json` cercados por '<' e '>' e convertidos para maiúsculas.

## Exercício 5

Corrija o programa abaixo e diga o que ele faz.

```js
const emails = Require('./emails.json')

emails.forEach( (email) -> {
    const tamanho = email.lenght
    console.info('(${tamanho}) ${email}')
})
```

## Exercício 6

### Introdução

Vamos ver duas funções novas. Você vai precisar usar elas para resolver o exercício.

1. O programa abaixo usa a função `JSON.stringify()`. Ela recebe um objeto Javascript e converte para uma string em formato JSON.

```js
const nomes = ['André','Julia','Aline','Marcelo','João','Leandro']

const nomesJSON = JSON.stringify(nomes)

console.log(nomesJSON)
```

2. O programa abaixo usa a função `writeFileSync()` para escrever uma string em um arquivo em disco.
    
    Essa função está em um pacote do `node` chamado `fs` (File System)
```js
const fs = require('fs')

const conteudo = "Oi, oi, oi!!!"
const nomeDoArquivo = "arquivo.txt"

fs.writeFileSync(nomeDoArquivo, conteudo)
```

### Tarefa do exercício 6

1. Teste os dois programas de exemplo acima para ver o resultado deles e entender o que eles fazem
1. Escreva um novo programa que cria um array com nomes a sua escolha (cerca 10 nomes) e grava ele em um arquivo chamado `nomes.json` em formato JSON.

## Exercício 7

O programa abaixo:

1. Carrega um array de nomes do arquivo `nomes.json`. 
1. Adiciona um nome ao array
1. Grava o arquivo `nomes.json` novamente, com os novos dados do array

```js
const nomes = require('./nomes.json')
const fs = require('fs')

nomes.push('Helena')

fs.writeFileSync('nomes.json', JSON.stringify(nomes))
```

### Tarefa do exercício: 
Escreva um novo programa que retire do arquivo `nomes.json` o último nome do array de nomes.

## Exercício 8

Escreva um programa que retire o primeiro nome que está no array de `nomes.json`.

## Exercício 9

Escreva uma função chamada `existeEmail()` que recebe uma string contendo um email e que retorna `true` ou `false` dizendo se o email está ou não no arquivo `emails.json`.

Sua função deve passar no trecho de programa de teste abaixo:

```js
console.log(existeEmail('paolo75@dach.com'))
console.log(existeEmail('fl.pacow@friesen.info'))
```

A saída no console deve ser:

```bash
true
false
```

## Exercício 10

Escreva uma função chamada `tldNet()` (tld = Top Level Domain) que recebe uma string contendo um endereço de email (formato `nome@domínio`) e que retorna `true` caso o domínio termine em `.net` e `false` caso não termine.

Teste sua função com o trecho abaixo:

```js
console.log(tldNet('paolo75@dach.net'))
console.log(tldNet('fl.pacow@friesen.info'))
```

A saída deve ser:

```bash
true
false
```
## Exercício 11

O programa abaixo usa a função `tldNet()`.

Este programa itera sobre o array de `emails.json`, pegando email por email, e imprimindo no console cada email que termine em `.net` (aqueles para os quais `tldNet()` retorna `true`).

```js
const emails = require('./emails.json')

/*
Aqui deve vir o código da função tldNet(). Não coloquei para não dar a resposta do exercício anterior ;)
*/

emails.forEach( email => 
    tldNet(email) ? console.log(email) : undefined
)

```

Copie e rode programa para entendê-lo bem.

### Tarefa do exercício 11

Escreva um programa que liste todos os emails de `emails.json` iniciados pela letra `a`.

## Exercício 12

Escreva um programa que liste todos os emails de `emails.json` porém escrevendo entre colchetes `[]` aqueles terminados em `.org`.

## Exercício 13

Liste todos os números pares de `numeros.json`.

## Exercício 14

O arquivo `emails.json` tem dados inconsistentes. Alguns emails não tem `@` e por isso são inválidos.

Escreva um programa que liste todos os emails inválidos do arquivo `emails.json` (os que não tem `@`).

## Exercício 15

Escreva um programa que liste todos os telefones DDD 51 do arquivo `telefones.json`