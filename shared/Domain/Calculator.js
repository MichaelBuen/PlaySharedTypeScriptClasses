///<reference path="../../typings/node/node.d.ts"/>
var Domain;
(function (Domain) {
    var Calculator;
    (function (Calculator) {
        function multiply(multiplicand, multiplier) {
            return multiplicand * multiplier;
        }
        Calculator.multiply = multiply;
        function divide(dividend, divisor) {
            return null;
        }
        Calculator.divide = divide;
    })(Calculator = Domain.Calculator || (Domain.Calculator = {}));
})(Domain || (Domain = {}));
if (typeof exports != 'undefined') {
    module.exports = Domain.Calculator;
}
//# sourceMappingURL=Calculator.js.map