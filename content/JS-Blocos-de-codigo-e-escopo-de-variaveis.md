[Índice](README.md)

# ![Robô](img/robof-64px.png) Blocos de código e escopo de variáveis

Em Javascript um `bloco` é uma declaração escrita entre chaves `{ }` que tem por objetivo agrupar linhas de código.

Formato:

```js
{
    linha 1;
    linha 2;
    linha 3;
    .
    .
    .
}
```

Blocos servem para manipularmos em conjunto várias linhas de código.

Por exemplo, para:
- criar trechos de código que serão executados em `loop`
trechos de código que serão `executados condicionalmente` - apenas se uma certa condição for satisfeita
- declaração do `corpo de uma função`

## ![Maguinho](img/mago-64px.png) Visibilidade (escopo)

Blocos alteram a `visibilidade` das variáveis no código.

> `escopo` vem do grego, *skopeo* (procurar) e do latim, *scopere* (ver). É a mesma raíz de palavras como `telescopio`.

Exemplo 1:

```js
let x = 10;

{
   let x = 20;
   console.log(`x dentro do bloco = ${x}`);
}

console.log(`x fora do bloco = ${x}`);
```

Nesse programa a variável `x` **não é a mesma** fora e dentro do bloco. São duas declarações de duas variáveis que tem o mesmo nome.

Exemplo 2:

```js
let x = 10;

{
   let x = 20;
   console.log(`x dentro do bloco = ${x}`);
   let y = 30;
   console.log(`y dentro do bloco = ${y}`);
}

console.log(`x fora do bloco = ${x}`);
console.log(`y fora do bloco = ${y}`);
```

Esse segundo programa dá um erro. Na última linha tentamos usar `y` mas o interpretador diz que `y` não está definido. 

Isso aconteceu porque `y` foi definido dentro do bloco e os nomes que são definidos dentro de um bloco não são visíveis fora do bloco.

Exemplo 3:

```js
let x = 10;
let y;

{
   let x = 20;
   console.log(`x dentro do bloco = ${x}`);
   y = 30;
   console.log(`y dentro do bloco = ${y}`);
}

console.log(`x fora do bloco = ${x}`);
console.log(`y fora do bloco = ${y}`);
```

Esse programa agora funciona porque `y` foi declarada fora do bloco. A variável agora está no escopo de todo o programa, inclusive no scopo do bloco.

Repare que, dentro do bloco, `y` não foi declarada novamente (não usamos `let`, como fizemos com `x`). Por isso, a variável `y` de dentro do bloco `é a mesma que` a variável `y` de fora do bloco. É por isso que, dentro do bloco, quando mudamos seu valor para `30`, o valor continuou sendo `30` fora do bloco, quando imprimimos `y`.

[Índice](README.md)