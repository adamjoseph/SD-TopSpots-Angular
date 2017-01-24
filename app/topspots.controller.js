(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['topSpotsFactory', 'toastr'];

    /* @ngInject */
    function MainController(topSpotsFactory, toastr) {
        var vm = this;
        vm.title = 'MainController';

        activate();

        ////////////////

        function activate() {

          getTopSpots();

        }//close activate

        function getTopSpots() { 
          topSpotsFactory.getTopSpots().then(
          function(response) {
            vm.topspots = response.data;
            toastr.success('Data was found!');

            }, function(error) {
                if(error.data) {
                toastr.error('Sorry, but there was a problem: ' + error.data);
              } else {
                toastr.info('Data not found');
              }
            }
          )
        }

        vm.addrow = function() {
        
        vm.topspots.push({'name':vm.name, 'description':vm.description, 'location':vm.location});
        vm.name = '';
        vm.description = '';
        vm.location = '';
      };//closes addrow

    }//close MainController
})();//close function







