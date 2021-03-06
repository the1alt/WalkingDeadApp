/**
 * All Routing
 */
(function() {

    'use strict';

    /**
     * All Routing here...
     * Each Route can resolve some datas before send in controller
     */
    var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    app.config(function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main', // with alias in view for ANgular StyleGuide
                resolve: { // resolve Factory before display view and send by injection in controller
                    users: function(UserFcty) {
                        return UserFcty.all();
                    }
                }
            })
            .when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: 'contactCtrl',
                controllerAs: 'contact',
                resolve: {
                  users: function(UserFcty) {
                        return UserFcty.all();
                      }
                }
            })
            .otherwise({redirectTo: '/'});
    });


}());
