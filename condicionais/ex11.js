//a)
let rendaMensalEmCentavos = 300000;
let mesesDecorridos = 12;
let totalJaPagoAluno = 1000000;
let valorAPagar = rendaMensalEmCentavos * (18/100);
console.log(valorAPagar.toFixed(2));

//b)
let RendaMensalEmCentavos = 150000;
let MesesDecorridos = 12;
let TotalJaPagoAluno = 1000000;
if(RendaMensalEmCentavos < 200000){
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais")
}
