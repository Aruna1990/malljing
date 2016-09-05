angular
  .module('app')
  .component('mjSelectpanel', {
    templateUrl: 'app/components/SelectPanel.html',
    controller: SelectPanel,
    bindings: {
      data: '<',
      selectedMax: '<'
    }
  });

function SelectPanel($filter) {
  this.$filter = $filter;
  this.dateTypes = [{
    id: 'hour',
    name: "小时",
    defaultRanges: [{
      id: "_d",
      name: '昨天'
    }, {
      id: "_2d",
      name: '前天'
    }],
    rangeStart: true
  }, {
    id: 'day',
    name: "天",
    defaultRanges: [{
      id: "_7d",
      name: '最近7天'
    }, {
      id: "_14d",
      name: '最近14天'
    }, {
      id: "_30d",
      name: '最近30天'
    }],
    customDef: true,
    rangeStart: true,
    rangeEnd: true
  }, {
    id: 'week',
    name: "周",
    defaultRanges: [{
      id: "_4w",
      name: '最近4周'
    }, {
      id: "_8w",
      name: '最近8周'
    }, {
      id: "_12w",
      name: '最近12周'
    }],
    customDef: true,
    rangeStart: true,
    rangeEnd: true
  }, {
    id: 'month',
    name: "月",
    defaultRanges: [{
      id: "_m",
      name: '最近1个月'
    }, {
      id: "_2m",
      name: '最近2个月'
    }, {
      id: "_3m",
      name: '最近3个月'
    }],
    rangeStart: true,
    rangeEnd: true
  }];
  this.range = {
    isopen: false
  };
  this.selectedItems = [];
  this.selectedMax = 3;

  this.data = [{
    title: "空间到访",
    enable: true,
    items: [{
      name: "进入",
      id: ""
    }, {
      name: "驻留",
      id: ""
    }, {
      name: "离开",
      id: ""
    }]
  }, {
    title: "摇一摇活动",
    enable: false,
    items: [{
      name: "参与",
      id: ""
    }, {
      name: "中券",
      id: ""
    }, {
      name: "核销",
      id: ""
    }]
  }, {
    title: "服务使用",
    enable: false,
    items: [{
      name: "WiFi上网",
      id: ""
    }, {
      name: "摇一摇停车",
      id: ""
    }]
  }, {
    title: "消费",
    enable: false,
    items: [{
      name: "支付",
      id: ""
    }]
  }];
}

SelectPanel.prototype = {
  onAddItem: function (item) {
    var i;
    if (!item.selected && this.selectedItems.length >= this.selectedMax) {
      return;
    }
    if (item.selected) {
      for (i = 0; i < this.selectedItems.length; i++) {
        if (item.name === this.selectedItems[i].name) {
          this.selectedItems.splice(i, 1);
        }
      }
    } else {
      this.selectedItems.push(item);
    }
    item.selected = !item.selected;
    console.log(this.selectedItems);
  },
  toActiveType: function (idx) {
    if (this.selectedType) {
      this.selectedType.selected = false;
      this.selectedDefaultRange.selected = false;
    }
    this.selectedType = this.dateTypes[idx];
    this.selectedType.selected = true;
    this.selectedDefaultRange = this.selectedType.defaultRanges[0];
    this.selectedDefaultRange.selected = true;
  },
  toggleRangePicker: function () {
    this.range.isopen = !this.range.isopen;
  },
  onCustomDef: function () {
    this.selectedDefaultRange = {
      values: []
    };
    if (this.selectedType.rangeStart) {
      this.selectedDefaultRange.values.push(this.$filter('date')(this.dtStart, 'yyyy-MM-dd'));
    }
    if (this.selectedType.rangeEnd) {
      this.selectedDefaultRange.values.push(this.$filter('date')(this.dtEnd, 'yyyy-MM-dd'));
    }
    this.toggleRangePicker();
  }
};
