/**
 * Another Contact Controller
 */
(function() {

    'use strict';

    angular.module('app').controller('contactCtrl', ['$window',contactCtrl]);

    function contactCtrl($window) {

        var vm = this;
        vm.submitForm = submitForm;
        vm.title = "Page d'ajout de personnage";
        vm.checkSaison=[];

        // function to submit the form after all validation has occurred
        function submitForm(isValid) {
            // check to make sure the form is completely valid
            if (isValid) {
              $window.alert('our form is amazing');
            }
        }

    }

}());
