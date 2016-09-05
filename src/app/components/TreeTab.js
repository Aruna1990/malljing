angular
  .module('app')
  .component('mjTreeTab', {
    templateUrl: 'app/components/TreeTab.html',
    controller: DatePicker,
    bindings: {
      data: '<',
      tabs: '<',
      width: '<',
      title: '@'
    }
  });

function DatePicker($filter) {
  var i;
  this.$filter = $filter;

  this.contents = [];
  for (i = 0; i < this.tabs.length; i++) {
    this.contents.push({
      id: i,
      tabName: this.tabs[i]
    });
  }

  this.contents[0].children = this.data;
  console.log(this.tabs);
  this.paths = [{
    name: '所有' + this.title
  }];
  console.log(this.data);
  console.log(this.tabs);
  this.range = {
    isopen: false
  };
  this.selectedItems = [];
  for (i = 0; i < this.tabs.length; i++) {
    this.selectedItems.push({id: null});
  }
  console.log('this.selectedItems');
  console.log(this.selectedItems);
}

DatePicker.prototype = {
  toggleRangePicker: function () {
    this.range.isopen = !this.range.isopen;
  },
  onSelected: function (tabIndex, selectedItem) {
    console.log('onSelected');
    tabIndex = Number(tabIndex);
    this.selectedItems[tabIndex] = selectedItem;
    console.log(this.selectedItems);
    this.paths[tabIndex] = {
      name: selectedItem.name,
      id: selectedItem.id
    };
    if (this.contents[tabIndex + 1]) {
      console.log("不是最后的tab");
      for (var i = this.paths.length - 1; i > tabIndex; i--) {
        console.log(i);
        this.paths.pop();
      }
      this.contents[tabIndex + 1].children = selectedItem.children;
      this.active = tabIndex + 1;
    }
  }
};
