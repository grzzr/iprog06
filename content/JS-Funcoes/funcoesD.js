const ficha = function(nome, email, msg) {
    return (
         `Nome: ${nome}\n`
        +`Email: ${email}\n`
        +`Msg: ${msg}\n`
    )
}

console.log(ficha('Gustavo', 'gus@scrs.com.br','Olá! Olá!'))
console.log(ficha('Prof', 'profgus@scrs.com.br','Oi, turma!'))
console.log(ficha('Prof. G.', 'pgus@scrs.com.br','Oi!'))