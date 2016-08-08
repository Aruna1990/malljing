var navs = [{
  name: '个人中心',
  id: 0,
  active: true,
  enable: true,
  path: '/app/personal/settings'
}];

function NavService() {
}

NavService.prototype = {
  changeNav: function (toNav) {
    //Change nav
    return navs;
  }
};
