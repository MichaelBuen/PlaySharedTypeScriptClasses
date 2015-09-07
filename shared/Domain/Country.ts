///<reference path="../../typings/node/node.d.ts"/>
module Domain {
	export class Country {
		name : string;
	}
}


// Hack for converting internal module to external module

// http://stackoverflow.com/questions/16930398/use-a-typescript-module-class-in-the-browser-and-in-the-server-node-js
// https://srackham.wordpress.com/2012/11/20/building-heterogeneous-typescript-libraries/
// http://www.sitepoint.com/understanding-module-exports-exports-node-js/ -- internals of require
declare var exports: any;
if (typeof exports != 'undefined') {
    module.exports = Domain.Country;
}
