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
angular.module('TheApp', []).controller('Controller', Controller);
//# sourceMappingURL=Controller.js.map