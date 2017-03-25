/**
 * Contact Controller
 */
(function() {

    'use strict';

    angular.module('app').factory('UserFcty', UserFcty);

    UserFcty.$inject = ['$log', '$q', '$http'];


    /**
     * Handler User
     */
    function UserFcty($log, $q, $http, contact) {


        var obj = {
            all: getAll,
            add : addOne,
            remove : removeOne,

        };

        return obj;


        /**
         * get All User
         */
        function getAll() {
            var deferred = $q.defer();
            $http.get('../../data')
                .success(function(data) {
                    deferred.resolve(data);
                    $log.info('API chargée');
                }).error(deferred.reject);
            return deferred.promise; //return a promise with $q library (not exist in ES5)
        }

        function addOne(obj) {
                    var deferred = $q.defer();
                    $http.post('../../data', obj)
                        .success(function (data) {
                            deferred.resolve(data);
                        }).error(deferred.reject);
                    return deferred.promise; //return a promise with $q library (not exist in ES5)
        }

        function removeOne(id) {
            var deferred = $q.defer();
            console.log(id);
            $http.delete("../../data" + id)
                .success(function (data) {
                    deferred.resolve(data);
                }).error(deferred.reject);
            return deferred.promise; //return a promise with $q library (not exist in ES5)
        }

    }



}());
