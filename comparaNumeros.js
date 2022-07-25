function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);
	const terceiraFrase = criaTerceiraFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase} ${terceiraFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor do que';
	let comparaVinte = 'menor do que';

	if (soma > 10) {
		comparaDez = 'maior do que';
	}
    else if (soma ==10 ) {
        comparaDez = 'igual a';
    }

	if (soma > 20) {
		comparaVinte = 'maior do que';
	}
    else if (soma == 20){
        comparaVinte = 'igual a';
    }

	return `Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte} 20.`;
}

function criaTerceiraFrase(num1, num2) {
	const subtrai = num1 - num2;
	let comparaDez2 = 'menor do que';
	let comparaVinte2 = 'menor do que';

	if (subtrai > 10) {
		comparaDez2 = 'maior do que';
	}
    else if (subtrai == 20) {
        comparaDez2 = "igual a";
    }

	if (subtrai > 20) {
		comparaVinte2 = 'maior do que';
	}
    else if (subtrai == 20) {
        comparaVinte2 = "igual a";
    }

	return `Sua subtração é ${subtrai}, que é ${comparaDez2} 10 e ${comparaVinte2} 20.`;
}
console.log("num1 ")
var numero1 = prompt("digite o primeiro número ");
var a = parseInt(numero1);
console.log("num2 ")
var numero2 = prompt("digite o segundo número ");
var b = parseInt(numero2);

console.log(comparaNumeros(a, b));

// console.log(comparaNumeros(10, 10));
