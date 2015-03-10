angular.module('madLibs',['ngAnimate'])
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

		$scope.resetMad = function(){
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
			$scope.madInputs.$submitted = false;
		}

	}]);