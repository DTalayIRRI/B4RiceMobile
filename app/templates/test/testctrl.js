'use strict';
angular.module('BIMSDataCollection.controllers')

.controller('TestBarcodeCtrl',  function($scope, $stateParams, StudyManager,$cordovaBarcodeScanner) {
	$scope.barcodeResult = {};

  $scope.startBarcode = function(){
    $cordovaBarcodeScanner
    .scan()
    .then(function(barcodeData) {
      console.log(barcodeData);
      $scope.barcodeResult = barcodeData;
    }, function(error) {
      console.log(error);
    });

  }



}).controller('TestAccountCtrl',  function($scope, $stateParams, StudyManager,$cordovaOauth,$http) {

  $scope.googleLogin = function() {
    $cordovaOauth.google("930724355758-72vjrkgagbnfhol1uo11js9t11bennpb.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"]).then(function(result) {
      console.log(result);
      $http.get('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + result.access_token).
      success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(data);
  }).
      error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log("ERROR");
  });
    }, function(error) {
      console.log(error);
    });
  }

});