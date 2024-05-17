[Índice](README.md)

# Operadores de comparação

Operadores de comparação são usados para escrever expressões que comparam dois valores e, ao serem avaliadas (calculadas), retornam os valores `true` (verdadeiro) ou `false` (falso).


## Valores booleanos 

O `tipo de dado` dos valores `true` e `false`, que resultam de expressões lógicas, é chamado `Booleano`.

> O nome *Booleano* deve-se ao matemático e filósofo inglês *George Boole*, que desenvolveu procedimentos aritméticos para calcular o valor de expressões lógicas dos quais *derivam* os procedimentos usados em linguagens de programação.

O `resultado` de uma expressão lógica é chamado de *valor de verdade da expressão*.

## Operadores
    
Operadores de comparação operam com qualquer objeto da linguagem javascript ao qual possamos associar uma variável (números, strings, funções, vetores...). 

O `resultado` dessa operação é um dos valores booleanos: `true` ou `false`.

|operador   |operação   |exemplo    |resultado
|--------   |--------   |-------    |---------
|==         |igualdade  |'2' == 2   |`true`
|===        |igualdade estrita| '2' === 2|`false`
|!=         |difereça   |'2' != 1+1|`false`
|!==        |diferença estrita|'2' !== 1+1|`true`
|>          |maior que  |2+5 > 2      |`true`
|<          |menor que  |'a' < 'b'    |`true`
|>=         |maior ou igual|2 * 5 >=20|`false`
|<=         |menor ou igual|2 * 5 <=20|`true`

> **Igualdade e diferença estritas**: levam em conta o tipo do valor


[Índice](README.md)