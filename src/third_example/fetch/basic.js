fetch('/file/basic.json').then(function(response) { 
	// Checking Response - Convert to JSON
    
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.url);
    console.log(response.type);

	return response.json();
}).then(function(x) {
	// The JavaScript object will be printing in the console
	console.log(x); 
});