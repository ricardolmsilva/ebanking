app.controller('loginCtrl', function ($rootScope, $scope, $http, $location, AuthenticationService) {

    $scope.signIn = function () {

        //Reset the variable
        $rootScope.authenticatedUser = null;

        $scope.error = null;

        AuthenticationService.signIn($scope.user.contractNumber, $scope.user.password).then(

            function (response) {

                $location.path('/home-page')

            },

            function (error) {

                $scope.error = "Utilizador não reconhecido";

            });

    };
});