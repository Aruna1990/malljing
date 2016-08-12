angular
  .module('app')
  .component('addIndex', {
    templateUrl: 'app/components/addIndex.html',
    controller: addIndexCtrl,
    bindings: {
      show: '='
    }
  });

/** @ngInject */
function addIndexCtrl($rootScope, $scope, $state, todoService, $timeout, $uibModal) {
  var self = this;

  var open = function () {
    console.log("open Dialog")
    var modalInstance = $uibModal.open({
      templateUrl: 'addIndexModal.html',
      controller: 'AddIndexModalInstanceCtrl',
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
  .controller('AddIndexModalInstanceCtrl', function ($scope, $injector, $uibModalInstance) {
    $scope.remove = function (scope) {
      scope.remove();
    };

    $scope.toggle = function (scope) {
      scope.toggle();
    };

    $scope.moveLastToTheBeginning = function () {
      var a = $scope.data.pop();
      $scope.data.splice(0, 0, a);
    };

    $scope.newSubItem = function (scope) {
      var nodeData = scope.$modelValue;
      nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
      });
    };

    $scope.collapseAll = function () {
      $scope.$broadcast('angular-ui-tree:collapse-all');
    };

    $scope.expandAll = function () {
      $scope.$broadcast('angular-ui-tree:expand-all');
    };
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

    $scope.list = [{
      "id": 1,
      "title": "node1",
      "nodes": [
        {
          "id": 11,
          "title": "node1.1",
          "nodes": [
            {
              "id": 111,
              "title": "node1.1.1",
              "nodes": []
            }
          ]
        },
        {
          "id": 12,
          "title": "node1.2",
          "nodes": []
        }
      ]
    },{
      "id": 2,
      "title": "node2",
      "nodrop": true,
      "nodes": [
        {
          "id": 21,
          "title": "node2.1",
          "nodes": []
        },
        {
          "id": 22,
          "title": "node2.2",
          "nodes": []
        }
      ]
    },{
      "id": 3,
      "title": "node3",
      "nodes": [
        {
          "id": 31,
          "title": "node3.1",
          "nodes": []
        }
      ]
    }];

    $scope.data = [{
      "id": 4,
      "title": "node 4"
    },{
      "id": 1,
      "title": "node 1"
    },{
      "id": 3,
      "title": "node 3"
    }];
});