
// função para calcular o numero de vitoria real do Heroi
function calcularVitoria (vitoria , derrota){

    return result  = vitoria - derrota
}
let nivel
// chamando a função calcular vitoria
calcularVitoria(150,21)
// estrutura de decisão do nivel do Heroi
if (result <= 10 ){
    nivel = "Ferro"
}else if (result > 10 && result <= 20 ){
    nivel = "Bronze"
}else if (result > 20 && result <= 50 ){
    nivel = prata
}else if (result > 50 && result <= 80){
    nivel = "Ouro"
}else if (result > 80 && result <= 90){
    nivel = "Diamante"
}else if (result > 90 && result <= 100){
    nivel = "Lendário"
}else if (result >= 101){
    nivel = "Imortal"
}

// mensagem final do programa

console.log("O Heroi tem um saldo de : " + result + " Vitorias" + "e estar no Nivel de : " + nivel)