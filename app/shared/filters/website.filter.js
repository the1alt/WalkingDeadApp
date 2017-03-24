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
                if(typeof b === 'string' && c !== 'resume' && b.indexOf(textOption) > -1 && el.indexOf(a) === -1){
                  el.push(a);
                }
              });
            }
          });
          return el;
        };
    });

     /**
      *
      * Filter Age Month
      */

     angular.module('app').filter('month', function(){

         return function(input) {
            var el;
            var now = new Date();
            now = now.getMonth();
            var userMonth = input.split('/');
            userMonth = parseInt(userMonth[1]);

            if (now+1 === userMonth) {
               el = true;
               return el;
            }
         };
     });

     /**
      *
      * Filter Age Max
      */
     angular.module('app').filter('ageMax', function(){

         return function(array, ageSup) {
            var el = [];

              array.forEach(function(a){

                var age = moment().diff(moment(a.naissance, 'DD-MM-YYYY'), 'years');
                if(age >= ageSup ){
                  el.push(a);
                }
              });
              return el;
         };
     });





}());
