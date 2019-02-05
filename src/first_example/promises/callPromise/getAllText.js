function getAllText(){

	getText("A")
	.then(() => getText("B"))
		.then(() => getText("C"))

}

getAllText()
