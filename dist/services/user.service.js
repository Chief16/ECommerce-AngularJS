var UserService = /** @class */ (function () {
    function UserService($http) {
        this.$http = $http;
        this.URL = "https://fakestoreapi.com/users";
        this.addUser();
    }
    // Adding a dummy user for usage in the app
    UserService.prototype.addUser = function () {
        return this.$http.post(this.URL, {
            email: "admin@gmail.com",
            username: "admin",
            password: "admin",
            name: {
                firstname: "John",
                lastname: "Doe",
            },
            address: {
                city: "kilcoole",
                street: "7835 new road",
                number: 3,
                zipcode: "12926-3874",
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
            },
            phone: "1-570-236-7033",
        });
    };
    UserService.$inject = ["$http"];
    return UserService;
}());

