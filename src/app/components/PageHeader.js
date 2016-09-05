angular
  .module('app')
  .component('viewHeader', {
    templateUrl: 'app/components/PageHeader.html',
    controller: PageHeader,
    bindings: {
      text: '<',
      tips: '<',
      width: '<'
    }
  });

/** @ngInject */
function PageHeader(todoService) {
  this.showTips = false;
}

PageHeader.prototype = {
  openTips: function () {
    this.showTips = true;
  },
  closeTips: function () {
    this.showTips = false;
  }
};
