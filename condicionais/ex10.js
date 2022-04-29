const caractere = "E";
const Vogal = ["A","E","I","O","U","a","e","i","o","u"];
const Numero = [1,2,3,4,5,6,7,8,9,0];
if(Vogal.includes(caractere)){
    console.log("Vogal")
}else if(Numero.includes(caractere)){
    console.log("Número")
}else{
    console.log("Consoante")
}