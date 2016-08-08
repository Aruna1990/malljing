angular
  .module('app')
  .component('cgAnalysis', {
    templateUrl: 'app/customerGroup/cgAnalysis.html',
    controller: cgAnalysisCtrl
  });

/** @ngInject */
function cgAnalysisCtrl($rootScope, $state, todoService, $injector, $timeout) {
  console.log('cgAnalysisCtrl');
  var ngTableParams;

  ngTableParams = $injector.get('NgTableParams');

  var self = this;
  self.cols = [{
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

  self.indexList = [{
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
  this.chartSexConfig = {
    options: {
      chart: {
          type: 'pie'
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.2f}%<br/><b>{point.name}</b>'
          }
        }
      }
    },
    series: [{
      data: [{
        name: '女',
        y: 870
      }, {
        name: '男',
        y: 868
      }]
    }],
    title: {
        text: ''
    },
    loading: false
  };

  this.chartCarConfig = {
    options: {
      chart: {
          type: 'pie'
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.2f}%<br/><b>{point.name}</b>'
          }
        }
      }
    },
    series: [{
      data: [{
        name: '有车',
        y: 846
      }, {
        name: '无车',
        y: 872
      }]
    }],
    title: {
        text: ''
    },
    loading: false
  };

  this.chartMarryConfig = {
    options: {
      chart: {
          type: 'column'
      },
      xAxis: {
        categories: ['未婚', '已婚'] //x轴数据
      }
    },
    series: [{
      data: [840, 872]
    }],
    title: {
        text: ''
    },
    loading: false
  };

  this.chartAgeConfig = {
    options: {
      chart: {
          type: 'column'
      },
      xAxis: {
        categories: ['19岁以下', '19-25岁', '26-35岁', '36-45岁', '46-55岁', '55岁以上'] //x轴数据
      }
    },
    series: [{
      data: [458, 798, 863, 783, 542, 369]
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

  $timeout(function() {
    self.reflow();
  },0);

  self.tableParams = new ngTableParams({}, {
    dataset: self.indexList
  });
  
  self.isLastPage = isLastPage;
  
  function isLastPage(){
    return self.tableParams.page() === totalPages();
  }
  
  function totalPages(){
    return Math.ceil(self.tableParams.total() / self.tableParams.count());
  }

  this.delete = function(index){
    for(var i=index; i<self.indexList.length; i++){

      if((i+1) != self.indexList.length){
        self.indexList[i] = self.indexList[i+1];
      }
      else{
        self.indexList.pop();
      }
    }
    console.log(self.indexList);

    self.tableParams = new ngTableParams({}, {
      dataset: self.indexList
    });
  }

  this.showDetails = function(row){
    this.showCustomDetails = true;
    this.selectedCustomId = row.id;
  }
  
  this.back = function(){
    window.history.back()
  };
}