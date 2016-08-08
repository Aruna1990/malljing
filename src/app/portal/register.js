angular
  .module('app')
  .component('register', {
    templateUrl: 'app/portal/register.html',
    controller: registerCtrl
  });

function registerCtrl() {
  this.name = userInfo.name;
  this.password = '';
  this.code = '';
  console.log('Login');
}
 