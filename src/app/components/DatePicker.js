angular
  .module('app')
  .component('mjDatePicker', {
    templateUrl: 'app/components/DatePicker.html',
    controller: DatePicker,
    bindings: {
      dateType: '<',
      dateRange: '<',
      dropdownLift: '@',
      selectedFilter: '<filter',
    }
  });

function DatePicker($filter) {
  this.$filter = $filter;
  this.dateTypes = [{
    id: 'hour',
    name: "小时",
    defaultRanges:[{
      id: "_d",
      name: '昨天'
    },{
      id: "_2d",
      name: '前天'
    }],
    rangeStart: true
  },{
    id: 'day',
    name: "天",
    defaultRanges:[{
      id: "_7d",
      name: '最近7天'
    },{
      id: "_14d",
      name: '最近14天'
    },{
      id: "_30d",
      name: '最近30天'
    }],
    customDef: true,
    rangeStart: true,
    rangeEnd: true
  },{
    id: 'week',
    name: "周",
    defaultRanges:[{
      id: "_4w",
      name: '最近4周'
    },{
      id: "_8w",
      name: '最近8周'
    },{
      id: "_12w",
      name: '最近12周'
    }],
    customDef: true,
    rangeStart: true,
    rangeEnd: true
  },{
    id: 'month',
    name: "月",
    defaultRanges:[{
      id: "_m",
      name: '最近1个月'
    },{
      id: "_2m",
      name: '最近2个月'
    },{
      id: "_3m",
      name: '最近3个月'
    }],
    rangeStart: true,
    rangeEnd: true
  }];
  this.toActiveType(0);
  this.range = {
    isopen: false
  }
}

DatePicker.prototype = {
  onTypeChange: function (type) {
    this.toActiveType(type);
  },

  toActiveType: function (idx) {
    if(this.selectedType){
      this.selectedType.selected = false;
      this.selectedDefaultRange.selected = false;
    }

    this.selectedType = this.dateTypes[idx];
    this.selectedType.selected = true;
    this.selectedDefaultRange = this.selectedType.defaultRanges[0];
    this.selectedDefaultRange.selected = true;
  },

  toggleRangePicker: function (){
    this.range.isopen = !this.range.isopen;
  },

  onCustomDef: function(){
    this.selectedDefaultRange = {
      values: []
    };
    if(this.selectedType.rangeStart){
      this.selectedDefaultRange.values.push(this.$filter('date')(this.dtStart, 'yyyy-MM-dd'));
    }

    if(this.selectedType.rangeEnd){
      this.selectedDefaultRange.values.push(this.$filter('date')(this.dtEnd, 'yyyy-MM-dd'));
    }

    this.toggleRangePicker();
  }
};
