const valorDoProduto = 1000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;
const valorRestante = (valorDoProduto - valorPago);// 700
const perMes = (valorDoProduto / quantidadeDoParcelamento);// 100/Mês
const parcelasRestantes = (valorRestante / perMes) ;// 7
console.log(`Restam ${parcelasRestantes} de ${perMes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)