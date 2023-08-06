(function(){

  var md = {

    init: function(){

      this.bindEvent();

    },

    sendMd: function(oParam){

      if(UA.android){

        oParam.platform = KKApi.prototype.PLATFORM.ANDROID;

      }else if(UA.iphone){

        oParam.platform = KKApi.prototype.PLATFORM.IPHONE;

      }else if(UA.ipad){

        oParam.platform = KKApi.prototype.PLATFORM.IPAD;

      }

      window.deviceProfile && deviceProfile.userId && (oParam.userId = deviceProfile.userId);

      $('<img />').attr('src','/md/set/?' + $.param(oParam));

    },

    bindEvent: function(){

      var self = this;

      $(document).delegate('.J_NeedMd','mousedown',function(e){

        var $ct = $(e.currentTarget),

          pageid = $ct.attr('data-md-pageid'),

          remark = $ct.attr('data-md-remark') || '{}',

          actionid = $ct.attr('data-md-actionid');

        pageid && actionid && self.sendMd({pageid: pageid, actionid: actionid, remark: remark});

      });

    }

  }

  md.init();

  window.md = md;

})();
