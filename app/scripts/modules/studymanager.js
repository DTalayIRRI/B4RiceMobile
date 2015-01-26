angular.module('BIMSDataCollection.controllers')
.factory('StudyManager', function($http,$q) {
	return {
		getStudies: function() {
			var map= function(doc){
				if(doc.studyname){
					emit(doc);
				}
			};
			var deferred = $q.defer();
			POUCH.query({map: map}, function(err, doc) {
				if(err){
					deferred.reject(err);
				} else {
					deferred.resolve(getCleanValueFromKey(doc));
				}
			});
			return deferred.promise;




		},
		insertStudy: function(study){
			var db = new PouchDB(DATABASE_NAME,{adapter : 'websql'});
			db.put(study, function callback(err, result) {
				if (!err) {
					console.log('Successfully posted a study!');
				}
				else{
					console.log(err,result)
				}
			});
		},insertObservation: function(observation){
			var db = new PouchDB(DATABASE_NAME,{adapter : 'websql'});
			db.put(observation,  function callback(err, result) {
				if (!err) {
					console.log('Successfully posted an observation!');
				}
				else{
					console.log("Observation ERROR:  " +err ,result)
				}
			});
		},
		getObservation: function(){
			var map= function(doc){
				if(doc.row && doc.header){
					emit(doc);
				}
			};
			var deferred = $q.defer();
			POUCH.query({map: map}, function(err, doc) {
				if(err){
					deferred.reject(err);
				} else {
					deferred.resolve(getCleanValueFromKey(doc));
				}
			});
			return deferred.promise;
		},
		saveObservationRow: function(rowdata){
			POUCH.put(rowdata, rowdata._id, rowdata._rev, 
				function(err, response) {
					console.log(err,response);
				});
		},
		getObservationRow: function(rownum){

			var deferred = $q.defer();
			POUCH.query({map: function(doc,emit){
				if(doc.row && doc.header && doc.row == rownum){
					emit(doc);
					

				}
			}}, function(err, doc) {
				if(err){
					deferred.reject(err);
				} else {
					deferred.resolve(getCleanValueFromKey(doc));
				}
			});
			return deferred.promise;
		}
	};
});