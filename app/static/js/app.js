// JavaScript Code for Thumbnail API 

var app = angular.module("AppMdlThumbnail", []);

app.controller('AppCtrlrThumbnail', ['$scope', 'thumbnailsrvc', function($scope, thumbnailsrvc){
    thumbnailsrvc.then(function(data){
        $scope.dataObj = data;
    });
}]);