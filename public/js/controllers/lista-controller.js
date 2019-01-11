angular.module('pokemon').controller('PokemonController', function($scope, $http) {
	
	$scope.pokemon = [];
	$scope.filtro = '';

	$http.get('https://orgnova.concore.io/pokemon').success(function(retorno) {
		console.log(retorno);
		$scope.pokemon = retorno;
	})
	.error(function(erro) {
		console.log(erro);
	});

});


