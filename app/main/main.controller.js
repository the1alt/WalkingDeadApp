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

    function mainCtrl(users, $scope, $filter, dataService, UserFcty) {


        var vm = this;
        vm.title = "Hello Angular by StyleGuide";
        vm.sexeOption = null;

        vm.users = users;
        vm.dataService = dataService;

        vm.myDate = new Date();

        vm.minDate = new Date(
            vm.myDate.getFullYear(),
            vm.myDate.getMonth() - 2,
            vm.myDate.getDate());

        vm.maxDate = new Date(
            vm.myDate.getFullYear(),
            vm.myDate.getMonth() + 2,
            vm.myDate.getDate());

        vm.age = function(input){
          return moment().diff(moment(input, 'DD-MM-YYYY'), 'years');
        };

        // vm.onlyWeekendsPredicate = function(date) {
        //     var day = date.getDay();
        //     return day === 0 || day === 6;
        //   };


          vm.ageRange = 10;

        //
        // if( vm.dataService.user.length>0 ){
        //   vm.users.push(vm.dataService.user);
        // }
        angular.forEach(vm.dataService.users, function(value, key){
          value.id=(vm.users.length + 1);
          vm.users.push(value);
        });


        vm.date = new Date();
        vm.date = vm.date.getMonth();

        vm.deleteUser = function(id){
          Materialize.toast(vm.users[id].pseudo + " s'est fait bouffé par un zombie", 4000);
          UserFcty.remove(id+1).then(function() {
              vm.users.splice(id,1);
          });
        };


}

}());
