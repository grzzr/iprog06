# Introdução à programação - usando Javascript

## Aula 01 - o shell do Windows e primeiro programa em Javascript

- [Usando a linha de comando no Windows](CLI01-cmd-windows.md)
- [Lab Javascript 01](JS-01.md)


### Ferramentas

- `Node.js` - Interpretador Javascript - [https://nodejs.org](https://nodejs.org)
- `GIT e BASH` -  Controle de versão e Shell - [https://git-scm.com/](https://git-scm.com/)
- `VSCodium` - Editor de código livre (MIT) - [https://vscodium.com](https://vscodium.com)
- `VSCode` - Editor de código da Microsoft - [https://code.visualstudio.com/](https://code.visualstudio.com/)

### Sugestão de setup

Seu computador de aula já vem com o **Node.js**, **GIT** e shell **Bash** instalados, além do **VSCode** da Microsoft.

Opcionalmente, você pode instalar o **VSCodium**, que é uma versão livre (licença MIT) do VSCode. Ele não tem nenhum código que conecta você aos servidores da Microsoft, como o das funções de telemetria e pesquisas. 

- [Instalar VSCodium](VSCODIUM-00-instalar.md)

### VSCodium/VSCode
- [Abrir projeto no VSCodium/VSCode](VSCODIUM-01.abrir-diretorio.md)


## Aula 02 - Edição de código e interpretação

- lab 02 - [Comentários de código](JS-02.md)
- lab 03 - [Interpretação de código, código "invisível" e código errado](JS-03.md)
    

## Aula 03 - Atividade desplugada - Codificação de imagens

- [Microstudio.dev](https://microstudio.dev)

## Aula 04 - Strings e números

- lab 04 - [Operações com Strings e Números](JS-04.md)
- [Interpolação de valores em strings](JS-05.md)
- [Exercícios](Exercicios-aula-04.md) aula 4 

## Aula 05 - Variáveis

- [Declaração, uso e tipos de dados](./JS-08.md)
- [Exercícios Variáveis](./JS-08-Lab-Variaveis.md)

## Aula 06a - Bibliotecas de código

> Bibliotecas de código são coleções de funções e outros tipos de dados que usamos em nossos programas.

- [Pacotes com `npm` e instalação da biblioteca `readline-sync`](./JS-09.md)

## Aula 06b - Entrada de dados

- [Ler dados via teclado com readline-sync](./JS-10.md)
- [Exercícios de entrada de dados](./JS-10-Exercicios-entrada-de-dados.md)

## Aula 07 - Booleanos, operadores lógicos e de comparação

- [Valores booleanos e operadores de comparação](./JS-11a.md)
- [Operadores lógicos](./JS-11b.md)

## [Exercícios de revisão](./Exercicios-aula07.md)

## Aula 08 - Funções

- [Funções](./JS-Funcoes.md) - declaração, parâmetros, retorno, reutilização de código
- [Estudo de caso - Baby Shark](./JS-Funcoes-EstudoDeCaso.md) - abstração de operações, composição de funções, refatoração

## Aula 09 - Arrays - I

- [Arrays](./JS-Arrays.md) - Criação, acesso, métodos úteis, iteração

### [Exercícios com arrays](Exercicios-Arrays.md) - usando algorítmos funcionais

### Arquivos usados nos exercícios:
Copie estes arquivos para o seu diretório de trabalho.

- [emails.json](./fontes/JS-Arrays/emails.json)
- [telefones.json](./fontes/JS-Arrays/telefones.json)
- [numeros.json](./fontes/JS-Arrays/numeros.json)

Os datasets de emails e telefones foram gerados usando as ferramentas disponíveis em [https://fauxid.com/](https://fauxid.com/)

- Emails falsos: [https://fauxid.com/tools/fake-email-list](https://fauxid.com/tools/fake-email-list)
- Telefones falsos: [https://fauxid.com/tools/fake-phone-number](https://fauxid.com/tools/fake-phone-number)


## Aula 10 - Desvio condicional

- [Blocos de código e escopo de variáveis](./JS-Blocos-de-codigo-e-escopo-de-variaveis.md)
- [Desvios condicionais](./JS-Desvios-condicionais.md) - com `if`, `if-else`

### [Exercícios](./JS-Exercicios-condicionais.md) usando condicionais

## Aula 11 - Loops

- [Loops]() - com `for` e `while`
- [Padrões para loops](./JS-Padroes-para-loops.md) - loop infinito, flags, variáveis contadoras, percorrer array, variáveis acumuladoras

### [Exercícios](./JS-Exercicios-condicionais-e-loops.md) - condicionais e loops

### [Exercícios com arrays](JS-Exercicios-Strings-e-Arrays.md) - usando algorítmos imperativos

### [Projeto](JS-Projeto-lista-de-tarefas.md) - Lista de tarefas

### datasets

- [American Movies scraped from Wikipedia](https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json)

## Exercícios - aula remota 02/05/2024

- [Exercícios sobre Objetos](JS-Exercicios-Objetos.md) - Pesquise nos [slides da aula sobre objetos](slides/aula07-objetos.pdf) e resolva também os exercícios que envolvem sintaxes não vistas em aula, como o operador *spread* `...`
- [Exercícios sobre loops](JS-Exercicios-Lacos.md) - Pesquise nos [slides da aula sobre laços/loops](slides/aula09-lacos.pdf) e resolva também os exercícios que envolvem sintaxes não vistas em aula, como `for..of`.

## Tarefa para quem quiser adiantar assunto

Você pode fazer a etapa 2 pelo celular. As etapas que necessitam de instalação de programas ou do VSCode estão marcadas.

**Criar uma conta no `codeberg.org` ou `git.disroot.org` e criar um repositório seguindo os roteiros abaixo:**

1. [Instalar GIT](GIT-instalar.md) (precisa de computador)
2. [Criar conta e 1 repositório de código](GIT-criar-repositorio-codeberg.md) - Esta é parte que você pode fazer pelo celular. O roteiro usa o `codeberg.org` (git.disroot.org é igual, se você preferir). 
> Se você quiser, pode também criar uma conta no `github.com` mas a criação de repositórios é um pouquinho diferente.

3. [Clonar repositório](GIT-clonar-repositorio.md) (precisa de computador com Git)

4. [Atualizar repositório](GIT-Atualizar-repositorio.md) (precisa de computador com Git e VScode)


