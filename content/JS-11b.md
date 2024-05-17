[Índice](README.md)

# Operadores lógicos

Operadores lógicos são usados para escrever expressões que envolvem `operações com valores booleanos`. 

Qualquer valor em javascript pode ser usado com um operador lógico, não apenas valores `true` ou `false`. Isso porque todos os valores podem ser convertidos em um valor booleano de modo a poderem ser usados com um operador lógico.


## Operador `||` - OU

O operador `OU` avalia os operandos da esquerda para a direita. Cada operando é avaliado e convertido para Booleano. O primeiro operando que resultar em `true` tem **seu valor original** retornado pelo `||`. Caso todos os operandos sejam `false`, o valor do último operando é retornado.

> `||` retorna o valor do primeiro operando que resultar em `true` ou o valor do último operando caso todos sejam `false`.

```js
x>0 || x<10
/*o resultado é `true` se o valor de x é maior que 0 ou menor que 10 - lendo da esquerda para a direita, o que for encontrado primeiro.
*/
```

```js
let nome;
nome || 0 || 'prof.'
/* O resultado é false, porque:

- o valor de ´nome´ é ´undefined´ e a equivalência de ´undefined´ é ´false´
- 0 é equivalente a ´false´
- 'prof.', assim como qualquer string não vazia, é equivalente a ´true´
*/

nome || 1 || 'prof.'

/* O resultado é true, porque:

- 1 é equivalente a ´true´
Neste caso, o valor ´true´ retornado é este, não o valor ´true´ do operando seguinte (a string).

A avaliação dos operando é finalizada neste ponto.
*/

```

O primeiro operando que resultar em `true` tem **seu valor original** retornado pelo `||`.

```js
let nome;
0 || nome || 'prof.'

// 0 é ´false´
// nome é ´undefined´
// resultado é ´prof.´

nome = 'Gustavo'
0 || nome || 'prof.'

// 0 é false
// nome é uma string, que equivale a ´true´
// resultado é ´Gustavo´
// e o próximo operando não é avaliado
```

### Exemplo:

O programa abaixo recebe três strings pelo teclado e escolhe a primeira string não vazia como sendo o nome pelo qual o usuário será chamado. Caso todas sejam vazias, adota `anônimo` como padrão.

```js
const rl = require('readline-sync');

let nome = rl.question('Nome: ');
let sobrenome = rl.question('Sobrenome: ');
let apelido = rl.question('Apelido: ');

let usuario = nome || sobrenome || apelido || "anônimo";

console.log(`Olá, ${usuario}`);
```

Repare que `"anônimo"` é o valor padrão porque ele é o último a ser avaliado e porque seu valor sempre é ´true´, por isso sempre será retornado caso todos os anteriores sejam ´false´.

## Operador `&&` - E

O `&&` avalia os operandos da esquerda para a direita, convertendo cada operando em um valor booleano e retornando o valor original do primeiro operando que resultar em `false`. Se todos os operandos forem `true` o `&&` retorna o valor do último operando.

> `&&` retorna o primeiro valor que for `false` ou o último caso todos sejam `true`.

## Operador `!` - Não (negação lógica)

O `!` inverte o valor de verdade de uma expressão - ele ´nega´ a expressão.

```js
let nome;

!nome // resultado é ´true´

```

### Exemplo:

```js
const rl = require('readline-sync');

const nome = rl.question('Nome: ');

// se *não* for informado um nome, imprime ´nome é obrigatório´
!nome && console.log('nome é obrigatório');

// se *foi* informado um nome, imprime ´Oi,´ + nome + '!!'
!nome || console.log(`Oi, ${nome}!!`);

```

[Índice](README.md)