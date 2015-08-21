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

angular.module('TheApp', []).controller('Controller', Controller);