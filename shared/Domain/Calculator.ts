///<reference path="../../typings/node/node.d.ts"/>
module Domain.Calculator {

    export function multiply(multiplicand: number, multiplier: number): number {

        return multiplicand * multiplier ;
    }

    export function divide(dividend: number, divisor: number): number {

        return null;
    }
}

declare var exports: any;
if (typeof exports != 'undefined') {
    module.exports = Domain.Calculator;
}





