angular.module('app').controller("MainController", function($scope, Sonnets){
    $scope.main = {
        title: 'Sonnets App',
        sonnets: Sonnets.getSonnets()
    };
});