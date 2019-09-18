angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '{{$ctrl.phoneId}} <phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);