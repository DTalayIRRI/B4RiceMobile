'use strict';
angular.module('BIMSDataCollection.controllers')

.controller('AppCtrl', function($scope, $ionicModal, $timeout,StudyManager,$cordovaOauth,$http) {
  // Form data for the login modal
  $scope.loginData = {};

  $scope.isUserLogged = false;


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
  	scope: $scope
  }).then(function(modal) {
  	$scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
  	$scope.modal.hide();
  },

  // Open the login modal
  
  $scope.login = function() {
  	$scope.modal.show();

  	var promise = StudyManager.getAccount().then(function(doc){
  		console.log(doc);
  		$scope.loginData = doc;
  		$scope.isUserLogged = true;

  	}, function(err){
  		console.log(err);
  	} );



  };

$scope.doLogout = function(){
  	POUCH.remove("account");
  	$scope.isUserLogged = false;
  }
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

  	$cordovaOauth.google("930724355758-72vjrkgagbnfhol1uo11js9t11bennpb.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"]).then(function(result) {
  		console.log(result);
  		$http.get('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + result.access_token).
  		success(function(data, status, headers, config) {
  			console.log(data);
  			POUCH.put(data, 'account', function(err, response) { });
  			$scope.loginData = data;
  			$scope.isUserLogged = true;
  		}).
  		error(function(data, status, headers, config) {
  			console.log("ERROR");
  		});
  	}, function(error) {
  		console.log(error);
  	});


  	$timeout(function() {
  		$scope.closeLogin();
  	}, 1000);
  }


//   cordova.plugins.DeviceAccounts.get(function(accounts){
//   // accounts is an array with objects containing name and type attributes
//          console.log('account registered on this device:', accounts);
//       }, function(error){
//           console.log('Fail to retrieve accounts, details on exception:', error);
//       }
// );
})

.controller('PlaylistsCtrl', function($scope) {
	$scope.playlists = [
	{ title: 'Reggae', id: 1 },
	{ title: 'Chill', id: 2 },
	{ title: 'Dubstep', id: 3 },
	{ title: 'Indie', id: 4 },
	{ title: 'Rap', id: 5 },
	{ title: 'Cowbell', id: 6 }
	];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
