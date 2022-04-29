const ALTO = 1.5;
const MODERADO = 3;
const quantidadeDeAguaIngerida = 2.5;
if(quantidadeDeAguaIngerida < ALTO){
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!")
}else if(quantidadeDeAguaIngerida == ALTO || quantidadeDeAguaIngerida <= MODERADO){
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!")
}else if(quantidadeDeAguaIngerida > MODERADO){
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!")
}