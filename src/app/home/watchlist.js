angular
  .module('app')
  .component('watchList', {
    templateUrl: 'app/home/watchlist.html',
    controller: watchlistCtrl
  });

/** @ngInject */
function watchlistCtrl($rootScope, $state, todoService, $injector, $location, $timeout, $uibModal) {
  console.log('watchlistCtrl');
  var self = this;
  this.kanbanTabs = $rootScope.kanbanTabs;
  this.activeKanban = this.kanbanTabs[0];

  this.editKanban = false;
  this.newKanbanName = this.activeKanban.name;

  this.list = this.activeKanban.cardList;
  this.sortingLog = [];
  this.sortableOptions = {
    update: function(e, ui) {
      var logEntry = tmpList.map(function(i){
        return i.value;
      }).join(', ');
      self.sortingLog.push('Update: ' + logEntry);
    },
    stop: function(e, ui) {
      // this callback has the changed model
      var logEntry = tmpList.map(function(i){
        return i.value;
      }).join(', ');
      self.sortingLog.push('Stop: ' + logEntry);
    }
  };
  this.reflow = function () {
    console.log("reflow");
    $rootScope.$broadcast('highchartsng.reflow');
  };
  this.editKanbanName = function(isEdit, isSave){
    if(isSave){
      this.activeKanban.name = this.newKanbanName;
    }
    this.editKanban = isEdit;
  }
  this.addNewKanban = function(){    
    console.log("open Dialog")
    var modalInstance = $uibModal.open({
      templateUrl: 'addKanbanModal.html',
      controller: 'AddKanbanModalInstanceCtrl',
      size: 'sm',
      resolve: {
        // items: function (newCg) {
        //   return newCg;
        // }
      }
    });

    modalInstance.result.then(function (newList) {
      // $scope.selected = selectedItem;
      // self.kanbanTabs = newList;
    }, function () {
      // self.show = false;
      // $log.info('Modal dismissed at: ' + new Date());
    });
  }
  this.changeKanban = function(tab){
    this.activeKanban.active = false;
    this.activeKanban = tab;
    this.activeKanban.active = true;
    
    $timeout(function() {
      self.reflow();
    },0);
  }

  this.delKanban = function(){    
    console.log("open Dialog")
    var modalInstance = $uibModal.open({
      templateUrl: 'delKanbanModal.html',
      controller: 'DelKanbanModalInstanceCtrl',
      size: 'sm',
      resolve: {
        kanban: function () {
          return self.activeKanban;
        }
      }
    });

    modalInstance.result.then(function (newList) {
      // $scope.selected = selectedItem;
      // self.kanbanTabs = newList;
      self.activeKanban = self.kanbanTabs[0];
    }, function () {
      // self.show = false;
      // $log.info('Modal dismissed at: ' + new Date());
    });
  }
  $timeout(function() {
    self.reflow();
  },0);

}



angular
  .module('app')
  .controller('AddKanbanModalInstanceCtrl', function ($rootScope, $scope, $injector, $uibModalInstance) {
    $scope.newKanbanName = "";

    $scope.$watch("newKanbanName", function(){
      if($scope.newKanbanName != ""){
        $scope.msg = null;
      }
    });
    
    $scope.ok = function () {
      if($scope.newKanbanName == ""){
        $scope.msg = "请输入看板名称";
        return;
      }
      for(var i = 0; i < $rootScope.kanbanTabs.length; i++){
        if($scope.newKanbanName == $rootScope.kanbanTabs[i].name){
          $scope.msg = "名称被占用";
          return;
        }
      }
      $rootScope.kanbanTabs.push({
        id: $rootScope.kanbanTabs.length,
        name: $scope.newKanbanName,
        active: false,
        cardList:[]
      });
      $uibModalInstance.close($rootScope.kanbanTabs);
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
});

angular
  .module('app')
  .controller('DelKanbanModalInstanceCtrl', function ($rootScope, $scope, $injector, $uibModalInstance, kanban) {
    $scope.kanban = kanban;
    
    $scope.ok = function () {
      for(var i = 0; i < $rootScope.kanbanTabs.length; i++){
        if($scope.kanban.id == $rootScope.kanbanTabs[i].id){
          $rootScope.kanbanTabs.splice(i,1);
          break;
        }
      }
      $uibModalInstance.close(true);
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
});