var Domain;
(function (Domain) {
    var Person = (function () {
        function Person() {
        }
        Person.prototype.validate = function () {
            var validations = [];
            if (this.age < 0)
                validations.push('Cannot be negative age, bad value');
            return validations;
        };
        return Person;
    })();
    Domain.Person = Person;
})(Domain || (Domain = {}));
if (typeof exports != 'undefined') {
    exports.DomainPerson = Domain.Person;
}
//# sourceMappingURL=Person.js.map