var SearchFilter = /** @class */ (function () {
    function SearchFilter() {
    }
    SearchFilter.prototype.transform = function (arr, searchIn, searchText) {
        if (!arr || !searchIn || !searchText)
            return arr;
        return arr.filter(function (el) {
            return String(el[searchIn]).toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });
    };
    return SearchFilter;
}());