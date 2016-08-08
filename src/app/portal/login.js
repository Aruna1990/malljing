angular
  .module('app')
  .component('login', {
    templateUrl: 'app/portal/login.html',
    controller: loginCtrl
  });

/** @ngInject */
function loginCtrl($rootScope, $state, todoService) {
  console.log('loginCtrl');
  this.name = userInfo.name;
  this.password = '1';
  this.code = '';

  this.onSubmit = function(){
    console.log('[loginCtrl] onSubmit');
    $rootScope.currentUser = userInfo;
    $state.go('app.home.watchlist');
  }
}
 