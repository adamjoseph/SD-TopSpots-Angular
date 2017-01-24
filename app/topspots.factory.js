(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('topSpotsFactory', topSpotsFactory);

    topSpotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function topSpotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots() {
        	var defer = $q.defer();

        	$http({
        		method: 'GET',
        		url: '../topspots.json'
        	}).then(function(response) {
        		
        		if(typeof response.data == 'object') {
        		defer.resolve(response);
        		} else {
        			defer.reject('No Data Found');
        		}

        	}, function(error) {
        		defer.reject(error);

        	});

        	return defer.promise;
        }
    }
})();