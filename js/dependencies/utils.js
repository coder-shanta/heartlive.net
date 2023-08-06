if(typeof module !== 'undefined'){
  var dialog = require('../../js/com/dialog/dialog.js');
}

var utils = {
  _debugState : {
    isPrintToConsole : true
  },
  _isPause : false,
  htmlEncodeNode : null,
  _artDialogSign : {},
  debugLog : function(log) {
    if (this._debugState.isPrintToConsole && typeof console != "undefined") {
      if (UA.ie && UA.ie <= 9) {
        console.info([].join.call(arguments, ","));
      } else {
        console.info.apply(console, arguments);
      }
    }
  },
  errorLog : function(log) {
    if (this._debugState.isPrintToConsole && typeof console != "undefined") {
      if (UA.ie && UA.ie <= 9) {
        console.error([].join.call(arguments, ","));
      } else {
        console.error.apply(console, arguments);
      }
    }
  },
  errorMessage : function(err, sign) {
    var msg = KKApiErrorCodeTranslater.translate(err, $.i18n._.bind_());
    var msgHtml = "<div style='height:34px;padding-left:40px; background:url(/images/ja_error.jpg) no-repeat left center; line-height:34px; color:#333'>" + msg + "</div>";
    this.artDialog(msgHtml, 8000, new Function(), null, null, null, null, sign);
  },
  getQueryString : function(fieldName, urlString) {
    urlString = !!urlString ? urlString : document.location.search;
    if (urlString != null) {
      var typeQu = fieldName + "=";
      var urlEnd = urlString.indexOf(typeQu);
      if (urlEnd != -1) {
        var paramsUrl = urlString.substring(urlEnd + typeQu.length);
        var isEnd = paramsUrl.indexOf('&');
        if (isEnd != -1) {
          return paramsUrl.substring(0, isEnd);
        } else {
          return paramsUrl;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
  HTMLEncode : function(html) {
    if (!this.htmlEncodeNode) {
      this.htmlEncodeNode = document.createElement("div");
    }
    var temp = this.htmlEncodeNode;
    (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
    var output = temp.innerHTML;
    // temp = null;
    return output;
  },
  HTMLDecode : function(text) {
    if (!this.htmlEncodeNode) {
      this.htmlEncodeNode = document.createElement("div");
    }
    var temp = this.htmlEncodeNode;
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    // temp = null;
    return output;
  },

  artDialog : function(content, time, positiveCallback, negativeCallback, positiveButtonName, negativeButtonName, beforeunloadCallback, sign) {
    var _this = this;
    var defaultOption = {
      esc : false,
      title : $.i18n.__('app name'),
      content : undefined,
      time : 2000,
      lock : false
    };

    var userOption = {};
    var arg1 = arguments[0];
    if (Object.prototype.toString.call(arg1) == "[object Object]") {
      var button = [];
      if (typeof arg1.positiveCallback == "function") {
        button.push({
          value : arg1.positiveButtonName || $.i18n.__('ok'),
          autofocus: true,
          callback : arg1.positiveCallback
        });
        delete arg1.positiveCallback;
        delete arg1.positiveButtonName;
      }
      if (typeof arg1.negativeCallback == "function") {
        button.push({
          value : arg1.negativeButtonName || $.i18n.__('cancel'),
          callback : arg1.negativeCallback
        });
        delete arg1.negativeCallback;
        delete arg1.negativeButtonName;
      }

      userOption = arg1;
      userOption.button = button;
      beforeunloadCallback = arg1.beforeunloadCallback;
      sign = arg1.sign;
      delete arg1.beforeunloadCallback;
      delete arg1.sign;
    } else {
      userOption.content = content;
      userOption.time = time;
      var button = [];

      if (typeof positiveCallback == "function") {
        button.push({
          value : positiveButtonName || $.i18n.__('ok'),
          autofocus : true,
          callback : positiveCallback
        });
      }
      if (typeof negativeCallback == "function") {
        button.push({
          value : negativeButtonName || $.i18n.__('cancel'),
          callback : negativeCallback
        });
      }
      userOption.button = button;
    }

    var json = $.extend({}, defaultOption, userOption);
    json.onbeforeremove = function() {
      sign ? delete _this._artDialogSign[sign] : undefined;
      beforeunloadCallback ? beforeunloadCallback.call(this) : undefined;
    };

    if (sign && this._artDialogSign[sign]) {
      this._artDialogSign[sign].close();
    }
    var _art = dialog(json);
    json.lock ? _art.showModal() : _art.show();

    if (sign) {
      this._artDialogSign[sign] = _art;
    }
    return _art;
  },
  hasProp : function(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  },
  closeAllDialog: function(){
    var aDialog = $('.ui-popup-modal');
    var aShade = $('.ui-popup-backdrop');

    aDialog.length && aDialog.remove();
    aShade.length && aShade.remove();
  }
}

utils.dialog = utils.artDialog;

function StringBuilder() {
  if (UA && UA.ie && UA.ue < 8) {
    this._strings_ = new Array;
  } else {
    this._strings_ = new String();
  }
};

if (UA.ie && UA.ue < 8) {
  StringBuilder.prototype.append = function(str) {
    this._strings_.push(str);
  };
  StringBuilder.prototype.toString = function() {
    return this._strings_.join("");
  };
  Buffer.prototype.clear = function() {
    this._strings_.clear();
  };
} else {
  StringBuilder.prototype.append = function(str) {
    this._strings_ += str;
  };
  StringBuilder.prototype.toString = function() {
    return this._strings_;
  };
  StringBuilder.prototype.clear = function() {
    this._strings_ = null;
    this._strings_ = new String();
  };
};

String.prototype.hashCode = function() {
  var hash = 0;
  if (this.length == 0)
    return hash;
  for (var i = 0; i < this.length; i++) {
    var ch = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};
Array.prototype.clear = function() {
  this.splice(0, this.length);
};
Array.prototype.insertAt = function(index, obj) {
  this.splice(index, 0, obj);
};
Array.prototype.removeAt = function(index) {
  this.splice(index, 1);
};

Date.prototype.format = function(format) {
  var o = {
    "M+" : this.getMonth() + 1, // month
    "d+" : this.getDate(), // day
    "h+" : this.getHours(), // hour
    "m+" : this.getMinutes(), // minute
    "s+" : this.getSeconds(), // second
    "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
    "S" : this.getMilliseconds()
  // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for ( var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}

function numberAddCommas(nStr) {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
// 生成翻页

function clearCookies() {
  var keys = document.cookie.match(/[^ =;]+(?==)/g);
  if (keys) {
    for (var i = keys.length; i--;)
      $.cookies.del(keys[i]);
  }
}

function removeElementChildren($element) {
  if ($element.children().length == 0) {
    $element.remove();
    return;
  } else {
    while ($element.children().length > 0) {
      removeElementChildren($element.children().eq(0));
    }
  }
}

function installSwf(swfPath, id, width, height, vars, callbackFn) {
  var swfVersionStr = "11.1.0";
  var xiSwfUrlStr = "";
  var flashvars = vars || {};
  var params = {};
  params.quality = "high";
  params.allowscriptaccess = "sameDomain";
  // params.wmode = "transparent";
  params.wmode = "opaque";
  params.allowFullScreen = 'true';
  params.allowFullScreenInteractive = 'true';
  params.devicefont = 'true';

  var attributes = {};
  attributes.id = id;
  attributes.name = id;
  attributes.align = "middle";
  swfobject.embedSWF(swfPath + "?v=" + SERVER_LIFT_TIME, id, width, height, swfVersionStr, xiSwfUrlStr, flashvars, params, attributes, callbackFn);
}

// 获取元素的纵坐标
function getTop(e) {
  var offset = e.offsetTop;
  if (e.offsetParent != null)
    offset += getTop(e.offsetParent);
  return offset;
}
// 获取元素的横坐标
function getLeft(e) {
  var offset = e.offsetLeft;
  if (e.offsetParent != null)
    offset += getLeft(e.offsetParent);
  return offset;
}

if (UA && UA.ie && typeof window.__flash__argumentsToXML == 'undefined') {

  window.__flash__argumentsToXML = function(obj, index) {
    var s = [ "<arguments>" ];
    for (var i = index, j = obj.length; i < j; i++) {
      s[s.length] = __flash__toXML(obj[i]);
    }
    s[s.length] = "</arguments>";
    return s.join('');
  }

  window.__flash__arrayToXML = function(obj) {
    var s = [ "<array>" ];
    for (var i = 0, j = obj.length; i < j; i++) {
      s[s.length] = "<property id=\"" + i + "\">" + __flash__toXML(obj[i]) + "</property>";
    }
    s[s.length] = "</array>";
    return s.join('');
  }

  window.__flash__escapeXML = function(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }

  window.__flash__objectToXML = function(obj) {
    var s = [ "<object>" ];
    for ( var prop in obj) {
      s[s.length] = "<property id=\"" + prop + "\">" + __flash__toXML(obj[prop]) + "</property>";
    }
    s[s.length] = "</object>";
    return s.join('');
  }

  window.__flash__toXML = function(value) {
    var type = typeof (value);
    if (type == "string") {
      return "<string>" + __flash__escapeXML(value) + "</string>";
    } else if (type == "undefined") {
      return "<undefined/>";
    } else if (type == "number") {
      return "<number>" + value + "</number>";
    } else if (value == null) {
      return "<null/>";
    } else if (type == "boolean") {
      return value ? "<true/>" : "<false/>";
    } else if (value instanceof Date) {
      return "<date>" + value.getTime() + "</date>";
    } else if (value instanceof Array) {
      return __flash__arrayToXML(value);
    } else if (type == "object") {
      return __flash__objectToXML(value);
    } else {
      return "<null/>"; // ???
    }
  }

  // this one non-IE, only?

  if (!UA.ie) {
    window.__flash__request.prototype = function(name) {
      return "<invoke name=\"" + name + "\" returntype=\"javascript\">" + __flash__argumentstoXML(arguments, 1) + "</invoke>";
    }
  }
}

(function($) {

  $.fn.hoverShow = function(option) {
    var $btn = option.btn;
    return this.each(function() {
      var $this = $(this);
      var _this = this;
      var isHovered = false;

      $btn.hover(function() {
        $this.show();
      }, function() {
        setTimeout(function() {
          if (isHovered) {
            return;
          }
          isHovered = false;
          $this.hide();
        }, 100);
      })

      $this.hover(function() {
        isHovered = true;
      }, function() {
        isHovered = false;
        $this.hide();
      });

    });
  };

  // $.fn.focusShow = function() {
  // return this.each(function() {
  // var $this = $(this);
  // var _this = this;
  // var isDisplayed = $this.css('display') !== 'none';
  // if (isDisplayed) {
  // return;
  // }
  // $this.show();
  //
  // var documentlMouseClickListener = function(e) {
  // var tar = e.srcElement || e.target;
  // var $e = $(tar);
  // var $parents = $e.parents();
  // var index = $parents.index($this);
  // if (_this === tar || index >= 0) {
  // return;
  // } else {
  // $this.hide();
  // $(document).unbind("click", documentlMouseClickListener);
  // }
  // };
  //
  // setTimeout(function() {
  // $(document).bind("click", documentlMouseClickListener);
  // }, 25);
  //
  // });
  // };

  $.fn.numberOnly = function() {
    return this.each(function() {
      var isCtrl = false;
      $(this).bind("keydown", function(e) {
        if (e.keyCode >= 47 && e.keyCode <= 57) {
          return true;
        } else if (e.keyCode >= 96 && e.keyCode <= 105) {
          return true;
        } else if (e.keyCode == 8 || e.keyCode == 46) {
          return true;
        } else if (e.keyCode == 37 || e.keyCode == 39) {
          return true;
        } else if (isCtrl && e.keyCode == 86) {
          return true;
        } else if (e.keyCode == 17) {
          isCtrl = true;
        } else if (e.keyCode == 9) {
          return true;
        }
        return false;
      }).bind("keyup", function(e) {
        if (isCtrl && e.keyCode == 17) {
          isCtrl = false;
        }
      }).bind("change", function() {
        this.value = this.value.replace(/\D/g, '');
      });
    });
  };

  $.fn.maxlength = function() {
    return this.each(function() {
      var $obj = $(this);
      var _maxLength = $obj.attr("maxLength") || 10;

      $obj.bind("keydown", function(e) {
        var len = $obj.val().length;
        var event = e.event || e;
        var code = event.keyCode;
        if (code != 8 // backspace
            && code != 46 // delete
            && (code < 37 || code > 40) // arrow keys
            && len >= _maxLength) {
          return false;
        }
      });

      $obj.bind("keyup", function() {
        var len = $obj.val().length;
        if (len > _maxLength) {
          $obj.val($obj.val().substr(0, _maxLength));
        }
      });
    });
  },

  $.fn.waitting = function(isLock, msg) {

    var maskLayer = {
      _layer : null,
      _layerName : "__maskLayer",
      _target : null,
      _creat : function() {
        var $layer = $("<div name='" + this._layerName + "'></div>");
        $layer.attr("id", "__maskLayer" + new Date().getTime());
        var $text = $("<span id='msgLabel'></span>");
        $text.css({
          background : 'url("/images/waitting.gif") no-repeat',
          padding : "0 0 0 16px",
          color : "#6c6c6c"
        });
        $layer.append($text);
        $("body").append($layer);
        $layer.css({
          position : "absolute",
          opacity : 0.6,
          background : "#fff",
          zIndex : 99,
          textAlign : "center"
        })
        if (UA && UA.ie && UA.ie == 6) {
          $layer.css({
            filter : "alpha(opacity=60)"
          })
        }
        return $layer;
      },
      _init : function() {
        var _this = this;
        _this._layer = null;
        var $layer = $("div[name=" + _this._layerName + "]");
        if ($layer.length == 0) {
          _this._layer = _this._creat();
        } else {
          var isFindLayer = false;

          $layer.each(function(i) {
            if (!isFindLayer) {
              var $this = $(this);
              if (!Boolean($this.attr("masking"))) {
                _this._layer = $this;
                isFindLayer = true;
              }
            }
          });
          if (_this._layer == null) {
            _this._layer = _this._creat();
          } else {
            _this._layer.show();
          }
          _this._layer.find("span#msgLabel").text(msg ? msg : $.i18n.__('loading'));
        }
      },
      _positionElement : function() {
        var $target = this._target;
        var target = $target.get(0)
        var left = getLeft(target);
        var top = getTop(target);
        var layer = this._layer;
        layer.attr("masking", true);
        layer.css({
          left : left,
          top : top,
          width : (target.offsetWidth) + "px",
          height : (target.offsetHeight) + "px",
          lineHeight : (target.offsetHeight) + "px"
        });
        $target.attr("maskLayer", layer.attr("id"));
      },
      make : function(target) {
        if (!!target.attr("maskLayer")) {
          return;
        }
        this._target = target;
        this._init();
        this._positionElement();
      },
      unMake : function(target) {
        var maskLayerId = target.attr("maskLayer");
        var layer = $("#" + maskLayerId);
        layer.fadeOut(200);
        layer.attr("masking", "");
        target.attr("maskLayer", "")
      }
    }

    return this.each(function() {
      var $this = $(this);
      isLock ? maskLayer.make($this) : maskLayer.unMake($this);
    })
  };
})(jQuery);

if(typeof module !== 'undefined' && module.exports){
  module.exports = utils;
}
