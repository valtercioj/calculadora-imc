function calcular(){
    var Peso = parseFloat(document.getElementById("peso").value);
    var Altura = parseFloat(document.getElementById("altura").value);
    var result = document.getElementById("resultado")
    
    if(isNaN(Peso) || isNaN(Altura)){
      result.innerHTML = ("");
    }
    
  else{
    var imc = Peso/(Altura*Altura);
    imc = imc.toFixed(2);
    result.innerHTML = ("Seu IMC foi " + imc);
  } 
}
