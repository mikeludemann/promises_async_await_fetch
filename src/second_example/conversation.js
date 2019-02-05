// Set boolean for talking
const talking = true;

// Create the first Promise
const newTechnologies = new Promise(
	(resolve, reject) => {
		if (talking) {
			const tech = {
				type: 'Laptop',
					brand: 'Apple',
					color: 'Silver',
					modell: 'MacBook Pro Retina',
					size: '15"',
					ram: '16 GB',
					drive: '500 GB'
			};
			resolve(tech);
		} else {
			const reason = new Error('Not talking!');
			reject(reason);
		}

	}
);

// Create a second promise
async function showOff(tech) {
	return new Promise(
		(resolve, reject) => {
			var message = '';

			message += 'Hi, I have a new ' + tech.type + '.\n';
			message += 'It is an ' + tech.brand + ' ' + tech.modell + ' in ' + tech.color + '\n';
			message += tech.size + ' with ' + tech.ram + ' RAM and ' + tech.drive + ' SDD.';

			resolve(message);
		}
	);
};

// Calling the promise
async function conversation() {
	try {
		talk('Hello');

		let tech = await newTechnologies;
		let message = await showOff(tech);

        talk(message);
        
		talk('Good Bye');
	}
	catch (error) {
		talk(error.message);
	}
}

function talk(string){
	console.log(string);
}

(async () => {
	await conversation();
})();
