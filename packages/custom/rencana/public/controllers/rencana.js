(function () {
    'use strict';

    /* jshint -W098 */

    function RencanaController($scope, Global, Rencana, $stateParams, $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'rencana'
        };

        $scope.checkCircle = function () {
            Rencana.checkCircle($stateParams.circle).then(function (response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function (error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };

        $scope.create = function (isValid) {
            if (isValid) {
                var rencana = {
                    title: this.title,
                    content: this.content
                };

                Rencana.save(rencana).then(function (response) {
                    $scope.res = response;
                    $scope.resStatus = 'info';
                    $state.go('all rencanas');
                }, function (error) {
                    $scope.res = error;
                    $scope.resStatus = 'danger';
                });

                this.title = '';
                this.content = '';
            } else {
                $scope.submitted = true;
            }
        };
        
        $scope.remove = function (rencana) {
            if (rencana) {
                Rencana.remove(rencana).then(function (response) {
                    $scope.res = response;
                    $scope.resStatus = 'info';
                }, function (error) {
                    $scope.res = error;
                    $scope.resStatus = 'danger';
                });

                for (var i in $scope.rencanas) {
                    if ($scope.rencanas[i] === rencana) {
                        $scope.rencanas.splice(i, 1);
                    }
                }
            } else {
                Rencana.remove($scope.rencana).then(function (response) {
                    $scope.res = response;
                    $scope.resStatus = 'info';
                }, function (error) {
                    $scope.res = error;
                    $scope.resStatus = 'danger';
                });
            }
        };

        $scope.update = function (isValid) {
            if (isValid) {
                var rencana = $scope.rencana;
                if (!rencana.updated) {
                    rencana.updated = [];
                }
                rencana.updated.push(new Date().getTime());                
                Rencana.update(rencana).then(function (response) {
                    $scope.res = response;
                    $scope.resStatus = 'info';
                    $state.go('all rencanas');
                }, function (error) {
                    $scope.res = error;
                    $scope.resStatus = 'danger';
                });
                
            } else {
                $scope.submitted = true;
            }
        };

        $scope.find = function () {
            Rencana.find().then(function (response) {
                    $scope.res = response;
                    $scope.resStatus = 'info';
                    $scope.rencanas = response;
                }, function (error) {
                    $scope.res = error;
                    $scope.resStatus = 'danger';
                });
        };

        $scope.findOne = function () {
            Rencana.findOne($stateParams.rencanaId).then(function (response) {
                    $scope.res = response;
                    $scope.resStatus = 'info';
                    $scope.rencana = response;
                }, function (error) {
                    $scope.res = error;
                    $scope.resStatus = 'danger';
                });
        };
    }

    angular
        .module('mean.rencana')
        .controller('RencanaController', RencanaController);

    RencanaController.$inject = ['$scope', 'Global', 'Rencana', '$stateParams', '$state'];

})();
