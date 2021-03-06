(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", 'jquery'], function (require, exports) {
    var $ = require('jquery');
    $(function () {
        $('div').text('hello');
    });
});
//# sourceMappingURL=app.js.map