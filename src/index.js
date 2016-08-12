angular
  .module('app', ['ui.router', 'ui.bootstrap', 'ui.tree', 'ngTable','highcharts-ng'])
  .service('todoService', TodoService)
  // .service('navService', NavService);



angular
.module('app')
.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();
      console.log('go to login view')
      $state.go('welcome.login');
    }

    console.log(toState.name)
    if (toState.name == 'app') {
      event.preventDefault();
      $state.go('app.home.watchlist');
    }
  });
});