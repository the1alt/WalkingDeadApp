/**
 * Another Contact Controller
 */
(function() {

    'use strict';

    angular.module('app').controller('contactCtrl',  contactCtrl);

      contactCtrl.$inject = ['$window','UserFcty' ];

      function contactCtrl($window, UserFcty) {


        var vm = this;
        vm.title = "Page d'ajout de personnage";
        vm.checkSaison={};
        vm.ajout = ajout;



        // function to submit the form after all validation has occurred
        function ajout(isValid) {

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

              vm.naissance = moment(vm.naissance).format('DD/MM/YYYY');
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



              UserFcty.add(vm.newCharacter).then(function(){
                // restore values
                vm.pseudo="";
                vm.sexe=null;
                vm.photo="";
                vm.activite="";
                vm.naissance=null;
                vm.coord={};
                vm.pays="";
                vm.resume="";
                vm.saison=[];
              });
            }
            else{
              console.log("invalid");
            }


            Materialize.toast("le personnage a été ajouté à la liste des personnages", 4000);

        }//END SUBMIT FUNCTION


    }//END CONTROLLER

}());
