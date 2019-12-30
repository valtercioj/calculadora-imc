function calcular(){
    var Peso = parseFloat(document.getElementById("peso").value);
    var Altura = parseFloat(document.getElementById("altura").value);
    //realizar o cálculo
    var imc = Peso/(Altura*Altura);
    imc = imc.toFixed(2);
    var result = document.getElementById("resultado")
    result.innerHTML = ("Seu IMC foi " + imc);
   
}