angular
  .module('app')
  .component('cgDefine', {
    templateUrl: 'app/customerGroup/cgDefine.html',
    controller: cgDefineCtrl,
    bindings: {
      show: '='
    }
  });

/** @ngInject */
function cgDefineCtrl($rootScope, $scope, $state, todoService, $timeout, $uibModal) {
  var self = this;

  var open = function () {
    console.log("open Dialog")
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        // items: function (newCg) {
        //   return newCg;
        // }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      self.show = false;
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.show = this.show;

  $scope.$watch('show', function(){
    console.log("status:" + self.show)
    if(self.show) open();
  });
  var self = this;
}


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular
  .module('app')
  .controller('ModalInstanceCtrl', function ($scope, $injector, $uibModalInstance) {

    var ngTableParams;
    ngTableParams = $injector.get('NgTableParams');

    $scope.cgId = "";
    $scope.cgName = "";

    $scope.cols = [{
      field: "id",
      title: "访客标识",
      show: true,
    }, {
      field: "first",
      title: "首次访问时间",
      show: true,
    }, {
      field: "last",
      title: "最后访问时间",
      show: true
    }, {
      field: "visitcount",
      title: "进店次数",
      sortable: "visitcount",
      show: true
    }, {
      field: "timecount",
      title: "进店驻留总时长",
      sortable: "timecount",
      show: true
    }];

    $scope.indexList = [{
      id:'8ac1dc6a-49e0-11e6-83fc-90b11c32f3cc',
      first:"2016-06-05 10:00",
      last:"2016-08-05 10:00",
      visitcount:"5",
      timecount: 140
    },{
      id:'8ac1dc6a-49e0-11e6-83fc-90b11c32f3cc',
      first:"2016-06-05 10:00",
      last:"2016-08-05 10:00",
      visitcount:"5",
      timecount: 140
    },{
      id:'8ac1dc6a-49e0-11e6-83fc-90b11c32f3cc',
      first:"2016-06-05 10:00",
      last:"2016-08-05 10:00",
      visitcount:"5",
      timecount: 140
    },{
      id:'8ac1dc6a-49e0-11e6-83fc-90b11c32f3cc',
      first:"2016-06-05 10:00",
      last:"2016-08-05 10:00",
      visitcount:"5",
      timecount: 140
    },{
      id:'8ac1dc6a-49e0-11e6-83fc-90b11c32f3cc',
      first:"2016-06-05 10:00",
      last:"2016-08-05 10:00",
      visitcount:"5",
      timecount: 140
    }];

    $scope.tableParams = new ngTableParams({}, {
      dataset: $scope.indexList
    });
    
    $scope.ok = function () {
      $uibModalInstance.close({
        id: $scope.cgId,
        name: $scope.cgName
      });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
});