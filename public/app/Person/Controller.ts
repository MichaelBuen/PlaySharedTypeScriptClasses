class Controller {
	
	name : string = 'Linus T';
	
	person  = new Domain.Person();
	
	validationMessages : string[];
		
	constructor() {
		this.person.name = 'Nice fellow';
		this.person.age = -39; 	
	} 
	
	save() : void {
				
		this.validationMessages = this.person.validate();
				
	}
				
}

var app = angular.module('TheApp', []).controller('Controller', Controller);

console.log(app['name']);
console.log('Yay');