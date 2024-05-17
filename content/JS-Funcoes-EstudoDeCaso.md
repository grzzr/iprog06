[Índice](README.md)

## Estudo de caso: Baby Shark

Considere o programa abaixo, que imprime na tela a letra da música do Baby Shark.

```js
bebeTubarao = 
`
Bebê tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão!

Mamãe tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão!

Papai tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão!

Vovó tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão!

Vovô tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão, doo doo doo doo doo doo
Tubarão!

Vou caçar, doo doo doo doo doo doo
Vou caçar, doo doo doo doo doo doo
Vou caçar, doo doo doo doo doo doo
Vou caçar!

Foge, foge, doo doo doo doo doo doo
Foge, foge, doo doo doo doo doo doo
Foge, foge, doo doo doo doo doo doo
Foge, foge!

Sãos e salvos, doo doo doo doo doo doo
Sãos e salvos, doo doo doo doo doo doo
Sãos e salvos, doo doo doo doo doo doo
Sãos e salvos!

É o fim, doo doo doo doo doo doo
É o fim, doo doo doo doo doo doo
É o fim, doo doo doo doo doo doo
É o fim!`

console.log(bebeTubarao)
```

Podemos notar que há uma regra para formar cada estrofe.

1. dizemos qual é a frase que inicia cada sentença
2. acrescentamos `'doo doo doo doo doo doo'` ao final da frase e cantamos o resultado (a sentença) 3 vezes
3. a sentença final é a frase inicial acrescida de `'!'`

Esse é um `algorítmo` para formar uma estrofe do `Baby Shark`.

Vamos reescrever o programa usando esse algorítmo.

```js
bebeTubarao = function(frase) {
    return (
        (frase + ' doo doo doo doo doo doo\n').repeat(3)
        +frase + '!\n\n'
    )
}
    
const estrofe1 = bebeTubarao('Bebê tubarão')
const estrofe2 = bebeTubarao('Mamãe tubarão')
const estrofe3 = bebeTubarao('Papai tubarão')
const estrofe4 = bebeTubarao('Vovô tubarão')
const estrofe5 = bebeTubarao('Vovó tubarão')
const estrofe6 = bebeTubarao('Vou caçar')
const estrofe7 = bebeTubarao('Foge, foge')
const estrofe8 = bebeTubarao('Sãos e salvos')
const estrofe9 = bebeTubarao('É o fim')

console.log(estrofe1)
console.log(estrofe2)
console.log(estrofe3)
console.log(estrofe4)
console.log(estrofe5)
console.log(estrofe6)
console.log(estrofe7)
console.log(estrofe8)
console.log(estrofe9)
```

## ![Mago](img/mago-64px.png) O que aconteceu aqui!?
Nesse programa usamos uma `Função` para **abstrair a operação** de criar uma estrofe do 'Baby Shark'.

```js
babyShark = function(frase) {
    return (
        (frase + ' doo doo doo doo doo doo\n').repeat(3)
        +frase + '!\n\n'
    )
}
```

No código acima:

- Definimos a função usando a palavra `function` seguida de parênteses
- entre os parênteses `()` declaramos uma variável que receberá o argumento da função (informado por quem chamar a função)
- Entre as chaves '`{` `}`' escrevemos o `corpo da função`, que é o código que será executado quando alguém `chamar a função`.
- `return` indica qual é o resultado da função, ou seja, o que ela retorna para quem chamou ela

Depois, nós usamos a função.

Para usar uma função usamos seu nome seguido de parênteses e passamos os parâmetros necessários, caso existam.

No exemplo, chamamos a função 9 vezes. 

```js
const estrofe1 = bebeTubarao('Bebê tubarão')
const estrofe2 = bebeTubarao('Mamãe tubarão')
const estrofe3 = bebeTubarao('Papai tubarão')

// ...
```

A cada chamada de função:

- passamos como parâmetro uma frase inicial diferente, que caracteriza a estrofe
- a função pegou essa frase e usou ela para gerar a estrofe, segundo o padrão
- ao final dessa operação, a função retornou para nós a string com a estrofe "customizada"
- pegamos o retorno da função demos a ele um nome de variável(estrofe1, estrofe2...) e utilizamos essa variável no final do programa para imprimir na tela a estrofe (usando `console.log()`)

```js
console.log(estrofe1)
console.log(estrofe2)
console.log(estrofe3)

// ...
```


## Composição de funções

Podemos reescrever o programa para simplificá-lo mais.

Note que só estamos usando as variáveis `estrofe1`, `estrofe2`... para passar o resultado da função `bebeTubarao()` para a função `console.log()`.

Podemos fazer isso diretamente, sem usar as variáveis.

Aqui passamos o resultado de `bebeTubarao()` diretamente para `console.log()`. 

```js
bebeTubarao = function(frase) {
    return (
        (frase + ' doo doo doo doo doo doo\n').repeat(3)
        +frase + '!\n\n'
    )
}
    
console.log(bebeTubarao('Bebê tubarão'))
console.log(bebeTubarao('Mamãe tubarão'))
console.log(bebeTubarao('Papai tubarão'))
console.log(bebeTubarao('Vovô tubarão'))
console.log(bebeTubarao('Vovó tubarão'))
console.log(bebeTubarao('Vou caçar'))
console.log(bebeTubarao('Foge, foge'))
console.log(bebeTubarao('Sãos e salvos'))
console.log(bebeTubarao('É o fim'))
```

## Refatoração

Refatorar é `reorganizar os fatores de um programa`, ou seja, as partes que compõe o programa.

Refatorações acontecem quando mudamos de ideia sobre o modo como abstraímos alguma operação ou sobre como estamos chamando uma variável, função...

Durante uma refatoração escrevemos e reescrevemos código para adequar o programa à nova ideia.

Vamos pensar melhor no que a função `bebeTubarao()` está fazendo. Na verdade, ela gera apenas uma estrofe da música `bebê tubarão` e não a letra inteira. Então, um melhor nome para ela seria `estrofe()` e não `bebeTubarao()`.

Uma função `bebeTubarao()` deveria gera a letra inteira da música e não só uma das estrofes. Então vamos reescrever o programa para:

- mudar o nome da função `bebeTubarao()` para `estrofe()`
- criar uma nova função `bebeTubarao()` que gera a letra inteira da música

Refatorando o código ele poderia ficar assim:

```js
estrofe = function(frase) {
    return (
        (frase + ' doo doo doo doo doo doo\n').repeat(3)
        +frase + '!\n\n'
    )
}
    
bebeTubarao = function() {
    return (
    estrofe('Bebê tubarão')
    + estrofe('Mamãe tubarão')    
    + estrofe('Papai tubarão')
    + estrofe('Vovô tubarão')
    + estrofe('Vovó tubarão')
    + estrofe('Vou caçar')
    + estrofe('Foge, foge')
    + estrofe('Sãos e salvos')
    + estrofe('É o fim')
    )
}

const letraDaMusica = bebeTubarao()

console.log(letraDaMusica)

```

Nessa nova versão o código do programa representa melhor a forma abstrata como estamos concebendo a formação da letra do 'Bebê Tubarão'. 

Agora o programa está dizendo mais claramente que 'Bebê Tubarão' retorna a `letraDaMusica` e que ela é composta pela `estrofe('Bebê Tubarão')` + a `estrofe('Papai Tubarão')` + a `estrofe(...)...`

[Índice](README.md)