angular
  .module('app')
  .component('resetpwd', {
    templateUrl: 'app/portal/resetPwd.html',
    controller: resetPwdCtrl
  });

function resetPwdCtrl() {
  this.name = userInfo.name;
  this.password = '';
  this.code = '';
  console.log('Login');
}
