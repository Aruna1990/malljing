angular
  .module('app')
  .component('mjChangepwd', {
    templateUrl: 'app/personal/resetpwd.html',
    controller: changepwdCtrl
  });

/** @ngInject */
function changepwdCtrl($rootScope, $state, todoService) {
  console.log('changepwdCtrl');
  this.name = userInfo.name;
  this.password = '1';
  this.code = '';

  this.onSubmit = function(){
    console.log('[changepwdCtrl] onSubmit');
    $rootScope.currentUser = userInfo;
    $state.go('app');
  }
}