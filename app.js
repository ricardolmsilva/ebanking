var app = angular.module("eBankApp", ["ngRoute"]);

app.config(function ($routeProvider)
{
    $routeProvider.when("/",{
        templateUrl: "views/login.html",
        controller: "loginCtrl"
    })
    .when("/criar-conta",{
       templateUrl: "views/criar-conta.html"
    })
    .when("/dados-gerais",{
       templateUrl: "views/dados-gerais.html"
    })
    .when("/home-page",{
       templateUrl: "views/home-page.html"
    })
    .when("/movimentos",{
       templateUrl: "views/movimentos.html"
    })
    .when("/pagamentos",{
       templateUrl: "views/pagamentos.html"
    })
    .when("/transferencias",{
       templateUrl: "views/transferencias.html"
    })
    .otherwise({
        template : "<h1>Not found!</h1><p>Are you lost?</p>"
    });

});