[Índice](README.md)

# Padrões para loops

## ![Maguinho](img/mago-64px.png) Loop infinito

Para fazer um loop infinito podemos usar um bloco controlado por `while` ou `for`.

- `while`
    Para fazer o bloco executar infinitamente escrevemos uma condição que sempre retorna `true`.

    ```js
    while(1<2) {
        /*
        e aqui vai o código...
        */
    }
    ```

    Ou, simplesmente, colocamos `true` como valor a ser avaliado pelo `while`. Essa é a forma mais utilizada.

    ```js
    while(true) {
        // ...
    }
    ```

- `for`

    Uma forma compacta de criar um loop infinito com `for` é:

    ```js
    for(;;) {
        /*
        código vai aqui...
        */
    }
    ```
Loops infinitos não são usados necessariamente para escrever código que deve rodar infinitamente. Aliás, não estamos achando que, de verdade, o código vai ficar executando até o final dos tempos. A ideia é mais tipo "se nenhuma instrução do programa ou evento externo ocorrer, forçando a interrupção do loop (ou do programa todo) então o código continuará sendo executado". 

### Interrompendo um loop infinito

Um loop infinito pode ser interrompido ou, rompido, já que *loop* significa *laço* e laços são rompidos.

Para romper um loop usamos a instrução `break`. Por exemplo:

```js
i=0;
while(true) {
    i++;
    console.log(`valor de i=${i}`)
    if (i==10) {
        break
    }
}
console.log("fim do laço")
```

Quando o `break` é usado dentro de um laço, ele rompe o laço e o programa segue após o final do bloco do laço.


> `Flags`
>
> Note o uso da variável `i` nesse programa. Sua finalidade é servir de *indicação* para o programa de quando o loop deve ser interrompido. O programa constantemente consulta o valor dessa variável e, quando ela muda para um valor específico, algo acontece - no caso, este programa pára.
>
> Esse tipo de variável é chamada de `flag` (bandeira). A ideia é a de uma bandeira que, quando levantada, significa que algo importante mudou.

### Interrompendo loops aninhados

Se os loops estiverem aninhados e o break estiver em um laço interno, ele rompe o laço interno, que é o laço onde ele está. Para romper o laço externo é preciso outro break escrito no laço externo. Assim:

```js
i=0;
j=0;

while(true) {

    j++;
    console.log(`Valor de j=${j}`);

    if (j==3) {
        break;
    }

    while(true) {
        i++;
        console.log(`valor de i=${i}`);
        if (i==2) {
            break;
        }
    }
    console.log('fim do laço interno');
    // reiniciar i para entrar novamente
    // no laço interno
    i=0;
}
console.log('fim do laço externo');
```


## ![Robô](img/robof-64px.png)Variável contadora

Criamos uma variável contadora quando precisamos contar o número de ocorrências de um evento Normalmente ela vai começar com valor `0`. 

Para incrementar a variável, precisamos criar uma expressão lógica que retorne `true` quando ocorrer a situação que estamos contando.

Quando a expressão for `true`, incrementamos a variável, representando mais uma ocorrência da situação em questão.

Por exemplo, se a situação que estamos contando é `quantas vezes o usuário digitou o número 10?`

```js
nVezes = 0

repetir
    escrever "digite um número"
    ler numero
    se numero igual a 10
        nVezes = nVezes + 1   
```

Nesse exemplo a variável `nVezes` está contando o número de vezes que a condição `numero igual a 10` retornou `true`, pois o código que incrementa a variável `nVezes` só é executado sob essa condição

## ![Maguinho](img/mago-64px.png) Percorrer um array

Para percorrer um array usamos um loop controlado por uma variável contadora. A estratégia é acessar o array usando o valor dessa variável como índice. 

Se vamos acessar o array desde o início, a variável começa com valor 0. 

Depois, entramos em um loop que vai parar quando o valor da variável for igual ao comprimento do array (representando que estamos no último elemento do array e devemos parar de percorrê-lo).

Vamos incrementamos a variável de 1 em 1 (vamos contando de 1 em 1) a cada iteração do loop.

Dentro do loop acessamos o array usando a variável como índice, assim:

```js
variavel = 0
array = [a,b,c,d,e]
repetir até que variável = comprimento do array
    elemento = array[variavel]
    variavel = variavel + 1
    escrever "Elemento atual é: " + elemento
```

Percorrer um array com um loop `for` é muitíssimo comum. Tanto que no VSCode esse trecho de código já está pronto. Experimente digitar for e veja a caixa de ajuda que se abre. A segunda opção monta a seguinte armadura:

```js
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
```

Nesse exemplo, `array` é o array. Pode ser qualquer array.

O *pseudocódigo* anterior pode ser escrito em javascript assim:

```js
array = [a,b,c,d,e]

for (let variavel = 0; index < array.length; index++) {
    const elemento = array[variavel];
    console.log(`Elemento atual é: ${elemento}`)
}
```

Note que a inicialização da variável e também o incremento ocorrem na declaração do for.

## ![Robô](img/robof-64px.png) Somatório - variável acumuladora

Podemos usar um loop para somar uma série de valores. Para isso, a estratégia é usar uma `variável acumuladora` que nada mais é que uma variável usada exclusivamente para acumular os valores das somas parciais dos valores durante cada execução do loop.

```js
const valores[34,23,56,23,6,2,78,23]
let soma = 0;

for(i=0; i<valores.length; i++) {
    soma = soma + valores[i];
    console.log(`soma parcial = ${soma}`)
}

console.log(`Total = ${soma}`)

```

Durante a execução do loop o valor de `soma` é o valor parcial da soma. Ao final do loop o valor de `soma` contém a soma total.

[Índice](README.md)