[Índice](README.md)

# ![Robô](img/robof-64px.png) Funções em Javascript

Funções são blocos de código que podem ser executados quando chamados (também se diz, 'invocar' ou simplesmente rodar).

Funções servem para abstrair operações, organizar e reutilizar código.

Funções costumam estar associadas a um nome, mas não sempre.


## Criando uma função

No código abaixo:

1. criamos uma função
2. associamos ela ao nome `perfil`
3. chamamos a função usando o nome

```js
const perfil = function() {
    console.log('Nome: Gustavo')
    console.log('Email: gus@scrs.com.br')    
    console.log('Msg: Oi, oi, oi!!!')
}

perfil()

```

Note que o código da função só será executado quando chamarmos a função. No exemplo, chamamos a função na última linha do programa.

```js
perfil()
```

Todo o código anterior à chamada `perfil()` serviu apenas para **declarar a função**, ou seja, para criar a função **perfil()**.


### Parâmetros
Funções podem receber parâmetros.

```js
const perfil = function(msg) {
    console.log('Nome: Gustavo')
    console.log('Email: gus@scrs.com.br')    
    console.log(`Msg: ${msg}`)
}

perfil('Olá!')

```

`msg` entre os parênteses da função é uma declaração de variável.

O valor de `msg` será definido por quem chamar a função. Isso é o que fazemos na última linha do programa.

```js
perfil('Olá!')
```

A string `'Olá!'` é o valor que estamos passando para a função, que será associado ao nome `msg` pela função e estará disponível através dele para usarmos ele no corpo da função. Foi o que fizemos na última linha da função, em: 

```js
console.log(`Msg: ${msg}`)
```

Nessa linha, o valor de `msg` é a string `'Olá!'` que foi passada como parâmetro quando chamamos a função `perfil()`.

### Retorno da função

Normalmente funções retornam um resultado para quem as chamou. 

Até aqui, nos exemplos, nenhum resultado foi retornado. Existe uma diferença entre `resultado` e `efeito colateral`. 

- `resultado` é um valor retornado pela função
- `efeito colateral` é algo que a função causa no programa ou sistema e que tem por efeito alterar o estado do sistema (por exemplo, *mudar* o que aparece na tela, como quando usamos `console.log()`).

Para retornar um valor, usamos `return` dentro do bloco de código da função sequido do valor a ser retornado.

```js
const perfil = function(msg) {
    return (
         'Nome: Gustavo\n'
        +'Email: gus@scrs.com.br\n'
        +`Msg: ${msg}\n`
    )
}

console.log(perfil('Olá! Olá!'))
```

Nesse exemplo a função `retorna uma string` que é a concatenação de 3 strings seguidas de um `\n` (caracter que representa uma quebra de linha).

Note que na última linha, quando chamamos a função `console.log()`, desta vez estamos passando como parâmetro o `resultado da função perfil()`

## ![Mago](img/mago-64px.png) Abstraindo operações e reutilizando código

Podemos passar vários parâmetros para uma função. Vamos usar isso para deixar a função `perfil()` mais genérica, de modo que ela funciona para qualquer nome, email e mensagem.

```js
const perfil = function(nome, email, msg) {
    return (
         `Nome: ${nome}\n`
        +`Email: ${email}\n`
        +`Msg: ${msg}\n`
    )
}

console.log(perfil('Gustavo', 'gus@scrs.com.br','Olá! Olá!'))
console.log(perfil('Prof', 'profgus@scrs.com.br','Oi, turma!'))
console.log(perfil('Prof. G.', 'pgus@scrs.com.br','Oi!'))
```

Agora passamos `3 parâmetros` para a função `perfil()`. Com essas informações a função consegue escrever a ficha de perfil qualquer um e fica `fácil reutilizar o código` em outras situações em que o nome e email sejam diferentes. 

[Índice](README.md)