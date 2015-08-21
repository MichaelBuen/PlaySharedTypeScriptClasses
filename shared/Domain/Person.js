var Domain;
(function (Domain) {
    var Person = (function () {
        function Person() {
        }
        // we can use this logic on front-end, e.g., Angular.
        // and we can also re-use this logic on back-end, e.g., NodeJS's REST API 
        Person.prototype.validate = function () {
            var validations = [];
            if (this.age < 0 || this.age == undefined || this.age == null)
                validations.push('Age must be equals or more than zero');
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