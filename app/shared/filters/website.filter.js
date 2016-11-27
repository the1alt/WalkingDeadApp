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


    angular.module('app')  .filter('triSexe', function(){
        return function(sexeFilter, sexeOption){
          var el = [];
          console.log(sexeOption);
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
            console.log(el);
            return el;
          });
        };
    });

}());
