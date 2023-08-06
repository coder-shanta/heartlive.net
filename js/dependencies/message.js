var message = {
  _map : {},
  type : {
    REQUESTED_USER_INFO : "user_info_requested",
    PAGE_HEIGHT_CHANGED : "page_height_changed"
  },
  register : function(messageType, callback) {
    if (messageType instanceof Function) {
      callback = messageType;
      messageType = "__all__";
    }
    if (!messageType) {
      throw new Error('Null Pointer Exception');
    } else if (typeof messageType === "object") {
      messageType = messageType.toString();
    }

    if (typeof callback != "function") {
      throw new Error('Illegal Argument Exception');
    }
    var _this = this;
    var index = 0;
    if (!_this._map[messageType]) {
      _this._map[messageType] = [ callback ];
    } else {
      index = _this._map[messageType].push(callback) - 1;
    }
    return messageType + "#" + index;
  },
  unregister : function(messageType, callback) {
    if (!messageType || !this._map[messageType]) {
      return;
    }
    var calls = this._map[messageType];
    if (typeof callback != "function") {
      for (var i = 0; i < calls.length; i++) {
        calls[i] = undefined;
      }
    } else {
      for (var i = 0; i < calls.length; i++) {
        calls[i] = callback === calls[i] ? undefined : calls[i];
      }
    }
    delete this._map[messageType];
  },
  once: function (messageType, callback) {
    var m = this.register(messageType, function (data) {
      this.unregister(m);
      callback(data);
    }.bind(this));

    return m;
  },
  ignore : function(key) {
    if (!/(.+)\#(\d+)$/.test(key)) {
      return false;
    }
    var messageType = RegExp.$1;
    var index = parseInt(RegExp.$2);
    var calls = this._map[messageType];
    if (!calls || index >= calls.length) {
      return false;
    }
    var fun = calls[index];
    var newFn = new Function();
    newFn.fn = fun;
    calls[index] = newFn;
    return true;
  },
  attention : function(key) {
    if (!/(.+)\#(\d+)$/.test(key)) {
      return false;
    }
    var messageType = RegExp.$1;
    var index = parseInt(RegExp.$2);
    var calls = this._map[messageType];
    if (!calls || index >= calls.length) {
      return false;
    }
    var fun = calls[index];
    if (!fun.fn) {
      return false;
    }
    calls[index] = fun.fn;
    delete fun.fn;
    return true;
  },
  callbackList : function(messageType) {
    if (this._map[messageType]) {
      return this._map[messageType];
    }
    return null;
  },
  dispatch : function(messageType/* ,args */) {
    if (!messageType) {
      throw new Error('Null Pointer Exception');
    }
    var _this = this;
    var arr = _this._map[messageType] || [];
    var arr2 = _this._map["__all__"];
    if (arr2 && arr2.length > 0) {
      arr = arr.concat(arr2);
    }

    if (arr.length === 0) {
      return;
    }

    var args = Array.prototype.slice.call(arguments, 1);
    if (typeof args != "object") {
      alert("bad object");
      return;

    }
    for (var i = 0; i < arr.length; i++) {
      arr[i] && arr[i].apply(_this, args);
    }
  },
  dump : function(messageType/* ,args */) {
    if (!messageType) {
      throw new Error('Null Pointer Exception');
    }
    var _this = this;
    var arr = _this._map[messageType] || [];
    var arr2 = _this._map["__all__"];
    if (arr2 && arr2.length > 0) {
      arr = arr.concat(arr2);
    }

    if (arr.length === 0) {
      return;
    }

    var args = Array.prototype.slice.call(arguments, 1);
    if (typeof args != "object") {
      alert("bad object");
      return;
    }
    while (arr.length > 0) {
      var callback = arr.shift();
      callback && callback.apply(_this, args);
      callback = null;
    }
  }
};

if(typeof module !== 'undefined' && module.exports){
  module.exports = message;
}

