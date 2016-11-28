/**
 * Filter
 */
(function() {

    "use strict";

    /**
     * 1ere syntaxe
     * Just a filter to render HTML in view
     * @returns
     * */
    angular.module('app').filter("trust", ['$sce', function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }]);


    /**
     * 2eme syntax
     * Filter Website to display link
     */

    angular.module('app').filter('website', website);

    function website() {

        return function(input) {
            var link = "<a href=" + input + ">" + input + "</a>";
            return link;
        };
    }

    //Filtre selon le sexe
    angular.module('app').filter('triSexe', function(){
        return function(sexeFilter, sexeOption){
          var el = [];
          sexeFilter.forEach(function(a){
            if(sexeOption === true){
              if(a.sexe === true){
                el.push(a);
              }
            }
            else if(sexeOption === false){
              if(a.sexe === false){
                  el.push(a);
              }
            }
            else{
              el = sexeFilter;
            }
          });

          return el;
        };
    });

    //Filtre selon un mot ou une phrase
    angular.module('app').filter('searchText', function(){
        return function(textFilter, textOption){
          var el = [];
          textFilter.forEach(function(a){
            if(textOption === null || textOption === undefined || textOption === ""){
              el = textFilter;
            }
            else{

              angular.forEach(a, function(b, c){
                if(b === textOption){
                  el.push(a);
                }
              });
            }
          });
          console.log();
          return el;
        };
    });
   //
  //   /**
  //     * 3eme syntax
  //     * Filter Age calculate
  //     */
   //
  //    angular.module('app').filter('age', age);
   //
  //    function age() {
   //
  //        return function(input) {
  //            return moment().diff(moment(input, 'DD/MM/YYYY'), 'years');
  //        }
  //    }
   //
   //
     /**
      * 3eme syntax
      * Filter Age Month
      */

     angular.module('app').filter('month', function(){

         return function(input) {
             var now = new Date();
             now = now.getMonth();
             var userMonth = input.split('/');
             userMonth = parseInt(userMonth[1]);
             console.log(userMonth);
             console.log(now);

             if (now+1 === userMonth) {
                 return true;
             }
             else{
               return false;
             }
         };
     });
   //
  //    /**
  //   * 3eme syntax
  //   * Filter Age Month
  //   */
   //
  //  angular.module('app').filter('supAge', supAge);
   //
  //  function supAge() {
   //
  //      return function(tableau, ageUser) {
  //          if (ageUser === undefined || ageUser === null) {
  //              return tableau;
  //          }
  //          return _.filter(tableau, function(use) {
  //              return moment().diff(moment(use.naissance, 'DD/MM/YYYY'), 'years') >= ageUser;
  //          });
   //
  //      };
  //  }
   //


}());
