angular
  .module('app')
  .component('sideBar', {
    templateUrl: 'app/components/SideBar.html',
    controller: SideBar,
    bindings: {
      navs: '<'
    }
  });

/** @ngInject */
function SideBar($location) {
  var pathArray = $location.$$path.split('/');
  pathArray.shift();
  for(var i=0; i<this.navs.length; i++){
    var navPath = this.navs[i].path.split('/');
    navPath.shift();
    if(this.navs[i].children){
      for(var j=0; j<this.navs[i].children.length; j++){
        var navPath_j = this.navs[i].children[j].path.split('/');
        navPath_j.shift();
        if(pathArray[2] == navPath_j[2]){
          this.navs[i].active = true;
          this.navs[i].children[j].active = true;
        }
      }
    }else{
      if(pathArray[2] == navPath[2]){
        this.navs[i].active = true;
      }
    }
  }
};

SideBar.prototype = {
  onClick: function(toNav, level, parentNav){
    if(!this.navs[toNav].enable) return;

    if(level == 1){
      if(this.navs[toNav].active) return;

      for(var i=0; i<this.navs.length; i++){
        if(i == toNav){
          this.navs[i].active = true;
          if(this.navs[i].children){
            this.navs[i].children[0].active = true;
          }
        }else{
          this.navs[i].active = false;
          if(this.navs[i].children){
            for(var j=0; j<this.navs[i].children.length; j++){
              this.navs[i].children[j].active = false;
            }
          }
        }
        
      }
    }else if(level == 2){
      if(this.navs[parentNav].active && this.navs[parentNav].children[toNav].active) return;
      if(!this.navs[parentNav].active){
        for(var i=0; i<this.navs.length; i++){
          if(i == parentNav){
            this.navs[i].active = true;
            if(this.navs[i].children){
              this.navs[i].children[toNav].active = true;
            }
          }else{
            this.navs[i].active = false;
            if(this.navs[i].children){
              for(var j=0; j<this.navs[i].children.length; j++){
                this.navs[i].children[j].active = false;
              }
            }
          }
        }
      }else{
        for(var i=0; i<this.navs[parentNav].children.length; i++){
          this.navs[parentNav].children[i].active = false;
        }
        this.navs[parentNav].children[toNav].active = true;
      }
    }
  }
};