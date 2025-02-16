var CapitalizeFilter = /** @class */ (function () {
    function CapitalizeFilter() {
    }
    CapitalizeFilter.prototype.transform = function (input) {
        return !input ? input : input.charAt(0).toUpperCase() + input.slice(1);
    };
    return CapitalizeFilter;
}());