angular
  .module('app')
  .component('topBar', {
    templateUrl: 'app/components/TopBar.html',
    controller: TopBar,
    bindings: {
      navs: '<'
    }
  });

/** @ngInject */
function TopBar($location) {
  var i;
  console.log('[TopBar]');
  var pathArray = $location.$$path.split('/');
  pathArray.shift();

  for (i = 0; i < this.navs.length; i++) {
    var navPath = this.navs[i].path.split('/');
    navPath.shift();
    if (pathArray[1] === navPath[1]) {
      this.navs[i].active = true;
    }
  }
}

TopBar.prototype = {
  onClick: function (toNav) {
    var i;
    if (!this.navs[toNav].enable) {
      return;
    }

    if (this.navs[toNav].active) {
      return;
    }

    for (i = 0; i < this.navs.length; i++) {
      if (i === toNav) {
        this.navs[i].active = true;
      } else {
        this.navs[i].active = false;
      }
    }
  }
};
