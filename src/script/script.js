
function calcular() {
  let NomePessoa = document.querySelector("#nome");

  let msg = document.querySelector(".msg");

  let nome = NomePessoa.value;

  nome.innerHTML = `${nome} `;

  console.log("nome: " + nome);

  // calcular IMC
  let altura = document.querySelector("#altura");

  let peso = document.querySelector("#peso");

  let somar = peso.value / altura.value / 1.8;

  let somar1 = somar.toFixed(2);

 
  console.log("Seu IMC: " + somar1);
  // Dados Do IMC
  let dados=function Cal(somar1){
    if(somar1<=18.5){
return "Baixo Peso"
 
}else if(somar1<=24.9){
  return "NORMAL"
}
else if(somar1<=29.9){
  return "SOBREPESO"
}
else if(somar1<=39.9){
  return "OBESIDADE"
}
else if(somar1>=40){
  return "OBESIDADE GRAVE"
}


}
msg.innerHTML = `${nome} Seu IMC é ${somar1} ${dados(somar1)}  `;


 }
