angular.module('app').controller("MainController", function($scope, Sonnets){
    $scope.main = {
        title: 'Sonnets App',
        sonnetFilterText: '',
        sonnets: Sonnets.getSonnets()
    };

    $scope.sonnetClicked = function(sonnet){
        alert('Sonnet: ' + sonnet.lines)
    };

    $scope.filterSonnets = function(value, index, array) {
        if ($scope.main.sonnetFilterText && $scope.main.sonnetFilterText.length > 0) {
            return value.number == $scope.main.sonnetFilterText;
        } else {
            return true;
        }
    };
});