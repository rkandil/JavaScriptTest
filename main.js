angular.module('app').controller("MainController", function($scope, Sonnets){
    $scope.main = {
        title: 'Sonnets App',
        sonnets: Sonnets.getSonnets()
    };

    $scope.sonnetClicked = function(sonnet){
        alert('Sonnet: ' + sonnet.lines)
    };
});