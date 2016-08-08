angular
  .module('app')
  .component('resetpwdForm', {
    templateUrl: 'app/components/ResetPwd.html',
    controller: ResetPwd,
    bindings: {
      title: '<',
      toLogin: '<',
      submitBtnName:'<'
    }
  });

function ResetPwd() {
}

ResetPwd.prototype = {
  onSubmit: function () {
    this.onSubmit();
  },

  onCodeChange: function () {
    this.onCodeChange();
  }
};
