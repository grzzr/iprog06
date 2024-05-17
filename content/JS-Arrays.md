[Índice](README.md)

# Arrays

Array é uma lista de valores.

Usamos colchetes para escrever um array. Os valores vão entre os colchetes, separados por virgula e podem ser qualquer valor que o Javascript aceite: strings, numeros, booleanos e qualquer objeto e até mesmo outros arrays.

Exemplo:

```js 
const nomes = ['André','Julia','Aline','Marcelo','João','Leandro']
```

Damos nomes a arrays como damos nomes a outros valores como números, strings e funções.

## Acesso por índice

Cada item no array está associado ao número de sua posição, chamado de índice

```
['André','Julia','Aline','Marcelo','João','Leandro']
    0       1       2        3        4       5
```



Podemos acessar os valores que estão no array usando o número do índice.

```js
// Acessamos o valor que está na posição 0
let umNome = nomes[0]

// A linha abaixo imprime 'André'
console.log(umNome)
```

Podemos alterar o valor que está em uma determinada posição do array se soubermos seu índice.

```js
// Mudamos o valor que está na posição 1
nomes[1] = 'Natália'

// Atribuimos o valor da posição 1 a umNome
umNome = nomes[1]

// A linha abaixo imprime 'Natália'
console.log(umNome)
```

## Arrays como valores

Arrays podem ser usados em qualquer lugar onde usaríamos outro valor no Javascript. Por exemplo, para atribuí-los a uma variável ou como parâmetros para funções.

Por exemplo, esta é uma função que mostra o primeiro valor de um array que ela recebe como parâmetro.

```js
const mostraPrimeiro = function(umaLista) {
    console.log(umaLista[0])
}
```

Se definirmos um array qualquer, podemos pedir para a função mostrar o primeiro valor do array.

Para isso passamos o array como parâmetro para a função e, no corpo dela, a função acessa os valores do array.

```js
const frutas = ['amora', 'abacaxi', 'uva']


mostraPrimeiro(frutas)
```

O resultado deve ser...

```
amora
```

...impresso no console

## Métodos úteis

Existem muitos métodos úteis prontos para usar com arrays

### array.includes(valor)

Responde se o array inclui ou não o valor - retorna `true` ou `false` 

### array.indexOf(valor)

Retorna o número do índice do valor dentro do array - retorn -1 caso não encontre

### array.reverse()

Inverte a ordem dos elementos do array

### array.join(separador)

Retorna uma string contendo a concatenação de todos os elementos do array. Opcionalmente podemos passar como parâmetro o caracterer que será usado como separados dos ítens. Por exemplo, uma vírgula `array.join(',')` retornará uma string com todos os elementos separados por vírgula.

### array.push(valor)

Adiciona valor na última posição do array

### array.pop()

Retorna o valor que ocupa a última posição no array e o remove

### array.shift()

Retorna o valor que está na primeira posição do array e o remove

## Iterando sobre um Array

Iterar sobre um array é percorrer o array inteiro, passando elemento por elemento. Normalmente executamos alguma operação com cada elemento

A operação que executamos costuma ser definida em uma função. Essa função deve estar pronta para receber um elemento do array de cada vez e executar uma operação usando esse elemento.


### array.forEach(função)

Um método usado para percorrer o array é o `.forEach()`.

`forEach()` recebe como parâmetro uma função e passa elemento por elemento do array, chamando a função uma vez para cada elemento. É o próprio `.forEach()` passa o valor do elemento correto para a função.

No exemplo abaixo temos uma array de nomes e uma função que recebe uma string.

```js
const nomes = ['André','Julia','Aline','Marcelo','João','Leandro']

const dizOi = function (nome) {
    console.log(`Oi, ${nome}`)
}

nomes.forEach(dizOi)
```

Passamos a função `dizOi()` como parâmetro para o `forEach()`. Repare como não usamos parânteses após o nome da função.

> `Atenção` Se colocássemos parênteses após o nome da função ela seria executada e seu valor de retorno é que seria passado como parâmetro para o `forEach()`

[Índice](README.md)