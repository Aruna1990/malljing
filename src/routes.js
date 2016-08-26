angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/welcome/login');

  $stateProvider
    .state('welcome', {
      abstract: true,
      url: '/welcome',
      template: '<portal></portal>',
      data: {
        requireLogin: false
      }
    })
    .state('welcome.login', {
      url: '/login',
      template: '<login></login>',
      data: {
        requireLogin: false
      }
    })
    .state('welcome.register', {
      url: '/register',
      template: '<register></register>',
      data: {
        requireLogin: false
      }
    })
    .state('welcome.resetpwd', {
      url: '/resetpwd',
      template: '<resetpwd></resetpwd>',
      data: {
        requireLogin: false
      }
    })
    .state('app', {
      abstract: true,
      url: '/app',
      template: '<malljing-app></malljing-app>',
      data: {
        requireLogin: false
      }
    })
    .state('app.personal', {
      abstract: true,
      url: '/personal',
      template: '<personal></personal>',
      data: {
        requireLogin: false
      }
    })
    .state('app.personal.settings', {
      url: '/settings',
      template: '<mj-settings></mj-settings>',
      data: {
        requireLogin: false
      }
    })
    .state('app.personal.resetpwd', {
      url: '/resetpwd',
      template: '<mj-changepwd></mj-changepwd>',
      data: {
        requireLogin: false
      }
    })
    .state('app.personal.messages', {
      url: '/messages',
      template: '<mj-messages></mj-messages>',
      data: {
        requireLogin: false
      }
    })
    .state('app.home', {
      abstract: true,
      url: '/home',
      template: '<home></home>',
      data: {
        requireLogin: false
      }
    })
    .state('app.home.watchlist', {
      abstract: false,
      url: '/watchlist',
      template: '<watch-list></watch-list>',
      data: {
        requireLogin: false
      }
    })
    .state('app.home.indexdetails', {
      abstract: false,
      url: '/indexdetails/:selectedId',
      template: '<index-details></index-details>',
      data: {
        requireLogin: false
      }
    })
    .state('app.home.cganalysis', {
      abstract: false,
      url: '/cganalysis',
      template: '<cg-analysis></cg-analysis>',
      data: {
        requireLogin: false
      }
    })
    .state('app.index', {
      abstract: true,
      url: '/index',
      template: '<mj-index></mj-index>',
      data: {
        requireLogin: false
      }
    })
    .state('app.index.indexList', {
      abstract: false,
      url: '/indexList',
      template: '<index-list></index-list>',
      data: {
        requireLogin: false
      }
    })
    .state('app.index.cganalysis', {
      abstract: false,
      url: '/cganalysis',
      template: '<cg-analysis></cg-analysis>',
      data: {
        requireLogin: false
      }
    })
    .state('app.index.indexdetails', {
      abstract: false,
      url: '/indexdetails/:selectedId',
      template: '<index-details></index-details>',
      data: {
        requireLogin: false
      }
    })
    .state('app.mall', {
      abstract: true,
      url: '/mall',
      template: '<mj-mall></mj-mall>',
      data: {
        requireLogin: false
      }
    })
    .state('app.mall.rtmonitor', {
      abstract: false,
      url: '/rtmonitor',
      template: '<mj-monitor></mj-monitor>',
      data: {
        requireLogin: false
      }
    })
    .state('app.mall.indexdetails', {
      abstract: false,
      url: '/indexdetails/:selectedId',
      template: '<index-details></index-details>',
      data: {
        requireLogin: false
      }
    })
    .state('app.mall.cganalysis', {
      abstract: false,
      url: '/cganalysis',
      template: '<cg-analysis></cg-analysis>',
      data: {
        requireLogin: false
      }
    })
    .state('app.mall.reportexport', {
      abstract: false,
      url: '/reportexport',
      template: '<report-export></report-export>',
      data: {
        requireLogin: false
      }
    })
    .state('app.mall.pfanalysis', {
      abstract: false,
      url: '/pfanalysis',
      template: '<h1 style="text-align:center;"><i class="glyphicon glyphicon-gift" style="color:#3c763d;"></i>客流分析，敬请期待。</h1>',
      data: {
        requireLogin: false
      }
    })
    .state('app.operator', {
      abstract: false,
      url: '/operator',
      template: '<operation></operation>',
      data: {
        requireLogin: false
      }
    });

    $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
      var loginModal, $http, $state;

      // this trick must be done so that we don't receive
      // `Uncaught Error: [$injector:cdep] Circular dependency found`
      $timeout(function () {
        $http = $injector.get('$http');
        $state = $injector.get('$state');
      });

      return {
        responseError: function (rejection) {
          if (rejection.status !== 401) {
            return rejection;
          }

          var deferred = $q.defer();

          $state.go('welcome.login');

          return deferred.promise;
        }
      };
    });
}
