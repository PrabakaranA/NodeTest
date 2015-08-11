'use strict';

var formTemplate = angular.module('formTemplate', ['toastr', 
                                                   'ui.router', 
                                                   'formTemplate.controllers', 
                                                   'formTemplate.factories', 
                                                   'formTemplate.directives', 
                                                   'formTemplate.providers', 
                                                   'formTemplate.services', 
                                                   'formTemplate.filters',
                                                   'builder',
                                                   'builder.components',
                                                   'validator.rules'
                                                   ])
    .run(['$rootScope', '$state', '$stateParams', '$location', '$window', function ($rootScope, $state, $stateParams, $location, $window) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
}]);

angular.module('formTemplate.providers', []);

angular.module('formTemplate.controllers', []);

angular.module('formTemplate.factories', []);

angular.module('formTemplate.directives', []);

angular.module('formTemplate.services', []);

angular.module('formTemplate.filters', []);
