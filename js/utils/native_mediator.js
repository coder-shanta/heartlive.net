/*******************************************************************************
 * Check the page is in the container
 ******************************************************************************/
(function () {
    function isInContainer() {
        var uaStr = window.navigator.userAgent;
        var uaResult = /KKTV\ Native\/[\d\.]{1,8}/i.test(uaStr);
        if (uaResult) {
            return true;
        }
        return false;
    }

    window.COMPATIBLE = isInContainer();
    if (!window.COMPATIBLE) {
        // TODO: warn user not COMPATIBLE;
    }
})();

/*******************************************************************************
 * Get API instance, depending on device platform
 ******************************************************************************/
(function (exp) {
    function Mobile() {
    }

    exp.Mobile = Mobile;

    Mobile.prototype.getUserInfo = function (cb) {
        if (!cb) {
            throw new Error("Null Pointer Error");
        }

        return true;
    };

    Mobile.prototype.getVersionCode = function () {
    }

    Mobile.prototype.getPayInfo = function () {
    }

    Mobile.prototype.share = function (title, content, imgUrl, shareUrl) {
        if (!content) {
            throw new Error("Null Pointer Error");
        }
    };

    Mobile.prototype.notifyWhatsapp = function (phoneNum, msg) {
        if (!phoneNum) {
            throw new Error("Null Pointer Error");
        }
    };

    Mobile.prototype.shareBonus = function () {
    };

    Mobile.prototype._customActivity = function (packageName, key, value) {
        if (!packageName) {
            throw new Error("Null Pointer Error");
        }
    };

    Mobile.prototype.routeViewPage = function (routeUrl) {
        if (!routeUrl) {
            throw new Error("Null Pointer Error");
        }
    };

    Mobile.prototype.startLoginActivity = function () {
        this._customActivity(this.ACTIVITIES.LOGIN);
    };

    //一元夺宝
    Mobile.prototype.treasureActivity = function () {
        this._customActivity(this.ACTIVITIES.TREASUREACTIVITY);
    };

    Mobile.prototype.startPaymentActivity = function () {
    }

    Mobile.prototype.onResume = function (cb) {
        this._resumeCallback = this._resumeCallback || [];
        typeof cb === 'function' && this._resumeCallback.push(cb);
    };

    Mobile.prototype.finish = function () {
    };

    Mobile.prototype.notify = function () {
    };
    Mobile.prototype.updateMoney = function (balance, cb) {
    };

    Mobile.prototype.updateGold = function (balance, cb) {
    };

    Mobile.prototype.boughtVip = function (vipId, cb) {
    };

    Mobile.prototype.boughtCar = function (carId, cb) {
    };

    Mobile.prototype.onBack = function () {
    };

    Mobile.prototype.startFeedbackActivity = function () {
    };

    Mobile.prototype.ACTIVITIES = {
        LOGIN: undefined,
        PAYMENT: undefined,
        FEEDBACK: undefined
    };

    UA.android && (function (Parent) {
        function Android() {
            exp.Application && exp.Application.closeHardware && exp.Application.closeHardware();
            this._super = Parent.prototype;
        }

        Parent.Android = Android;

        Android.prototype = new Parent();
        Android.prototype.getUserInfo = function (cb) {
            this._super.getUserInfo.apply(this, arguments);
            var info = exp.Application.getUserInfo();
            info = info || "{}";
            info = JSON.parse(info);
            setTimeout(function () {
                (cb instanceof Function) && cb(info);
            }, 100);

            return true;
        };

        Android.prototype.getVersionCode = function (cb) {
            this._super.getVersionCode.apply(this, arguments);
            var vi = exp.Application && exp.Application.getVersionCode && exp.Application.getVersionCode();

            cb(vi)
        };

        Android.prototype.getPayInfo = function (cb) {
            this._super.getPayInfo.apply(this, arguments);
            var vi = exp.PAY_INTERFACE && exp.PAY_INTERFACE.getPayInfo && exp.PAY_INTERFACE.getPayInfo();

            cb(vi)
        };

        Android.prototype.share = function (title, content, shareUrl, imgUrl) {
            try {
                this._super.share.apply(this, arguments);
                // if (exp.COMPATIBLE == exp.COMPATIBLE_LEVEL.FULL) {
                    exp.Application.sharePage(title || null, content, shareUrl || null, imgUrl || null);
                // } else {
                //     exp.Application.share(content, imgUrl);
                // }
            } catch (e) {
                alert(e.message);
            }
        };


        Android.prototype.notifyWhatsapp = function (phoneNum, msg) {
            try {
                this._super.notifyWhatsapp.apply(this, arguments);
                exp.Application.notifyWhatsapp(phoneNum, msg);
            } catch (e) {
                alert(e.message);
            }
        };

        Android.prototype.shareBonus = function () {
            try {
                this._super.shareBonus.apply(this, arguments);
                exp.Application.shareBonus();
            } catch (e) {
                alert(e.message);
            }
        };

        Android.prototype.finish = function () {
            this._super.finish.apply(this, arguments);
            window.Application.startLiveRoom();
        };

        Android.prototype.notify = function (data) {
            this._super.notify.apply(this, arguments);
            data && exp.Application.notify(JSON.stringify(data));
        };
        Android.prototype._customActivity = function (packageName, key, value) {
            this._super._customActivity.apply(this, arguments);
            exp.Application.startCustomActivity(packageName, key || null, value || null);
        };
        Android.prototype.routeViewPage = function (routeUrl) {
            this._super.routeViewPage.apply(this, arguments);
            exp.Application.routeViewPage(routeUrl);
        };
        Android.prototype.startPaymentActivity = function () {
            this._super.startPaymentActivity.apply(this, arguments);
            this._customActivity(this.ACTIVITIES.PAYMENT);
        };

        Android.prototype.startFeedbackActivity = function () {
            this._super.startFeedbackActivity.apply(this, arguments);
            this._customActivity(this.ACTIVITIES.FEEDBACK);
        };

        Android.prototype.onBack = function (cb) {
            if (!(cb instanceof Function)) {
                return false;
            }
            this._backList = this._backList || [];
            this._backList.push(cb);
            return true;
        };

        Android.prototype.updateMoney = function (balance, cb) {
            if (typeof balance !== 'number') {
                return;
            }
            balance = Math.max(0, balance);

            this._super.updateMoney.apply(this, arguments);
            exp.gameAPIJava.setProperty('currentMoney', balance.toString());
            cb instanceof Function && setTimeout(cb);
        };

        Android.prototype.updateGold = function (balance, cb) {
            if (typeof balance !== 'number') {
                return;
            }
            balance = Math.max(0, balance);

            this._super.updateGold.apply(this, arguments);
            exp.gameAPIJava.setProperty('currentGold', balance.toString());
            cb instanceof Function && setTimeout(cb);
        };

        Android.prototype.boughtVip = function (vipId, cb) {
            if (vipId == undefined) {
                return;
            }

            this._super.boughtVip.apply(this, arguments);
            exp.gameAPIJava.setProperty('vipType', vipId.toString());
            cb instanceof Function && setTimeout(cb);
        };

        Android.prototype.boughtCar = function (carId, cb) {
            if (carId == undefined) {
                return;
            }
            this._super.boughtCar.apply(this, arguments);
            cb instanceof Function && setTimeout(cb);
        };

        Android.prototype.ACTIVITIES.LOGIN = "com.melot.meshow.account.UserLogin";
        Android.prototype.ACTIVITIES.PAYMENT = "com.melot.fillmoney.PaymentsActivity";
        Android.prototype.ACTIVITIES.FEEDBACK = "com.melot.meshow.main.more.FeedBack";
        Android.prototype.ACTIVITIES.TREASUREACTIVITY = "com.melot.meshow.treasure.TreasureActivity"; //一元夺宝
        Android.prototype.ACTIVITIES.USERNAMECARD = "com.melot.meshow.main.userprofile.UserProfileActivity"; //个人档案
        Android.prototype.ACTIVITIES.TOPICACTIVITY = "com.melot.meshow.dynamic.TopicActivity"; //话题  参数'topicId', 'topicTitle'
        Android.prototype.ACTIVITIES.PUBLISHACTIVITY = "com.melot.meshow.main.publish.PublishActivity"; //话题发布  参数'topicId', 'topicTitle'


    })(Mobile);

    UA.ios && (function (Parent) {
        var processStack = [];
        var isBusy = false;
        var returnVal = function (val) {
            var nextObj = processStack.shift();
            if (nextObj) {
                isBusy = true;
                setTimeout(function () {
                    nextObj.args.push('_stack');
                    nextObj.fn.apply(null, nextObj.args);
                }, 60);
            } else {
                isBusy = false;
            }

            if (val == undefined) {
                return undefined;
            } else if (Object.prototype.toString.call(val) === "[object Object]") {
                return JSON.stringify(val);
            } else {
                return val;
            }
        };

        var nextStack = function () {
            if (isBusy) {
                return;
            }
            return returnVal();
        };

        var ios = {};
        ios.customActivity = function () {
            if (arguments.length > 0) {
                this._activity = arguments[0];
            } else {
                return returnVal(this._activity);
            }
        };
        ios.routeViewPage = function () {
            if (arguments.length > 0) {
                this._routeViewPage = arguments[0];
            } else {
                return returnVal(this._routeViewPage);
            }
        };
        ios.userInfo = function () {
            if (arguments.length > 0) {
                this._userInfo = arguments[0];
            } else {
                return this._userInfo;
            }
        };
        ios.getVersionCode = function () {
            if (arguments.length > 0) {
                this._versionInfo = arguments[0];
            } else {
                return this._versionInfo;
            }
        };
        ios.share = function () {
            if (arguments.length > 0) {
              this._share = arguments[0];
                // this._share = JSON.parse(arguments[0]);
            } else {
                return returnVal(this._share);
            }
        };
        ios.notifyWhatsapp = function () {
            if (arguments.length > 0) {
                this._notifyWhatsapp = arguments[0];
            } else {
                return returnVal(this._notifyWhatsapp);
            }
        };
        ios.shareBonus = function () {
            if (arguments.length > 0) {
                this._shareBonus = JSON.parse(arguments[0]);
            } else {
                return returnVal(this._shareBonus);
            }
        };
        ios.notify = function () {
            if (arguments.length > 0) {
                this._notify = JSON.parse(arguments[0]);
            } else {
                return returnVal(this._notify);
            }
        };

        ios.updateMoney = function () {
            if (arguments.length > 0) {
                this._updateMoney = arguments[0];
            } else {
                return returnVal(this._updateMoney);
            }
        };

        ios.updateGold = function () {
            if (arguments.length > 0) {
                this._updateGold = arguments[0];
            } else {
                return returnVal(this._updateGold);
            }
        };

        ios.boughtVip = function () {
            if (arguments.length > 0) {
                this._boughtVip = arguments[0];
            } else {
                return returnVal(this._boughtVip);
            }
        };

        ios.boughtCar = function () {
            if (arguments.length > 0) {
                this._boughtCar = arguments[0];
            } else {
                return returnVal(this._boughtCar);
            }
        };

        exp.ios = ios;

        function IOS() {
            this._super = Parent.prototype;
        }

        Parent.IOS = IOS;
        var appVersion = '';

        IOS.prototype = new Parent();
        IOS.prototype.getUserInfo = function (cb) {
            this._super.getUserInfo.apply(this, arguments);
            var tryTimes = 0;

            function waitUserInfo() {
                tryTimes++;
                tryTimes > 5 ? cb({}) : setTimeout(function () {
                    var info = ios.userInfo();
                    info ? cb(info) : waitUserInfo();
                }, 100);
            }

            waitUserInfo();
            setTimeout(function () {
                exp.location = "getUserInfo";
            })
            return true;
        };

        IOS.prototype.getVersionCode = function(cb){
            this._super.getVersionCode.apply(this, arguments);
            var tryTimes = 0;
            function waitUserInfo() {
                tryTimes++;
                tryTimes > 5 ? cb({}) : setTimeout(function () {
                    var info = ios.getVersionCode();;
                    info ? cb(info) : waitUserInfo();
                }, 100);
            }

            waitUserInfo();
            setTimeout(function () {
                exp.location = "getVersionCode";
            });
        }
        IOS.prototype._customActivity = function (packageName, key, value) {
            this._super._customActivity.apply(this, arguments);
            var params = {}
            for(var i in key) {
                if (value[i]) {
                    params[key[i]] = value[i]
                }
            }
            ios.customActivity({
                target: packageName,
                params: params
            });
            setTimeout(function () {
                exp.location  = "startCustomActivity";
            })
        };

        IOS.prototype.routeViewPage = function (routeUrl) {
            this._super.routeViewPage.apply(this, arguments);
            ios.routeViewPage({
                routeUrl: routeUrl
            });
            setTimeout(function () {
                exp.location = "routeViewPage";
            });
        };

        IOS.prototype.finish = function () {
            this._super.finish.apply(this, arguments);
            setTimeout(function () {
                exp.location = "gotoHomePage";
            });
        };

        IOS.prototype.notify = function (data) {
            this._super.notify.apply(this, arguments);
            data && ios.notify(data);
            setTimeout(function () {
                exp.location = "notify";
            });
        };
        IOS.prototype.share = function (title, content, imgUrl, shareUrl) {
            this._super.share.apply(this, arguments);
            ios.share({
                title: title,
                text: content,
                image: imgUrl,
                shareUrl: shareUrl
            });
            setTimeout(function () {
                exp.location = "share";
            });
        };
        IOS.prototype.notifyWhatsapp = function ( phoneNum, msg) {
            this._super.notifyWhatsapp.apply(this, arguments);
            ios.notifyWhatsapp({phoneNum: phoneNum, msg: msg});
            setTimeout(function () {
                exp.location = "notifyWhatsapp";
            });
        };

        IOS.prototype.shareBonus = function () {
            this._super.shareBonus.apply(this, arguments);
            ios.shareBonus();
            setTimeout(function () {
                exp.location = "shareBonus";
            });
        };

        IOS.prototype.startPaymentActivity = function () {
            this._super.startPaymentActivity.apply(this, arguments);
            setTimeout(function () {
                exp.location = this.ACTIVITIES.PAYMENT;
            }.bind(this));
        };

        IOS.prototype.startFeedbackActivity = function () {
            this._super.startFeedbackActivity.apply(this, arguments);
            setTimeout(function () {
                exp.location = this.ACTIVITIES.FEEDBACK;
            }.bind(this));
        };

        IOS.prototype.updateMoney = function (balance, cb) {
            if (typeof balance !== 'number') {
                return;
            }
            var _stack = arguments[arguments.length - 1] === "_stack";
            if (!_stack) {
                var args = [].slice.call(arguments);
                processStack.push({
                    fn: this.updateMoney.bind(this),
                    args: args
                });

                return nextStack();
            }
            balance = Math.max(0, balance);
            this._super.updateMoney.apply(this, arguments);
            ios.updateMoney(balance);
            setTimeout(function () {
                exp.location = "updateMoney";
                cb instanceof Function && setTimeout(cb);
            });
        };

        IOS.prototype.updateGold = function (balance, cb) {
            if (typeof balance !== 'number') {
                return;
            }
            var _stack = arguments[arguments.length - 1] === "_stack";
            if (!_stack) {
                var args = [].slice.call(arguments);
                processStack.push({
                    fn: this.updateGold.bind(this),
                    args: args
                });

                return nextStack();
            }
            balance = Math.max(0, balance);
            this._super.updateGold.apply(this, arguments);
            ios.updateGold(balance);
            setTimeout(function () {
                exp.location = "updateGoldCoin";
                cb instanceof Function && setTimeout(cb);
            });
        };

        IOS.prototype.boughtVip = function (vipId, cb) {
            if (vipId == undefined) {
                return;
            }
            var _stack = arguments[arguments.length - 1] === "_stack";
            if (!_stack) {
                var args = [].slice.call(arguments);
                processStack.push({
                    fn: this.boughtVip.bind(this),
                    args: args
                });

                return nextStack();
            }

            this._super.boughtVip.apply(this, arguments);
            ios.boughtVip(vipId);
            setTimeout(function () {
                exp.location = "boughtVip";
                cb instanceof Function && setTimeout(cb);
            });
        };

        IOS.prototype.boughtCar = function (carId, cb) {
            if (carId === undefined) {
                return;
            }
            var _stack = arguments[arguments.length - 1] === "_stack";
            if (!_stack) {
                var args = [].slice.call(arguments);
                processStack.push({
                    fn: this.boughtVip.bind(this),
                    args: args
                });

                return nextStack();
            }

            this._super.boughtCar.apply(this, arguments);
            ios.boughtCar(carId);
            cb instanceof Function && setTimeout(cb);
        };

        IOS.prototype.ACTIVITIES.LOGIN = "UserLogin";
        IOS.prototype.ACTIVITIES.PAYMENT = "PaymentMethods";
        IOS.prototype.ACTIVITIES.FEEDBACK = "showFeedbackView";
        IOS.prototype.ACTIVITIES.TREASUREACTIVITY = "TreasureActivity"; //一元夺宝
        IOS.prototype.ACTIVITIES.USERNAMECARD = "UserNameCard"; //个人档案  参数'userId'
        IOS.prototype.ACTIVITIES.TOPICACTIVITY = "gotoNewsTopic"; //话题  参数'topicId', 'topicTitle'
        IOS.prototype.ACTIVITIES.PUBLISHACTIVITY = "gotoReleaseNewsTopic"; //话题发布  参数'topicId', 'topicTitle'
    })(Mobile);

    var phone = UA.android ? new Mobile.Android() : (UA.ios ? new Mobile.IOS() : undefined);

    exp.phone = phone;

    var BACK_CONRIRM_STRING = "kk://back.bubble.true";
    var BACK_CANCEL_STRING = "kk://back.bubble.false";

    exp.onResume = function () {
        setTimeout(function () {
            var cbList = phone._resumeCallback || [];
            for (var i = 0, len = cbList.length; i < len; i++) {
                (cbList[i] instanceof Function) && cbList[i]();
            }
        }, 100);
    };
    exp.onBackPressed = function () {
        var cbList = phone._backList || [];
        var needStop = cbList.some(function (cb) {
            if (!(cb instanceof Function)) {
                return false;
            }
            var res = cb();
            return res === false;
        });

        window.prompt(needStop ? BACK_CANCEL_STRING : BACK_CONRIRM_STRING);
    }

})(window);

