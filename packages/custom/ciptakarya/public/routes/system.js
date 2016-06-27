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
      })
      .state('infopejabat', {
        url: '/profil/infopejabat',
        templateUrl: 'meanStarter/views/system/profil/infopejabat.html'
      })
      .state('lokasikontak', {
        url: '/profil/lokasikontak',
        templateUrl: 'meanStarter/views/system/profil/lokasikontak.html'
      })
      .state('organisasi', {
        url: '/profil/organisasi',
        templateUrl: 'meanStarter/views/system/profil/organisasi.html'
      })
      .state('tugasfungsi', {
        url: '/profil/tugasfungsi',
        templateUrl: 'meanStarter/views/system/profil/tugasfungsi.html'
      })
      .state('visimisi', {
        url: '/profil/visimisi',
        templateUrl: 'meanStarter/views/system/profil/visimisi.html'
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
