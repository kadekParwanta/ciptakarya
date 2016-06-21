(function () {
    'use strict';

    /* jshint -W098 */

    function RencanaController($scope, Global, Rencana, $stateParams, $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'rencana'
        };

        $scope.listLokasi = [
            {
                kecamatan:'Bangli', 
                desa: [
                'Kelurahan Kubu',
                'Desa Landih',
                'Kelurahan Cempaga',
                'Kelurahan Kawan',
                'Kelurahan Bebalang',
                'Desa Bunutin',
                'Desa Kayubihi',
                'Desa Pengotan',
                'Desa Taman Bali'
                ]
            },
            {
                kecamatan:'Kintamani',
                desa: [
                'Desa Abang Songan',
                'Desa Abuan',
                'Desa Awan',
                'Desa Bantang',
                'Desa Banua',
                'Desa Batu Dinding',
                'Desa Batukaang',
                'Desa Batur Selatan',
                'Desa Batur Tengah',
                'Desa Batur Utara',
                'Desa Bayungcerik',
                'Desa Bayunggede',
                'Desa Belancan',
                'Desa Belandingan',
                'Desa Belanga',
                'Desa Belantih',
                'Desa Binyan',
                'Desa Bonyoh',
                'Desa Buahan',
                'Desa Bunutin',
                'Desa Catur',
                'Desa Daup',
                'Desa Dausa',
                'Desa Gunungbau',
                'Desa Katung',
                'Desa Kedisan',
                'Desa Kintamani',
                'Desa Kutuh',
                'Desa Langgahan',
                'Desa Lembean',
                'Desa Mangguh',
                'Desa Manikliyu',
                'Desa Mengani',
                'Desa Pengejaran',
                'Desa Pinggan',
                'Desa Satra',
                'Desa Sekaan',
                'Desa Sekardadi',
                'Desa Selulung',
                'Desa Serahi',
                'Desa Siyakin',
                'Desa Songan A',
                'Desa Songan B',
                'Desa Subaya',
                'Desa Sukawana',
                'Desa Suter',
                'Desa Terunyan',
                'Desa Ulian']
            },
            {
                kecamatan:'Susut', 
                desa: [
                'Desa Abuan',
                'Desa Apuan',
                'Desa Demulih',
                'Desa Pengiangan',
                'Desa Penglumbaran',
                'Desa Selat',
                'Desa Sulahan',
                'Desa Susut',
                'Desa Tiga']
            },
            {
                kecamatan:'Tembuku', desa: [
                'Desa Bangbang',
                'Desa Jehem',
                'Desa Peninjoan',
                'Desa Tembuku',
                'Desa Undisan',
                'Desa Yangapi']
            }
        ]

        $scope.sumberDana = [
            'APBD KAB',
            'APBD PROP',
            'APBN',
            'DAK',
            'BBNKB',
            'PHR'
        ]

        $scope.today = function () {
            $scope.tahun = new Date().getFullYear();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.tahun = null;
        };

        $scope.open = function ($event) {
            $scope.status.opened = true;
        };

        $scope.setDate = function (year, month, day) {
            $scope.tahun = new Date(year, month, day);
        };

        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1,
            minMode: 'year'
        };

        $scope.formats = ['yyyy'];
        $scope.format = $scope.formats[0];

        $scope.status = {
            opened: false
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
                    tahun: this.tahun,
                    program: this.program,
                    sub_program: this.sub_program,
                    nama_kegiatan: this.nama_kegiatan,
                    lokasi:{
                        kecamatan:this.kecamatan.kecamatan,
                        desa:this.desa,
                        geo:this.geo
                    },
                    volume: this.volume,
                    unit: this.unit,
                    rencana_biaya: this.rencana_biaya,
                    sumber_dana: this.sumber_dana,
                    proposal:this.proposal,
                    no_reg_proposal:this.no_reg_proposal
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
        .filter('flatten', function () {
            return function (array, kecamatan) {
                if (!kecamatan) kecamatan = 'Bangli';
                return array.reduce(function (flatten, group) {
                    if (group.kecamatan == kecamatan) {
                        flatten =  group.desa;
                    }
                    return flatten;
                }, []);
            }
        })
        .controller('RencanaController', RencanaController);

    RencanaController.$inject = ['$scope', 'Global', 'Rencana', '$stateParams', '$state'];

})();
