/**
 * Configure your app...
 */
(function() {

    'use strict';

    /**
     * All Module configured by Angular
     * Configure All Modules here...
     */
    var app = angular.module('app', ['ngAnimate','masonry', 'angular-loading-bar', 'ui.materialize', '$window', '$rootScope', 'angularMaterializeDatePicker'])
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
            cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
        }]);


}());
