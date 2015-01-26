'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('BIMSDataCollection', ['ionic', 'ngCordova', 'config', 'BIMSDataCollection.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if(window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.studylist', {
    url: '/studylist',
    views: {
      'menuContent' :{
        templateUrl: 'templates/main/studylist.html',
        controller: 'StudyListCtrl'
      }
    }
  }).state('app.observationlist', {
    url: '/observation/:studyid',
    views: {
      'menuContent' :{
        templateUrl: 'templates/study/observation_data_list.html',
        controller: 'ObservationListCtrl'
      }
    }
  }).state('app.observationform', {
    url: '/observationform/:row',
    views: {
      'menuContent' :{
        templateUrl: 'templates/study/observation_data.html',
        controller: 'ObservationFormCtrl'
      }
    }
  }).state('app.testbarcode', {
    url: '/testbarcode',
    views: {
      'menuContent' :{
        templateUrl: 'templates/test/testbarcode.html',
        controller: 'TestBarcodeCtrl'
      }
    }
  }).state('app.testaccount', {
    url: '/testaccount',
    views: {
      'menuContent' :{
        templateUrl: 'templates/test/testmail.html',
        controller: 'TestAccountCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/studylist');
});

