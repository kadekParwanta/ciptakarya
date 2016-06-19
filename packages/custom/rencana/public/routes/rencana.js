(function() {
    'use strict';

    function Rencana($stateProvider) {
        $stateProvider.state('rencana example page', {
            url: '/rencana/example',
            templateUrl: 'rencana/views/index.html'
        }).state('rencana circles example', {
            url: '/rencana/example/:circle',
            templateUrl: 'rencana/views/example.html'
        }).state('all rencanas', {
            url: '/rencanas',
            templateUrl: 'rencana/views/list.html'
        }).state('create rencana', {
            url: '/rencana/create',
            templateUrl: 'rencana/views/create.html'
        }).state('edit rencana', {
            url: '/rencana/:rencanaId/edit',
            templateUrl: 'rencana/views/edit.html'
        }).state('rencana by id', {
            url: '/rencanas/:rencanaId',
            templateUrl: 'rencana/views/view.html'
        });
    }

    angular
        .module('mean.rencana')
        .config(Rencana);

    Rencana.$inject = ['$stateProvider'];

})();
