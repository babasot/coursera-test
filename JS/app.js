(function(){
	'use strict';

	angular.module('miApp', [])

	.controller('controller1', function($scope){
		$scope.name = 'Donivan';

		$scope.diHola = function(){
			return 'Hola que hace!';
		}

	});

})();