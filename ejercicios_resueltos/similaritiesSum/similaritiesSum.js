function similaritiesSum (string) {
	// seteo similarities en 0 para el string
	var similarities = 0;

	// itero por cada caracter del string
	for (var i = 0; i < string.length; i++) {
		//creo un substring recortando desde la posición i (incrementando cada vuelta), hasta el final del string
		var substring = string.substring(i, string.length);

		// itero el substring y comparo cada caracter con el string original
		for (var j = 0; j < substring.length; j++) {
			// si es el mismo caracter, incremento el acumulador similarities
			if (string[j] === substring[j]) {
				similarities++;
			} else { // si son distinto, corto el for para que no siga iterando
				break;
			}
		}
	}

	return similarities;
}

console.log(similaritiesSum('ababaa'))