'use strict';

describe('Controller: ResetpwdCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var ResetpwdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResetpwdCtrl = $controller('ResetpwdCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
