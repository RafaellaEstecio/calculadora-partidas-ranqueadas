/*CALCULADORA DE PARTIDAS RANQUEADAS

** o que deve ser utilizado**
-variaveis
-operadores
-laços de repetição
-estrutura de decisoes
-funçoes

OBJETIVOS:

Crie uma função que recebe como parametro 
a quantidade de vitorias e derrotas de um
jogador, depois disso retorne o resultado
para uma variavel, o saldo de ranquadas deve 
ser feito atraves do calculo(vitorias-derrotas)

se vitorias for menor ou igual que 10 = ferro
se vitorias for entre 11 e 20 = bronze
se vitorias for entre 21 e 50 = Prata
se vitorias for entre 51 e 80 = Ouro
se vitorias for entre 81 e 90 = Diamante
se vitorias for entre 91 e 100 = Lendario
se vitorias for maior ou igual a 101 = imortal

SAIDA

ao final deve se exibir uma mensagem:

"o Heroi tem de saldo (saldovitorias) esta no nivel(nomeNivel)"*/




function calculadoraRanqueadas (vitorias, derrotas){
    let nomeHeroi = "felipe";
    let nivelHeroi = "ouro";
    let result = vitorias - derrotas 
    if (result <= 10 ){
        nivelHeroi = "ferro"
    } else if (result > 10 && result <= 20 ){
        nivelHeroi = "bronze"
    }
     else if (result > 21 && result <= 50 ){
        nivelHeroi = "Prata"
    }  
     else if (result > 51 && result <= 80 ){
        nivelHeroi = "Ouro"
    } 
     else if (result > 81 && result <= 90 ){
        nivelHeroi = "Diamante"
    } 
    else if (result > 91 && result <= 100 ){
        nivelHeroi = "Lendario"
    }
    else if (result >= 101  ){
        nivelHeroi = "Imortal"
    } else {
        console.log ("nada")
    }
    console.log(`O Heroi ${nomeHeroi} tem saldo de ${result} esta no nivel ${nivelHeroi}`)
    return result 
    
}
calculadoraRanqueadas(600,400)

 

