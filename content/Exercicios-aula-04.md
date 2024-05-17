# Exercícios - Aula 03

Nestes exercícios vamos escrever programas em Javascript como os que fizemos na [Aula 01](JS-01.md).

## 1. Prepare um ambiente de trabalho

Precisamos preparar um ambiente de trabalho sempre que começamos um trabalho novo, seja um exercício, um programa simples ou um novo projeto de sistema.

Um ambiente de trabalho pode ser várias coisas:

- um diretório novo, vazio, onde colocaremos os arquivos que iremos criar
- uma estrutura de diretórios mais complexa, com vários subdiretórios
- um ou mais diretórios e também ferramentas de programação de uso específico para o novo trabalho que estamos iniciando
- tudo isso e ainda um ou mais arquivos contendo informações de documentação e configuração necessárias para começarmos um trabalho - normalmente isso é necessário para projetos que envolvem mais ferramentas e bibliotecas de código

Em qualquer caso, sempre criamos pelo menos um diretório, para fins de organização. Assim não misturamos os arquivos de um trabalho com outro.

### Tarefas

1. Se você ainda não criou um diretório com seu nome, crie agora. Esse será seu diretório de trabalho no curso. 

>Vamos usar o diretório `Documents` para nossos trabalhos, que é o padrão no Windows.
>
>Você precisa ter um diretório de trabalho para separar seus trabalhos dos trabalhos dos demais colegas que compartilham o computador com você.
>
2. No seu diretório de trabalho, crie um diretório chamado `aula03`, por exemplo. **Esse será seu ambiente de trabalho para estes exercícios**.
7. Siga as instruções sobre [Como abrir um diretório de trabalho no VSCodium](./VSCODIUM-01.abrir-diretorio.md) para começar a trabalhar no diretório `aula03`

## 2. Escreva um programa e rode ele na linha de comando

Você vai criar um arquivo novo e escrever nele o seguinte programa em Javascript:

```js
/* 
Este programa imprime um triângulo de asteriscos no console (terminal)
*/
console.log("*")
console.log("**")
console.log("***")
console.log("****")
console.log("*****")
```

Depois você vai rodar o programa usando o `node`. O resultado deve ser

```
*
**
***
****
*****
```

### Para rodar o programa usando o `node`

1. No **VSCode** tecle `ctrl`+`shift`+`"` para abrir um *Terminal*.
1. 
> No terminal execute:
>```bash
>$node triangulo.js
>``` 

3. Confira se o resultado foi o esperado.

7.  Se o resultado não foi o esperado:
- confira se você digitou tudo certinho
- corrija os erros que você encontrou
- rode o programa de novo

## 3. Crie uma nova versão de um programa

Vamos fazer uma alteração no código do programa anterior.

> Antes de alterar alguma coisa, vamos fazer uma cópida do arquivo do programa para não perdermos nosso trabalho.

### Tarefa - parte 1 - salvar uma versão do programa

1. Crie um diretório chamado `versoes´ dentro do seu diretório de trabalho.
> Lembrete: não use acentos nos nomes de diretório nem nos de arquivos.
2. Ainda em seu diretório de trabalho, copie o arquivo `triangulo.js` para dentro do diretório `versoes`.
3. Mude o nome do arquivo `triangulo.js` que está dentro do diretório `versoes` para `triangulo-0.0.1.js`
> Lembrete: no terminal, você pode usar o comando `mv` para mudar o nome do arquivo. Por exemplo: `mv triangulo.js triangulo-0.0.1.js`

### Tarefa - parte 2 - editar o programa

4. Usando o `VSCodium`, edite o programa `triangulo.js` para que a saída dele seja a seguinte:

```
   |>
   *
  ***
 *****
*******
I     I
I  O  I
I     I
=======
```

4. Salve o programa.
5. Abra um Terminal, caso esteja fechado
6. Rode o programa e confira se o resultado é o esperado.
7. Mude o nome do arquivo de `triangulo.js` para `castelo.js`
