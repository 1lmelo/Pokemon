angular.module('pokemon').controller('ItemController', function($scope, $http) {
	
	$scope.item = [];
	$scope.filtro = '';


	$http.get('https://orgnova.concore.io/pokemon/1').success(function(retorno) {
		console.log(retorno);
		$scope.item = retorno;
	})
	.error(function(erro) {
		console.log(erro);
	});

});



