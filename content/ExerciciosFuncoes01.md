# Exercícios com funções

1. Escreva uma função que retorna sempre uma *string* que contém o seu nome completo. Chame ela de `nome()`

Para começar, a declaração da função é assim:

```js
nome = function() {
    // passo 1. Defina uma variável que contém o o seu nome compelto (uma string)
    // passo 2. retorne essa variável
}
```

Depois faça o teste:

> `Teste:` Após a definição da sua função, escreva a linha de código abaixo. Ela deve funcionar e imprimir o seu nome no console, tal como retornado pela função `nome()`.
>
> ```js
> console.log( nome() )
> ```

2. Escreva uma função que recebe uma string em um parâmetro chamado `nome` e que retorna esse `nome` convertido para maiúsculas (use `.toUpperCase()`)

```js
nomeMaiusculas = function(umNome) {
    // passo 1. converter umNome para maiúsculas 
    // passo 2. guardar o resultado da conversão em umaVariável (pode chamar ela de 'resultado')
    // passo 3. retornar o resultado usando 'return resultado'
}
```

Faça o teste:

> `Teste:` Após a definição da sua função, escreva a linha de código:
> ```js
> console.log(nomeMaiusculas('Miguel'))
> ```
> Ela deve funcionar e escrever no console o nome 'Miguel' convertido para maiúsculas. Assim: 'MIGUEL'.

