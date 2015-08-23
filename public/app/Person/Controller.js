var Controller = (function () {
    function Controller() {
        this.name = 'Linus T';
        this.person = new Domain.Person();
        this.person.name = 'Nice fellow';
        this.person.age = -39;
    }
    Controller.prototype.save = function () {
        this.validationMessages = this.person.validate();
    };
    return Controller;
})();
var app = angular.module('TheApp', []).controller('Controller', Controller);
console.log(app['name']);
console.log('Yay');
//# sourceMappingURL=Controller.js.map