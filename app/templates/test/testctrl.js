'use strict';
angular.module('BIMSDataCollection.controllers')

.controller('TestBarcodeCtrl',  function($scope, $stateParams, StudyManager) {
	$scope.startBarcode = function(){
		var scanner = cordova.require("com.phonegap.plugins.barcodescanner.BarcodeScanner");
		scanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
	}



}).controller('TestAccountCtrl',  function($scope, $stateParams, StudyManager,$cordovaOauth) {

    $scope.googleLogin = function() {
        $cordovaOauth.google("930724355758-72vjrkgagbnfhol1uo11js9t11bennpb.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(error);
        });
    }

});