# Exercícios - Objetos

Estes exercícios usam o pacote `readline-sync`. O código para importar o pacote foi omitido dos exemplos por brevidade.

## Instruções para começar o trabalho
Para fazer os exercícios você precisa:

1. criar um diretório
2. nesse diretório, instalar o `readline-sync` usando o `npm`

  ```sh
  npm install readline-sync

  ```

3. em cada um de seus programas, incluir no começo deles a linha:

  ```js
  const rl = require('readline-sync');
  ```

## Interpretação de código


1. No programa abaixo, o que vai ser impresso no console?

    ```js
    const filme = {
        nome: "Auto da Compadecida", 
        ano: 2000, 
        elenco: [
            "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
            "Virginia Cavendish"
            ], 
        transmissoesHoje: [
            {canal: "Telecine", horario: "21h"}, 
            {canal: "Canal Brasil", horario: "19h"}, 
            {canal: "Globo", horario: "14h"}
            ]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    ```

1. No programa abaixo, o que vai ser impresso no console?

    ```js
    const cachorro = {
        nome: "Juca", 
        idade: 3, 
        raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```
1. No programa abaixo, o que vai ser impresso no console?

    ```js
    function minhaFuncao(objeto, propriedade) {
        return objeto[propriedade]
    }

    const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    ```
