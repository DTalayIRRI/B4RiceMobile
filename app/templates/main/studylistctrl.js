'use strict';
angular.module('BIMSDataCollection.controllers')

.controller('StudyListCtrl',  function($scope,$http, $stateParams, StudyManager) {
	$scope.studies = [];

	// StudyManager.getStudies().then(function(doc){
	// 	$scope.studies = doc;

	// }, function(err){
	// 	console.log(err);
	// } );




$http.get('http://172.29.4.166:8080/WS-RS/rest/SingleTrial/getResultFiles/lina').
  success(function(data) {
	console.log("SUCCESS!!!!!!!!"); 
  }).
  error(function(data, status, headers, config) {
    
  	console.log("ERROR",status);
    // console.log(data,status,headers,config);
  });

	// StudyManager.getStudies().success(function(data){
	// 	console.log("DATA",data);
	// 	$scope.studies = data;
	// 	for(var i = 0; i < $scope.studies.length; i++){
	// 		console.log("inserting study");
	// 		$scope.studies[i]._id = "studyid_" + i; 
	// 		StudyManager.insertStudy($scope.studies[i]);
	// 	}


	// });
	// StudyManager.getObservation().success(function(data){

	// 			for(var i = 0; i < data.length; i++){
	// 				console.log("inserting row");
	// 				data[i]._id = "rowid_" + i;
	// 				StudyManager.insertObservation(data[i]);
	// 			}
	// });

});