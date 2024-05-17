# Exercícios

## Apresentação

Escreva um programa que imprime um parágrafo com uma apresentação pessoal sua.

Exemplo:

```js
console.info('Oi, eu sou o Gustavo')
```

Ou...

```js
const apresentacao = 'Oi, eu sou o Gustavo'
console.log(apresentacao)
```

Ou...

```js
const apresentacao = `
Oi, eu sou o Gustavo e gosto de programação.
Estou no curso para aprender mais e poder
me preparar para estudar assuntos mais difíceis
e fazer programas mais complexos.
`

console.log(apresentacao)

```

## Ficha de cadastro de pessoa

Escreva um programa que imprime no console os dados abaixo.

```js
const nome = 'Adriano'
const email = 'adri@host.net'
const idade = 28
```

Use a função `console.info()``

Exemplos: 

```js
console.info(nome)
```

```js
console.info(`Nome: ${nome}`)
```

```js
console.info('Nome ' + nome)
```

```js
console.info('Nome', nome)
```

## Ficha de perfil da pessoa

Acrescente uma variável ao programa que você fez no exercício anterior que conterá um breve texto de apresentação de uma pessoa e imprima no console esse texto antes dos dados de perfil (nome, email, idade).

## Feliz aniversário

Escreva um programa que recebe do teclado (através do console) o nome do usuário e que, depois disso, deseja `Feliz aniversário!` a ele.

Para isso, você vai precisar usar o pacote `readline-sync` conforme explicado [aqui na seção 'Importando um pacote em um programa'](./JS-09.md).

> TLDR
> 
> 1. instale o pacote usando npm: `npm install readline-sync`
> 2. carregue o pacote no início do seu código: `const rl = require('realine-sync')`
> 3. use a função `question()` para fazer uma pergunta ao usuário e receber dela o que ele digitar no console como resposta: `const nome = rl.question('Qual seu nome? ')`
> 4. depois, é só usar a variável `nome` no seu programa onde for preciso

## Feliz aniversário muitas vezes

Modifique o programa `Feliz Aniversário`.

1. Depois de perguntar qual o nome do usuário, pergunte quantos anos ele está fazendo.
2. Imprima no console a mensagem 'Feliz aniversário' uma vez para cada ano de vida.

Exemplo, se o usuário está fazendo 30 anos, imprima 30 vezes `Feliz aniversário`. 

Use o método `repeat()` de `string` para isso. 

Exemplo:

```js
// Cria uma String que contém 20 vezes a String 'oi! '
// e depois imprime ela no console

console.log('oi! '.repeat(20))
```

## Ficha de cadastro personalizada

Modifique o programa `Ficha de cadastro` para que ele primeiro peça ao usuário seu `nome`, `email` e `idade` e depois imprima no console esses dados.

## Controle de idade

O progrma abaixo usa o operador condicional `? :` para selecionar um valor para `mensagem` em função do valor de verdade da expressão `idade >= 21`.

Se for `verdadeiro` que `idade >= 21` o operador retornará `Ok. Pode passar`.
Se for `falso` que `idade >= 21` o operador retornará `Vote quando tiver 21`.

```js
const idade = 20
const mensagem = idade>=21 ? 'Ok. Pode passar': 'Volte quando tiver 21'

console.info(mensagem)
```

Neste caso, a saída do programa deve ser...

```
Volte quando tiver 21
```

...porque `idade = 20` e 20 *não é* >= `21`.

### Tarefa

Modifique o programa para que ele receba o valor da idade pelo teclado.



## Parabéns personalizado

Observe a técnica utilizada abaixo para transformar em *variáveis* as mensagens retornadas pelo programa.

```js
let idade = 20
let msg1 = 'Ok. Pode passar'
let msg2 = 'Volte quando tiver 21'

const mensagem = idade>=21 ? msg1 : msg2

console.info(mensagem)
```

Os possíveis valores de `mensagem` foram atribuídos às variáveis `msg1` e `msg2`.

Dessa forma, é possível mudar o conteúdo da mensagem durante a execução do programa.

Exemplo: 

```js
let idade = 20
let msg1 = 'Ok. Pode passar'
let msg2 = 'Volte quando tiver 21'

let mensagem = idade>=21 ? msg1 : msg2

console.info(mensagem)

// Agora mudamos o valor...

msg2 = "Volte outra vez"
mensagem = idade>=21 ? msg1 : msg2
console.info(mensagem)

// A saída do programa muda
```

### Tarefa 1

Modifique o programa `Feliz aniversário` para que ele mostre uma mensagem de parabéns diferente dependendo da idade informada pelo usuário.

- Se a idade informada for 18, a mensagem será "Parabéns! Agora você já é maior!"
- Se a idade informada for diferente de 18, a mensagem será "Feliz aniversário!"

### Tarefa 2

Modifique o programa `Feliz aniversário` para que ele mostre uma mensagem de parabéns personalizada. 

O programa deve:

1. Perguntar qual a mensagem de `parabéns` para quem faz 18 anos
1. e qual a mensagem de `parabéns` para quem não faz 18
1. qual a idade da pessoa
1. imprimir no console a mensagem de parabéns personalizada
