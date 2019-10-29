;(function (window, undefined) {
  function Tab(options) {
    options = options || {};
    this.tabMenu = options.tabMenu || '#tab';  // tab栏的容器
    this.tabMain = options.tabMain || '#main'; // 详细内容的容器
    this.tabMenuSelected = options.tabMenuSelected || 'selected'; // tab栏选中的样式
    this.tabMainSelected = options.tabMainSelected || 'selected'; // 详细内容选中的样式

    _init.call(this);
  }
  function _init() {
    // 获取tab栏的容器
    var tabMenu = document.querySelector(this.tabMenu);
    // 获取详细内容的容器
    var tabMain = document.querySelector(this.tabMain);

    // 给tab栏注册点击事件
    var i = 0, len = tabMenu.children.length;
    for (; i < len; i++) {
      var tab = tabMenu.children[i];
      tab.index = i;
      var that = this;
      tab.onclick = function () {
        // 点击tab的时候，让所有tab都不选中。让当前tab高亮显示
        for (i = 0; i < len; i++) {
          tab = tabMenu.children[i];
          tab.className = tab.className.replace(that.tabMenuSelected, '');
        }
        this.className = this.className + that.tabMenuSelected;
        //
        var mainLen = tabMain.children.length;

        for (i = 0; i < mainLen; i++) {
          var item = tabMain.children[i];
          item.className = item.className.replace(that.tabMainSelected, '');
        }

        var mainDiv = tabMain.children[this.index];
        mainDiv.className = mainDiv.className + that.tabMainSelected;
      };
    }
  }
 
  window.Tab = Tab;
})(window)