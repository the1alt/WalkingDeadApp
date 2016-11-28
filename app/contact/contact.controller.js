/**
 * Another Contact Controller
 */
(function() {

    'use strict';

    angular.module('app').controller('contactCtrl',  contactCtrl);

      contactCtrl.$inject = ['$window','dataService'];

      function contactCtrl($window, dataService) {


        var vm = this;
        vm.submitForm = submitForm;
        vm.title = "Page d'ajout de personnage";
        vm.checkSaison={};
        vm.dataService = dataService;
        console.log(dataService);



        // function to submit the form after all validation has occurred
        function submitForm(isValid) {

            // check to make sure the form is completely valid
            if (isValid) {

              vm.newCharacter={};
              vm.saison=[];

              //Get the different seasons from checkbox
              angular.forEach(vm.checkSaison, function(value, key){
                if(value){
                  key=parseInt(key.replace(/saison/g,""));
                  vm.saison.push(key);
                }
                if(vm.saison.length===0){
                  vm.saison = [null];
                }
              });

              if(vm.sexe === null){
                vm.sexe = false;
              }

              // Create new Character
              vm.newCharacter={
                "id": 0,
                "pseudo": vm.pseudo,
                "sexe": vm.sexe,
                "photo":  vm.photo,
                "activite": vm.activite,
                "naissance": vm.naissance,
                "coord": {
                  "lat": vm.coord.lat,
                  "long": vm.coord.lng,
                },
                "pays": vm.pays,
                "resume": vm.resume,
                "saisons": vm.saison
              };

              // restore values
              // vm.pseudo="";
              // vm.sexe=null;
              // vm.photo="";
              // vm.activite="";
              // vm.naissance=null;
              // vm.coord={};
              // vm.pays="";
              // vm.resume="";
              // vm.saison=[];

              // vm.dataService.users = vm.newCharacter;
              console.log('dataservice ajoutctrl', vm.dataService);
            }




        }//END SUBMIT FUNCTION


    }//END CONTROLLER

}());
