app.factory('BankAccountService', function ($http) {


    var apiUrl = "http://api.pedrodsa.com/eBankAPI/rest/";


    return {


        getBank: function (id) {

            var promisse = $http.get(apiUrl + "banks/" + id)

            return promisse;
        },


        getBankAccount: function (iban) {

            var promisse = $http.get(apiUrl + "accounts/" + iban)

            return promisse;
        },


        makeTransfer: function (ibanOrg, ibanDest, amount, description) {

            var dataToSend =
                {
                    "amount": amount,
                    "currency": "EUR",
                    "transactionDate": null,
                    "destinationIban": ibanDest,
                    "description": description
                };

            var promisse = $http.post(apiUrl + "accounts/" + iban + "/transfer", dataToSend);
            return promisse;

        },


        deposit: function (ibanDest, amount) {

        },


        withdraw: function (ibanOrg, amount) {

        },


        payment: function (ibanOrg, entity, reference, amount) {

        },


        getMovements: function (ibanOrg) {

        }
    }

});