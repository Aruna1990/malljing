angular
  .module('app', ['ui.router', 'ui.bootstrap', 'ui.tree', 'ui.sortable', 'ngTable', 'highcharts-ng'])
  .service('todoService', TodoService);

angular
  .module('app')
  .run(function ($rootScope, $state) {
    $rootScope.kanbanTabs = [{
      id: 0,
      name: '基础看板',
      active: true,
      cardList: [{
        text: "标题",
        type: "chart",
        index: 0,
        query: {
          timeType: "日",
          area: {
            id: null,
            name: "全部空间"
          },
          dim: {
            id: null,
            name: "维度值"
          },
          time: ["2016-08-29", "2016-08-29"]
        },
        data: {
          name: "人均驻留时长",
          unit: "分钟",
          value: 17.96,
          _dValue: 17.78,
          doD: 1.01
        },
        chartConfig: {
          options: {
            chart: {
              type: 'line'
            },
            legend: {
              enabled: false
            },
            xAxis: {
              categories: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
            },
            title: {
              text: ''
            }
          },
          series: [{
            data: [1577, 1558, 1604, 1480, 1308, 1385, 1301, 1387, 1616, 1417, 1046, 495, 215]
          }],
          title: {
            text: ''
          },
          loading: false
        }
      }, {
        text: "标题",
        type: "chart",
        index: 1,
        data: {
          name: "人均驻留时长",
          unit: "分钟",
          value: 17.96,
          _dValue: 17.78,
          doD: 1.01
        },
        query: {
          timeType: "日",
          area: {
            id: null,
            name: "全部空间"
          },
          dim: {
            id: null,
            name: "维度值"
          },
          time: ["2016-08-29", "2016-08-29"]
        },
        chartConfig: {
          options: {
            chart: {
              type: 'line'
            },
            legend: {
              enabled: false
            },
            xAxis: {
              categories: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
            },
            title: {
              text: ''
            }
          },
          series: [{
            data: [1577, 1558, 1604, 1480, 1308, 1385, 1301, 1387, 1616, 1417, 1046, 495, 215]
          }],
          title: {
            text: ''
          },
          loading: false
        }
      }, {
        text: "标题",
        type: "chart",
        index: 2,
        data: {
          name: "人均驻留时长",
          unit: "分钟",
          value: 17.96,
          _dValue: 17.78,
          doD: 1.01
        },
        query: {
          timeType: "日",
          area: {
            id: null,
            name: "全部空间"
          },
          dim: {
            id: null,
            name: "维度值"
          },
          time: ["2016-08-29", "2016-08-29"]
        },
        chartConfig: {
          options: {
            chart: {
              type: 'line'
            },
            legend: {
              enabled: false
            },
            xAxis: {
              categories: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
            },
            title: {
              text: ''
            }
          },
          series: [{
            data: [1577, 1558, 1604, 1480, 1308, 1385, 1301, 1387, 1616, 1417, 1046, 495, 215]
          }],
          title: {
            text: ''
          },
          loading: false
        }
      }, {
        text: "标题",
        type: "index",
        index: 3,
        query: {
          timeType: "日",
          area: {
            id: null,
            name: "全部空间"
          },
          dim: {
            id: null,
            name: "维度值"
          },
          time: ["2016-08-29", "2016-08-29"]
        },
        data: {
          name: "新增客户数",
          unit: "人数",
          value: 16389,
          _dValue: 16076,
          doD: 1.95,
          cgEnable: true
        }
      }, {
        text: "标题",
        type: "index",
        index: 4,
        query: {
          timeType: "日",
          area: {
            id: null,
            name: "全部空间"
          },
          dim: {
            id: null,
            name: "维度值"
          },
          time: ["2016-08-29", "2016-08-29"]
        },
        data: {
          name: "人均驻留时长",
          unit: "分钟",
          value: 17.96,
          _dValue: 17.78,
          doD: 1.01
        }
      }, {
        query: {
          timeType: "日",
          area: {
            id: null,
            name: "全部空间"
          },
          dim: {
            id: null,
            name: "维度值"
          },
          time: ["2016-08-29", "2016-08-29"]
        },
        text: "标题",
        type: "map",
        index: 5
      }]
    }];
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        console.log('go to login view');
        $state.go('welcome.login');
      }

      console.log(toState.name);
      if (toState.name === 'app') {
        event.preventDefault();
        $state.go('app.home.watchlist');
      }
    });
  });
