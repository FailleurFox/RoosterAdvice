angular.module('RoosterAdvice', []).controller('myCtrl', [ '$scope', function($scope) {
	$scope.text;
	$scope.helloWorld = function(){
		$scope.text = "Hello World !";
	};
}]);