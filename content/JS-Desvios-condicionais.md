[Índice](README.md)

# ![Robô](img/robof-64px.png) Desvios condicionais - if, if-else

Já vimos o operador condicional do Javascript (o único operador ternário da linguagem) que nos permite testar o valor de verdade de uma **condição** e retornar um valor **x** se a condição for verdadeira e um valor **y** se ela for falsa.

As estruturas sintáticas `if`, `if-else` e `switch-case` podem fazer o mesmo e muito mais.


> Nos exemplos abaixo vamos supor que existe um objeto `login` que contém os dados de login de um usuário de um sistema hipotético e que esse objeto tem um método chamado `valido()` que retorna `true` caso o login seja válido ou `false` caso contrário.

Exemplo de uso do `operador condicional`.

```js
const mensagem = login.valido() ? 'Olá!' : 'Quem é você?'

console.log(mensagem)
```

O mesmo pode ser escrito com `if`

```js
let mensagem = 'Quem é você'

if(login.valido()) {
    mensagem = `Olá!'
}

console.log(mensagem)
```

Ou pode ser escrito com `if-else`

```js
let mensagem

if(login.valido()) {
    mensagem = 'Olá!'
} else {
    mensagem = 'Quem é você?'
}

console.log(mensagem)
```

Podemos transformar esses trechos de código em funções para facilitar seu uso em um programa mais extenso.

- Usando `operador condicional`

    ```js
    function mensagemDeLogin(login) {
        return login.valido() ? 'Olá!' : 'Quem é você?'
    }

    console.log(mensagemLogin(umLogin))
    ```
- Usando `if`

    ```js
    function mensagemDeLogin(login) {
        if(login.valido()) {
            return 'Olá!'
        }
        return 'Quem é você?'
    }

    console.log(mensagemLogin(umLogin))
    ```

- Usando `if-else`
    ```js
    function mensagemDeLogin(login) {
        if(login.valido()) {
            return 'Olá!'
        } else {
            return 'Quem é você'
        }
    }
    
    console.log(mensagemLogin(umLogin))
    ```

Para esse tipo de `teste condicional` o operador condicional é mais conciso. Como esse tipo de teste é bastante comum, o operador condicional acaba sendo muito usado.

## ![Maguinho](img/mago-64px.png) Quando usar if, if-else

As estruturas `if` e `if-else` permitem o uso de blocos de código, enquanto o operador condicional `? :` só permite expressões.

Por isso, se o código que precisamos executar não é uma simples expressão ou um simples valor a ser retornado, se precisarmos executar várias linhas de código em função do valor de verdade que está sendo testado, então precisamos usar `if`, `if-else`, porque eles permitem o uso de blocos de código.

Por exemplo, vamos supor que a mensagem de login devesse ser atribuída ao próprio objeto `login` após o teste `login.valido()` e depois retornada. Essas seriam 2 operações e precisariam ser escritas em um bloco de código. Assim:

```js
function mensagemLogin(login) {
    if(login.valido()) {
        login.setMensagem('Olá!')
        return login.getMensagem()
    } else {
        login.setMensgem('Quem é você?')
        return login.getMensagem()
    }
}
```

[Índice](README.md)