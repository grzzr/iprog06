[Índice](README.md)

# ![Mago](img/mago-64px.png) Projeto - Lista de tarefas

Vamos fazer um programa que cria um arquivo CSV com uma lista de tarefas a fazer.

O programa roda em um loop. A cada iteração do loop o programa pede ao usuário que digite uma tarefa a fazer.

Após, o programa guarda a tarefa em um array.

O programa então pergunta se o usuário quer continuar inserindo tarefas. Se quiser, volta ao início do loop; se não quiser, salva as tarefas armazenadas no array em um arquivo de texto e depois termina o programa.

## O loop do programa

```js
const rl = require('readline-sync');
let continuar = 's';

while(continuar=='s') {
        continuar = rl.question('Continuar (s/n)? ');
}

console.log('Fim do programa');
```

## Inserindo uma tarefa.

Precisamos do array de tarefas.

```js
const rl = require('readline-sync');
//Array de tarefas. Inicialmente vazio.
const tarefas = [];

let continuar = 's';

while(continuar=='s') {
        continuar = rl.question('Continuar (s/n)? ');
}

console.log('Fim do programa');
```

E agora, pedimos a tarefa e adicionamos ao array.

```js
const rl = require('readline-sync');
const tarefas = [];

let continuar = 's';

while(continuar=='s') {
        // Pedimos a tarefa
        const tarefa = rl.question('Digite uma tarefa: ');
        // Adicionamos ela ao array de tarefas
        tarefas.push(tarefa);

        continuar = rl.question('Continuar (s/n)? ');
}

console.log('Fim do programa');
```

Ao final do programa, devemos criar um arquivo contendo todas as tarefas digitadas.

Para isso, vamos iterar sobre o array, pegando elemento por elemento e adicionando elemento por elemento ao arquivo.

Vamos usar o pacote `fs` e o método `appendFileSync()`.

```js
const rl = require('readline-sync');
const fs = require('fs');

const tarefas = [];

let continuar = 's';

while(continuar=='s') {
        // Pedimos a tarefa
        const tarefa = rl.question('Digite uma tarefa: ');
        // Adicionamos ela ao array de tarefas
        tarefas.push(tarefa);

        continuar = rl.question('Continuar (s/n)? ');
}

// Ao final do programa, iteramos sobre o array...

for (i=0; i<tarefas.length; i++) {
    const tarefa = tarefas[i];
    fs.appendFileSync('./tarefas.txt', `${tarefa}\n`);
}

console.log('Fim do programa');
```

[Índice](README.md)