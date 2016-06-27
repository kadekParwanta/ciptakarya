'use strict';

angular.module('mean.system').controller('TugasfungsiController', ['$scope', '$rootScope', 'Menus', 'MeanUser', '$state',
  function($scope, $rootScope, Menus, MeanUser, $state) {

    var vm = this;
    $scope.features = [
      {name:'Perencanaan Beranda',info:'Membuat Perencanaan menjadi lebih mudah'},
      {name:'Pemeliharaan Beranda',info:'Mengontrol pelaksaan kegiatan'},
      {name:'Aset Beranda',info:'Mengelola aset'},
    ]
  }
]);