/*******************************************************************************
 * User information object
 ******************************************************************************/
(function (exp) {

    function User(cb, argP) {
        if (!(this instanceof User)) {
            if (!User.instance) {
                var user = new User();
                User.instance = user;
            }
            return User.instance.ready(cb, argP);
        }

        cb && this.ready(cb, argP);
        this._init();
    }

    User.getInstance = function () {
        if (!User.instance) {
            var user = new User();
            User.instance = user;
        }
        return User.instance;
    };

    User.prototype._init = function () {
        this._requestInfo(function (info) {
            window.deviceProfile = info;
            this._info = info;
            var cb = undefined;
            this._cbStack = this._cbStack || [];
            while (cb = this._cbStack.shift()) {
                cb(info);
            }
        }.bind(this));
    };

    User.prototype._requestInfo = function (cb) {
        var fn = function (info) {
            info = info || {};
            saveInfoToServer(info, function () {
                cb(info);
            }.bind(this));
        }.bind(this);

        var profileInfo = getInfoFromLocal();
        if (profileInfo) {
            setTimeout(function () {
                fn(profileInfo);
            });
        } else {
            exp.phone.getUserInfo(fn);
        }
    }

    User.prototype.ready = function (cb, argP) {
        if (!(cb instanceof Function)) {
            return this;
        }
        cb = cb.bind(argP === undefined ? this : argP);
        if (this._info) {
            setTimeout(cb, 25);
        } else {
            this._cbStack = this._cbStack || [];
            this._cbStack.push(cb);
        }
        return this;
    };

    User.prototype.isLogin = function () {
        return !!(this._info && this._info.userId && this._info.token);
    };

    User.prototype.getToken = function () {
        return this._info && this._info.token ? this._info.token : undefined;
    };

    User.prototype.getId = function () {
        return this._info && this._info.userId ? this._info.userId : undefined;
    };

    User.prototype.expire = function (cb) {
        cb = cb || new Function();
        clearLocalInfo();
        this._requestInfo(function () {
            cb();
        });
    };

    exp.User = User;

    var saveInfoToServer = function (info, cb) {
        window.sessionStorage.profileInfo = JSON.stringify(info);

        if ($ && $.post) {
            $.post("/user/profile", {
                profile: JSON.stringify(info)
            }, cb);
        } else {
            console.warn("can not post profile info to server, missing \"$.post\"");
            cb();
        }
    };

    var getInfoFromLocal = function () {
        var profileInfo = window.sessionStorage.profileInfo;
        return profileInfo && JSON.parse(profileInfo);
    };

    var clearLocalInfo = function () {
        delete window.sessionStorage.profileInfo;
    }

})(window);

