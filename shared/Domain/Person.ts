///<reference path="../../typings/node/node.d.ts"/>
module Domain {
		
	export class Person {
		name : string;
		age : number;
		
		// we can use this logic on front-end, e.g., Angular.
		// and we can also re-use this logic on back-end, e.g., NodeJS's REST API 
		validate() : string[] {
			var validations : string[] = [];
			
			if (this.age < 0 || this.age == undefined || this.age == null)
				validations.push('Age must be equals or more than zero');
				
			return validations;	
		}
		
	}
}


// Hack for converting internal module to external module

// http://stackoverflow.com/questions/16930398/use-a-typescript-module-class-in-the-browser-and-in-the-server-node-js
// https://srackham.wordpress.com/2012/11/20/building-heterogeneous-typescript-libraries/
// http://www.sitepoint.com/understanding-module-exports-exports-node-js/ -- internals of require
declare var exports: any;
if (typeof exports != 'undefined') {
    module.exports = Domain.Person;
}
