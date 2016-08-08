angular
  .module('app')
  .component('registerForm', {
    templateUrl: 'app/components/Register.html',
    controller: Register,
    bindings: {
      userName: '<',
      password: '<',
      code: '<',
      dataLoading: '<',
      onSubmit: '&',
      onCodeChange: '&'
    }
  });

function Register() {
}

Register.prototype = {
  onSubmit: function () {
    this.onSubmit();
  },

  onCodeChange: function () {
    this.onCodeChange();
  }
};