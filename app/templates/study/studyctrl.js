'use strict';
angular.module('BIMSDataCollection.controllers')

.controller('ObservationListCtrl',  function($scope, $stateParams, StudyManager) {
	$scope.observations = [];

	var promise = StudyManager.getObservation($stateParams.row).then(function(doc){
		console.log(doc);
		$scope.observations = doc;

	}, function(err){
		console.log(err);
	} );




}).controller('ObservationFormCtrl',  function($scope, $stateParams, StudyManager) {
	$scope.observation = [];
	
	console.log("ROW",$stateParams.row);
	StudyManager.getObservationRow($stateParams.row).then(function(doc){
		console.log("Obv",doc);
		$scope.observation = doc[0];

	}, function(err){
		console.log(err);
	} );


	$scope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){ 
			console.log("OBV",$scope.observation);
			StudyManager.saveObservationRow($scope.observation);

		});
});;