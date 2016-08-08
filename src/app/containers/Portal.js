angular
  .module('app')
  .component('portal', {
    templateUrl: 'app/containers/Portal.html',
    controller: Portal
  });

function Portal() {
  this.userInfo = [userInfo];
  console.log('Portal');
}
