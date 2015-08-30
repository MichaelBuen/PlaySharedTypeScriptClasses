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
})(Calculator || (Calculator = {}));
if (typeof exports != 'undefined') {
    exports.Calculator = Calculator;
}
//# sourceMappingURL=Calculator.js.map