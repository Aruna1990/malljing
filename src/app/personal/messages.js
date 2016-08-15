angular
  .module('app')
  .component('mjMessages', {
    templateUrl: 'app/personal/messages.html',
    controller: messagesCtrl
  });

/** @ngInject */
function messagesCtrl($rootScope, $state, todoService, $injector) {
  console.log('messagesCtrl');
  var ngTableParams;

  ngTableParams = $injector.get('NgTableParams');

  var self = this;
    self.cols = [{
      field: "id",
      title: 'ID',
      sortable: "id",
      show: false,
    }, {
      field: "from",
      title: "来源",
      sortable: "from",
      show: true,
    }, {
      field: "title",
      title: "标题",
      sortable: "title",
      show: true,
    }, {
      field: "date",
      title: "日期",
      sortable: "date",
      show: true
    }];

    self.tableParams = new ngTableParams({}, {
      dataset: [{
        id:0,
        from:"用户管理系统",
        title: "消息标题",
        date:"2016/08/15",
        body:"消息主体",
      },{
        id:1,
        from:"用户管理系统",
        title: "消息标题",
        date:"2016/08/15",
        body:"消息主体"
      },{
        id:2,
        from:"用户管理系统",
        title: "消息标题",
        date:"2016/08/15",
        body:"消息主体"
      },{
        id:3,
        from:"用户管理系统",
        title: "消息标题",
        date:"2016/08/15",
        body:"消息主体"
      },{
        id:4,
        from:"用户管理系统",
        title: "消息标题",
        date:"2016/08/15",
        body:"消息主体"
      }]
    });
    
    self.isLastPage = isLastPage;
    
    function isLastPage(){
      return self.tableParams.page() === totalPages();
    }
    
    function totalPages(){
      return Math.ceil(self.tableParams.total() / self.tableParams.count());
    }
}