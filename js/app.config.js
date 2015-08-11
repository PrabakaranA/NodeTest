angular.module('formTemplate')
    .config(['$stateProvider',
             '$urlRouterProvider',
             "apiProvider",

    function ($stateProvider, $urlRouterProvider, apiProvider)
    {
            $urlRouterProvider.otherwise('/formCreator');
            $stateProvider
                .state('formCreator', {
                    url: '/formCreator',
                    controller:'FormCreatorController',
                    templateUrl: 'views/formCreator.html'
                });
             apiProvider.setApiUrl("");
          
    }]);
