/**
 * First Controller
 */
(function() {

    'use strict';

    angular.module('app').controller('mainCtrl', mainCtrl);




    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */
    function mainCtrl(users, $scope, $filter, dataService) {

        var vm = this;
        vm.title = "Hello Angular by StyleGuide";
        vm.sexeOption = null;

        vm.users = users;
        vm.dataService = dataService;
        //
        // if( vm.dataService.user.length>0 ){
        //   vm.users.push(vm.dataService.user);
        // }
        console.log(vm.dataService.user);

        vm.deleteUser = function(id){
          Materialize.toast(vm.users[id].pseudo + " s'est fait bouffé par un zombie", 4000);
          vm.users.splice(id,1);
        };


}

}());
/**
 * First Controller
 */
// (function() {
//
//     "use strict";
//
//     angular.module('app').controller('mainCtrl', mainCtrl);
//     /**
//      * Include a Factory: Best Practise
//      * Factory Resolving by Routing.
//      * Cela signifie que la Factory est chargé avant que la page se charge
//      */
//     function mainCtrl($scope, $http, $log, users, dataService){
//       var vm = this;
//
//        // On récupère le fichier JSON et on l'injecte dans $scope.users
//        vm.dataService = dataService;
//
//        vm.users = users;
//
//        vm.users.push(vm.dataService.user);
//
//         // vm.users = $rootScope.newUser;
//         // vm.$on('addUser', function(event, data){
//           // vm.users.push(shareUser.get());
//         // });
//
//
//
//          vm.age = function(dateBirth) {
//            return moment().diff(moment(dateBirth, 'DD-MM-YYYY'), 'years');
//          };
//
//          vm.supprUser = function(idUser) {
//            Materialize.toast(vm.users[idUser].pseudo + " s'est fait défoncer sa gueule !", 4000);
//            vm.users.splice(idUser, 1);
//          };
//
//      }
//
// }());
