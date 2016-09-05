angular
  .module('app')
  .component('mjSettings', {
    templateUrl: 'app/personal/settings.html',
    controller: settingsCtrl
  });

/** @ngInject */
function settingsCtrl($rootScope, $state, todoService) {
  console.log('settingsCtrl');
  this.name = userInfo.name;
  this.password = '1';
  this.code = '';
  this.onSubmit = function () {
    console.log('[settingsCtrl] onSubmit');
    $rootScope.currentUser = userInfo;
    $state.go('app');
  };
}
