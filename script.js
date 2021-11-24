function calcular(){
	var peso = parseFloat(document.getElementById("peso").value)

	var altura = parseFloat(document.getElementById("altura").value)

	var result = document.getElementById("result")

	if(isNaN(peso) || isNaN(altura)){
		result.innerHTML = 'Preencha os campos corretamente'
	}
	
	else{
		var imc = peso/(altura*altura)
		imc = imc.toFixed(2)
		result.innerHTML = `Seu imc é ${imc}`
	}
	

	



}
