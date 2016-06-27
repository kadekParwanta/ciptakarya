'use strict';

//Setting up route
angular.module('mean.meanStarter').config(['$meanStateProvider', '$urlRouterProvider',
  function($meanStateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $meanStateProvider
      .state('home', {
        url: '/',
        templateUrl: 'meanStarter/views/system/index.html'
      })
      .state('informasi', {
        url: '/informasi',
        templateUrl: 'meanStarter/views/system/informasi.html'
      })
      .state('kebijakan', {
        url: '/kebijakan',
        templateUrl: 'meanStarter/views/system/kebijakan.html'
      })
      .state('pengumuman', {
        url: '/pengumuman',
        templateUrl: 'meanStarter/views/system/pengumuman.html'
      });
  }
]).config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);
