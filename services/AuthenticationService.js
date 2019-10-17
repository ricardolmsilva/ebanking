app.factory('AuthenticationService', function ($http) {

    var apiUrl = "http://api.pedrodsa.com/eBankAPI/rest/"


    return {

        signIn: function (username, password) {

            var dataToSend = {
                "username": username,
                "password": password
            }

            var promisse = $http.post(apiUrl + "auth/signIn", dataToSend);

            return promisse;
        }
    }

});