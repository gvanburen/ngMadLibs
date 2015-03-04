angular.module('madLibs',[])
	.controller('madCtrl', ['$scope', function($scope){
		$scope.gender = 'male';
		$scope.charName = '';
		$scope.jobTitle = '';
		$scope.tediousTask = '';
		$scope.dirtyTask = '';
		$scope.celebrity = '';
		$scope.uselessSkill = '';
		$scope.adjective = '';
		$scope.obnoxiuousCelebrity = '';
		$scope.hugeNumber = '';


	}]);