'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mainFunc = {
    	data: {
            keyword: ''
        },
    	init: function() {
    		var _self = this;
    		_self.getCourse();
    	},
    	getCourse: function() {
    		$http.get('../api/index.php/Course/getCourse')
    		.success(function(data) {
    			if(data.success) {
    				$scope.courseLists = data.item;
    			}
    		})
    	},
        /* 关键字搜索 */
        searchFunc: function() {
            var _self = this;
            if(_self.data.keyword) {
                console.log(111, _self.data.keyword);
                $http.get('../api/index.php/Course/getCourse?keyword='+ _self.data.keyword)
                    .success(function(data) {
                        console.log(data);
                        if(data.success) {
                            $scope.courseLists = data.item;
                        }
                    })
            }
        }
    }
    });
