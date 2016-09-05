angular
  .module('app')
  .component('loginForm', {
    templateUrl: 'app/components/Login.html',
    controller: Login,
    bindings: {
      username: '=',
      password: '=',
      code: '=',
      dataLoading: '=',
      onSubmit: '&',
      onCodeChange: '&'
    }
  });

function Login() {
}

Login.prototype = {
  onSubmit: function () {
    console.log('登录提交');
    this.onSubmit();
  },

  onCodeChange: function () {
    this.onCodeChange();
  }
};
