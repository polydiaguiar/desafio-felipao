//Desafio 1, "Criar uma variável para armazenar o nome e a quntidade de experiência (XP) de um herói, 
//depois utilizar uma estrutura de decisão para representar alguma das msgs abaixo"

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// Saída:  Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**"

// O Que deve ser utilizado: Variáveis, Operadores, Laços de repetição, Estruturas de decisões

let nomeDaHeroina = "Polyana"
let xp = 7000
let nivelDaHeroina

if (xp <= 1000) {
    nivelDaHeroina = "Ferro"

} else if (xp >= 1001 && xp <= 2000) {
    nivelDaHeroina = "Bronze"

} else if (xp >= 2001 && xp <= 5000) {
    nivelDaHeroina = "Prata"

} else if (xp >= 5001 && xp <= 7000) {
    nivelDaHeroina = "Ouro"

} else if (xp >= 7001 && xp <= 8000) {
    nivelDaHeroina = "Platina"

} else if (xp >= 8001 && xp <= 9000) {
    nivelDaHeroina = "Ascendente"

} else if (xp >= 9001 && xp <= 10000) {
    nivelDaHeroina = "Imortal"

} else if (xp >= 10001) {
    nivelDaHeroina = "Radiante"

} console.log("A heroína de nome " + nomeDaHeroina + " está no nível de " + nivelDaHeroina)





