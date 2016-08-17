angular
  .module('app')
  .component('operation', {
    templateUrl: 'app/operation/operation.html',
    controller: operationCtrl
  });

/** @ngInject */
function operationCtrl($rootScope, $state, todoService, $injector, $location) {
  console.log('operationCtrl');
  var ngTableParams;

  ngTableParams = $injector.get('NgTableParams');

  this.openCgDefine = function(){
    console.log("openCgDefine");
    this.showCgDefine = true;
  }

  this.openAlertDialog = function(){
    console.log("openAddIndex");
    this.showAlertDialog = true;
  }

  var self = this;
  this.states = ['a','ab','bc', 'ccd'];
  self.cols = [{
    field: "id",
    title: 'ID',
    show: false
  }, {
    field: "time",
    title: "检查时间",
    sortable: "time",
    show: true,
  }, {
    field: "mallName",
    title: "场馆名称",
    sortable: "mallName",
    show: true,
  }, {
    field: "class",
    title: "检查分类",
    sortable: "class",
    show: true
  }, {
    field: "name",
    title: "检查项",
    sortable: "name",
    show: true
  }, {
    field: "closed",
    title: "已关闭告警",
    sortable: "closed",
    show: true
  }, {
    field: "handling",
    title: "处理中告警",
    sortable: "handling",
    show: true
  }, {
    field: "total",
    title: "告警总计",
    sortable: "total",
    show: true
  }];

  var getSplineConfig = function(xData, yData, unit, width){
    var yAxisMin = null, yAxisMax = null;
    var maxY, minY, delta;
    for(var i=0; i<yData.length; i++){
      yData[i] = Number(yData[i]);
      if(maxY == undefined || minY == undefined){
        maxY = yData[i];
        minY = yData[i];
      }else{
        if(maxY < yData[i]){
          maxY = yData[i];
        }
        if(minY > yData[i]){
          minY = yData[i];
        }
      }
    }
    delta = (maxY - minY)/5;
    yAxisMin = (minY - delta)>0 ? minY - delta : minY*2;
    yAxisMax = maxY + delta;

    //长度适配
    

    // for(var i=0; i<xData.length; i++){
    //   xData[i] = formatDate(xData[i]);//xData[i].slice(0, 4) + "-" + xData[i].slice(4,6)+ "-" +xData[i].slice(6);
    // }
    var config = {
      options: {
          exporting: {
              enabled: false
          },
          chart: {
            backgroundColor: null,
            borderWidth: 0,
            type: 'area',
            margin: [2, 0, 2, 0],
            width: width,
            height: 40,
            style: {
                overflow: 'visible'
            },
            skipClone: true
          },
          title: {
              text: ''
          },
          credits: {
              enabled: false
          },
          xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: [],
            visible: false,
            categories: [10,11,12,13,14,15,16,17,18,19,20,21,22] //x轴数据
          },
          yAxis: {
            min: yAxisMin,
            max: yAxisMax,
            visible: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            }
          },
          legend: {
              enabled: false
          },
          tooltip: {
              backgroundColor: "#fff",
              borderWidth: 0,
              shadow: false,
              useHTML: true,
              hideDelay: 0,
              shared: true,
              padding: 0,
              positioner: function (w, h, point) {
                  return { x: point.plotX - w / 2, y: point.plotY - h };
              },
              headerFormat: '<span style="font-size: 10px">' +  '{point.x}:</span><br/>',
              pointFormat: '<b>{point.y}</b> '+unit
          },
          plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            },
            series: {
                animation: false,
                lineWidth: 1,
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                marker: {
                    radius: 1,
                    states: {
                        hover: {
                            radius: 2
                        }
                    }
                },
                fillOpacity: 0.75
            },
            column: {
                negativeColor: '#910000',
                borderColor: 'silver'
            }
          },
      },
      noData:"暂无数据",
      lang:{
        noData:"暂无数据",
        "loading": "正在加载..."
      },
      series: [{
        color: '#B8EBFF',
          data: yData //Y轴数据
      }],
      loading: false
    };
    return config;
  };

  self.indexList = [{
    id:0,
    time:"2016/8/4",
    mallName:"百荣世贸二期",
    class: "报表进程",
    name: "xampp",
    closed:1 ,
    handling: 0,
    total: 1
  },{
    id:1,
    time:"2016/8/5",
    mallName:"百荣世贸二期",
    class: "第三方进程",
    name: "mysql",
    closed:1 ,
    handling: 0,
    total: 1
  },{
    id:2,
    time:"2016/8/6",
    mallName:"百荣世贸二期",
    class: "第三方进程",
    name: "tomcat",
    closed:1 ,
    handling: 0,
    total: 1
  },{
    id:3,
    time:"2016/8/7",
    mallName:"百荣世贸二期",
    class: "日指标阈值",
    name: "活跃用户数",
    closed:1 ,
    handling: 0,
    total: 1
  },{
    id:4,
    time:"2016/8/8",
    mallName:"百荣世贸二期",
    class: "日指标阈值",
    name: "客流量",
    closed:0 ,
    handling: 1,
    total: 1
  },{
    id:5,
    time:"2016/8/9",
    mallName:"百荣世贸二期",
    class: "小时指标零值",
    name: "小时数据",
    closed:1 ,
    handling: 0,
    total: 1
  },{
    id:6,
    time:"2016/8/10",
    mallName:"百荣世贸二期",
    class: "硬件负荷",
    name: "cpu",
    closed:1 ,
    handling: 0,
    total: 1
  }];

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

  this.showDetails = function(row){
     $state.go('app.home.indexdetails', {selectedId: row.id});
  }
  this.showCgAnalysis = function(row){
    $state.go('app.home.cganalysis');
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
    self.tableParams = new ngTableParams({}, {
      dataset: self.indexList
    });
  }
}