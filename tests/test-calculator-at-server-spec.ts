/// <reference path="../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../typings/express/express.d.ts"/>


/// <reference path="../shared/Domain/Calculator.ts"/>



class ExternalizedDomain {
    static Calculator : typeof Domain.Calculator = require('../shared/Domain/Calculator');
}

describe("module calculator", () => {
    it("should multiply 2 and 3", () => {

        console.log(ExternalizedDomain.Calculator);
        var product = ExternalizedDomain.Calculator.multiply(2,3);
        console.log(product);

    });
    it("should divide 6 and 3", ()=>{
        var res = ExternalizedDomain.Calculator.divide(6,3);
    })
});