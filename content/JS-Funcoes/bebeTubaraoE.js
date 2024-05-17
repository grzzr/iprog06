estrofe = function(frase) {
    return (
        (frase + ' doo doo doo doo doo doo\n').repeat(3)
        +frase + '!\n\n'
    )
}
    
bebeTubarao = function() {
    return (
    estrofe('Bebê tubarão')
    + estrofe('Mamãe tubarão')    
    + estrofe('Papai tubarão')
    + estrofe('Vovô tubarão')
    + estrofe('Vovó tubarão')
    + estrofe('Vou caçar')
    + estrofe('Foge, foge')
    + estrofe('Sãos e salvos')
    + estrofe('É o fim')
    )
}

const letra = bebeTubarao()

console.log(letra)
