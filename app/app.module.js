'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngRoute',
  'phoneDetail',
  // ...which depends on the `phoneList` module
  'phoneList'
]);