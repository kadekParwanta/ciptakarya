(function() {
    'use strict';

    function Rencana($http, $q) {
        return {
            name: 'rencana',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/rencana/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            },
            
            find: function() {
                var deferred = $q.defer();

                $http.get('/api/rencana/').success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            },
            
            findOne: function(rencanaId) {
                var deferred = $q.defer();

                $http.get('/api/rencana/'+rencanaId).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            },
            
            save: function(rencana) {
                console.log("save rencana " + JSON.stringify(rencana));
                var deferred = $q.defer();

                $http.post('/api/rencana/', rencana).success(function(response) {
                    console.log("save rencana success" + JSON.stringify(response));
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            },
            
            update: function(rencana) {
                var deferred = $q.defer();

                $http.put('/api/rencana/', rencana._id).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            },
            
            remove: function(rencana) {
                var deferred = $q.defer();

                $http.delete('/api/rencana/', rencana._id).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            },
        };
    }

    angular
        .module('mean.rencana')
        .factory('Rencana', Rencana);

    Rencana.$inject = ['$http', '$q'];

})();
