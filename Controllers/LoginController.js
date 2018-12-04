app.controller('loginCtrl', function($rootScope, $scope, $http, $location) {

    $scope.signIn = function(){

        $scope.processing = true;

        //Reset the variable
        $rootScope.authenticatedUser = null;

        var dataToSend = {
            "username": "isec",
            "password": "isec"
        }

        $http.post('http://api.pedrodsa.com/eBankAPI/rest/auth/signIn', dataToSend)
            .then(function(response) {

                $rootScope.authenticatedUser = {
                    firstName: "Sérgio",
                    lastName: "Lúcio",
                    city: "Coimbra"
                };

                $scope.processing = false;
                $location.path('/home-page');

            }, function(error){

                $scope.processing = false;

            });

    };
});
