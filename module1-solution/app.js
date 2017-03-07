(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenuList = "";

  $scope.checkLunch = function () {
    var arrayOfLunchMenuItems = $scope.lunchMenuList.split(',').filter(function(str){return str && str.trim().length});
    if (arrayOfLunchMenuItems.length === 0) {
      $scope.message =  "Please enter data first";
    } else if (arrayOfLunchMenuItems.length > 3) {
      $scope.message = "Too much!";
    } else {
      $scope.message = "Enjoy!";
    }
  }
};

})();
