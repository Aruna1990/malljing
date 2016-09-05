angular
  .module('app')
  .component('customDetails', {
    templateUrl: 'app/customerGroup/customerDetails.html',
    controller: customDetailsCtrl,
    bindings: {
      customId: '<',
      show: '<'
    }
  });

/** @ngInject */
function customDetailsCtrl($rootScope, $state, todoService, $injector, $timeout) {
  console.log('customDetailsCtrl');
  var NgTableParams;

  NgTableParams = $injector.get('NgTableParams');

  var self = this;
  self.cols = [{
    field: "time",
    title: "指标",
    show: true
  }, {
    field: "action",
    title: "行为",
    show: true
  }];

  self.indexList = [{
    id: 0,
    time: "2016-07-15 13:07:13",
    action: "进入 店铺 ZARA"
  }, {
    id: 1,
    time: "2016-07-15 13:07:13",
    action: "进入 店铺 ZARA"
  }, {
    id: 2,
    time: "2016-07-15 13:07:13",
    action: "进入 店铺 ZARA"
  }, {
    id: 3,
    time: "2016-07-15 13:07:13",
    action: "进入 店铺 ZARA"
  }, {
    id: 4,
    time: "2016-07-15 13:07:13",
    action: "进入 店铺 ZARA"
  }];

  this.chartThredConfig = {
    options: {
      chart: {
        type: 'line'
      }
    },
    series: [{
      data: [10, 15, 12, 8, 7]
    }],
    title: {
      text: ''
    },
    loading: false
  };

  this.chartSexConfig = {
    options: {
      chart: {
        type: 'pie'
      }
    },
    series: [{
      data: [10, 15, 12, 8, 7]
    }],
    title: {
      text: ''
    },
    loading: false
  };

  this.chartDeviceConfig = {
    options: {
      chart: {
        type: 'pie'
      }
    },
    series: [{
      data: [10, 15, 12, 8, 7]
    }],
    title: {
      text: ''
    },
    loading: false
  };

  this.chartPositionConfig = {
    options: {
      chart: {
        type: 'pie'
      }
    },
    series: [{
      data: [10, 15, 12, 8, 7]
    }],
    title: {
      text: ''
    },
    loading: false
  };

  this.reflow = function () {
    console.log("reflow");
    $rootScope.$broadcast('highchartsng.reflow');
  };
  $timeout(function () {
    self.reflow();
  }, 0);
  self.tableParams = new NgTableParams({}, {
    dataset: self.indexList
  });
  self.isLastPage = isLastPage;
  function isLastPage() {
    return self.tableParams.page() === totalPages();
  }
  function totalPages() {
    return Math.ceil(self.tableParams.total() / self.tableParams.count());
  }
  this.delete = function (index) {
    for (var i = index; i < self.indexList.length; i++) {
      if ((i + 1) === self.indexList.length) {
        self.indexList.pop();
      } else {
        self.indexList[i] = self.indexList[i + 1];
      }
    }
    console.log(self.indexList);

    self.tableParams = new NgTableParams({}, {
      dataset: self.indexList
    });
  };
}
