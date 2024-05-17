# ![Mago](img/mago-64px.png) Lab - Variáveis

Seu objetivo neste lab deve ser:

- Dar bons nomes às variáveis que você criar
- Escolher o tipo correto para cada variável
- Respeitar as regras de sintaxe do Javascript

## 1 - valores separados por vírgula (CSV)

Com base no código abaixo, altere o programa para que ele imprima no console apenas uma linha com os valores de `nome`, `email`, `idade` e `anoDeNascimento` separados por vírgula.

Ex:

```
Gustavo,grz@oooi.xyz,45,1978
```

Programa base:

```js
const ano = 2023
const nome = 'Gustavo'
const idade =  45
const email = 'grz@oooi.xyz'

const anoDeNascimento = ano - idade

console.log(`Ano de nascimento: ${anoDeNascimento}`)
```

## 2 - um registro de estudante:

Escreva um novo programa. Nele você vai:

1. Criar uma variável e atribuir a ela seu primeiro nome
1. Criar uma variável e atribuir a ela seu sobrenome
1. Criar uma variável e atribuir a ela sua idade
1. Imprimir o seu nome, sobrenomee idade no console separando cada um desses dados por uma vírgula.

## 3 - Cálculo da distância percorrida

O programa abaixo calcula a distância percorrida por um objeto com velocidade constante em um tempo determinado. O resultado é guardado na variável `d` (de *distância*).

```js
/*
d = distância
v = velocidade
t = tempo
*/

let v = 900
let t = 11
let d = v * t

```

Faça as alterações abaixo com base nesse programa.

Tarefas:

1. Altere o programa para que ele escreva no console a distância que foi calculada.
1. Imprima também qual a velocidade e tempo que foram usados para o cálculo.
1. Altere o programa para que ele calcule e escreva no console o valor de 2 distâncias percorridas:
    - distância 1 - para `v = 900` e `t = 11`
    - distância 2 - para `v = 500` e `t = 8`

## 4 - Cálculo da média final de um estudante

Escreva um programa que:

1. calcule a média de 3 notas
1. imprima no console o resultado final

- Cada nota deve ser guardada em uma variável.
- As notas podem ter valor decimal
- A média final deve ser guardada em um variável chamada `media` antes de ser escrita no console

## 5 - Listagem de notas e média final (CSV)

Altere o programa 4 para que ele imprima no console os valores de cada uma das notas e também a média final, separados por vírgula.

O formato da saída é o seguinte

```
nota1,nota2,nota3,media
```
