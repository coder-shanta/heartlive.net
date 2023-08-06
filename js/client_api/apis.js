(function() {
  !(function(name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("Activity", function(Parent) {
    function Activity() {
      if (!(this instanceof Activity)) {
        if (!Activity.instance) {
          var args = Array.prototype.slice.call(arguments);
          Activity.instance = new Activity(args[0]);
        }

        return Activity.instance;
      }
    }

    Activity.prototype = Object.create(Parent.prototype);

    Activity.prototype.funcTags = {
      GET_KK_BANNER_LIST: 50002002,
      GET_NOTICE_LIST: 56000003,
      GET_NOTICE_DETAIL: 56000004,
      GET_PK_SEASON_INFO: 51060601,
      GET_GROUP_CONFIG: 51011923,
      GET_CITYBYIP: 51090401
    };

    // @see http://10.0.0.55/mediawiki/index.php/ActivityCenterFunctions.getKKBannerList
    Activity.prototype.getKKBannerList = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_KK_BANNER_LIST;

      return this.request(parameter, cb);
    };

    // @see http://10.0.0.55/mediawiki/index.php/NoticeFunctions.getNoticeList
    Activity.prototype.getNoticeList = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_NOTICE_LIST;

      return this.request(parameter, cb);
    };

    // @see http://10.0.0.55/mediawiki/index.php/NoticeFunctions.getNoticeDetail
    Activity.prototype.getNoticeDetail = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_NOTICE_DETAIL;

      return this.request(parameter, cb);
    };

    // @see http://10.0.0.55/mediawiki/index.php/AbroadHappyPKFunction.getCurrentSeasonInfo
    Activity.prototype.getPkSeasonInfo = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_PK_SEASON_INFO;

      return this.request(parameter, cb);
    };

    // @see http://10.0.0.55/mediawiki/index.php/UserGroupFunction.getGroupConfig
    Activity.prototype.getGroupConfig = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_GROUP_CONFIG;

      return this.request(parameter, cb);
    };

    http://10.0.0.124/mediawiki/index.php/OtherFunctions.getCityByIp
    Activity.prototype.getCityByIp = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_CITYBYIP;

      return this.request(parameter, cb);
    };

    return Activity;
  });
})();
;{}(function() {
  !(function(name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("Earnings", function(Parent) {
    function Earnings() {
      if (!(this instanceof Earnings)) {
        if (!Earnings.instance) {
          var args = Array.prototype.slice.call(arguments);
          Earnings.instance = new Earnings(args[0]);
        }

        return Earnings.instance;
      }
    }

    Earnings.prototype = Object.create(Parent.prototype);

    Earnings.prototype.funcTags = {
      QUERY_IF_SIGNED_TALENT : 51020302,
      GET_MONTHLY_INCOME_HISTORY : 51020204,
      GET_MONTHLY_INCOME_INFO : 51020205,
      GET_OTHERS_INCOME_INFO: 51020219,
      GET_OTHERS_INCOME_LIST: 51020220,
      GET_USER_VALID_DAYS_CONDITIONS: 51020313,
      GET_MONTHLY_INCOME_ITEM_INFO : 51020206,
      GET_MONTHLY_BONUS : 51020207,
      GET_MONTHLY_DEDUCTIONS : 51020208,
      GET_MONTHLY_DEDUCTION_ITEM_DETAILS : 51020209
    };


    /**
     * 查询是否签约主播
     *
     * @see http://10.0.0.55/mediawiki/index.php/OtherFunctions.queryIfSignedTalent
     */
    Earnings.prototype.queryIfSignedTalent = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.QUERY_IF_SIGNED_TALENT;

      return this.request(parameter, cb);
    };


    /**
     * 查询历史月收入列表（不含本月）
     *
     * @see http://10.0.0.55/mediawiki/index.php/ActorFunction.getMonthlyIncomeHistory
     */
    Earnings.prototype.getMonthlyIncomeHistory = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_MONTHLY_INCOME_HISTORY;

      return this.request(parameter, cb);
    };


    /**
     * 查询指定月份收入情况
     *
     * @see http://10.0.0.55/mediawiki/index.php/ActorFunction.getMonthlyIncomeInfo
     */
    Earnings.prototype.getMonthlyIncomeInfo = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_MONTHLY_INCOME_INFO;

      return this.request(parameter, cb);
    };


    /**
     * 获取主播其他收入、扣款项
     *
     * @see http://10.0.0.124/mediawiki/index.php/ActorFunction.getActorOthersIncome
     */
    Earnings.prototype.getActorOthersIncome = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_OTHERS_INCOME_INFO;

      return this.request(parameter, cb);
    };


    /**
     * 获取主播其他收入、扣款项列表
     *
     * @see http://10.0.0.124/mediawiki/index.php/ActorFunction.getActorOthersIncomeList
     */
    Earnings.prototype.getActorOthersIncomeList = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_OTHERS_INCOME_LIST;

      return this.request(parameter, cb);
    };


    /**
     * 获取用户是否符合有效天条件
     *
     * @see http://10.0.0.55/mediawiki/index.php/OtherFunctions.getUserValidDaysConditions
     */
    Earnings.prototype.getUserValidDaysConditions = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_USER_VALID_DAYS_CONDITIONS;

      return this.request(parameter, cb);
    };


    /**
     * 查询指定月份收入项情况，如月收益列表信息、月直播时长列表信息等
     *
     * @see http://10.0.0.55/mediawiki/index.php/ActorFunction.getMonthlyIncomeItemInfo
     */
    Earnings.prototype.getMonthlyIncomeItemInfo = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_MONTHLY_INCOME_ITEM_INFO;

      return this.request(parameter, cb);
    };


    /**
     * 查询主播指定月奖励列表
     *
     * @see http://10.0.0.55/mediawiki/index.php/ActorFunction.getMonthlyBonus
     */
    Earnings.prototype.getMonthlyBonus = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_MONTHLY_BONUS;

      return this.request(parameter, cb);
    };


    /**
     * 查询主播月扣除列表
     *
     * @see http://10.0.0.55/mediawiki/index.php/ActorFunction.getMonthlyDeductions
     */
    Earnings.prototype.getMonthlyDeductions = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_MONTHLY_DEDUCTIONS;

      return this.request(parameter, cb);
    };


    /**
     * 查询主播月扣除项详情
     *
     * @see http://10.0.0.55/mediawiki/index.php/ActorFunction.getDeductionItemDetails
     */
    Earnings.prototype.getDeductionItemDetails = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_MONTHLY_DEDUCTION_ITEM_DETAILS;

      return this.request(parameter, cb);
    };

    return Earnings;
  });
})();
;{}(function() {
  !(function (name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("Game", function (Parent) {
    function Game(ios) {
      this.ios = ios;

      if (!(this instanceof Game)) {
        if (!Game.instance) {
          var args = Array.prototype.slice.call(arguments);
          Game.instance = new Game(args[0]);
        }

        return Game.instance;
      }
    }

    Game.prototype = Object.create(Parent.prototype);

    Game.prototype.funcTags = {
      //赛马游戏
      HORSE_INIT_GAME: 51051201,
      HORSE_USER_BET: 52051202,
      HORSE_GET_GAME_STATUS: 51051203,
      HORSE_GET_GAME_RESULT: 51051204,
      HORSE_GET_GAME_HISTORY: 51051205,
      HORSE_GET_PROPERTIES: 51051206,

      // 新板球游戏cricket
      CRICKET_USER_BET: 51051801,
      CRICKET_GET_VIEW: 51051802,
      CRICKET_GET_STAGE: 51051803,
      CRICKET_GET_HISTORY: 51051804,


      //板球游戏
      GET_GUESS_ENTRANCE: 51051101,
      GET_USER_GUESS_HISTORY_RECORD: 51051102,
      GET_GUESS_HISTORY: 51051103,
      GET_TODAY_GUESS_AND_MATCH: 51051104,
      GET_BONUS_POOL: 51051105,
      GET_GUESS_HERO_RANKING: 51051106,
      GET_GUESS_BABY_RANKING: 51051107,
      USER_GUESS_BET: 52051108,
      USER_VOTE: 51051109,

      // GET_INIT_JEWEL: 86000002,
      GET_INIT_JEWEL: 87000002,
      // GET_JEWEL_BOX: 86000001,
      GET_JEWEL_BOX: 87000001,

      STAR_INIT: 86000003,
      TO_EXPLORE: 86000004,
      TAKE_GOODS: 86000005,
      GET_STAR_LIST: 86000006,

      TRAVEL_INIT: 86000009,
      TRAVEL_DAY_RANK: 86000010,
      TRAVEL_DIG_TREASURE: 86000008,

      GET_USER_DETAIL_INFO: 10005001,
      FIND_AVAILABLE_TREASURE: 86000020,
      PURCHASE_TREASURE: 86000021,
      FIND_LAST_LOTTERY_DETAIL: 86000022,
      LOTTERYDETAIL: 86000023,
      MY_LOTTERY_NOS: 86000024,
      LOTTERY_NO_DETAIL: 86000025,
      USER_SECURITY_LOGIN: 40000015,
      VERIFY_PHONE: 10001022,
      REGISTERVIAPHONENUM: 40000011,
      //FIND_HUNTTREASURE_INFO: 86000026,

      // GET_JEWEL_TOP_LIST: 86000000,
      GET_JEWEL_TOP_LIST: 87000000,
      FIND_HUNT_TREASURE_INFO: 86000029,
      FIND_PARTAKE_LIST: 86000027,
      FIND_LOTTERY_LIST: 86000028,
      GET_USER_RECEIVE_PACKAGE: 50010014,
      FIND_MY_LOTTERY_LIST:86000036,
      MY_LOTTERY_LIST:86000037,

      // 跑车
      GET_SPORTS_CAR_CONFIG: 51140201,
      GET_SPORTS_CAR_USER_STAGE: 51140202,
      UPGRADE_SPORTS_CAR: 51140203,
      SOLD_SPORTS_CAR: 51140204
    };

    /****************************赛马游戏 start***********************************/
    /**
     * http://10.0.0.55/mediawiki/index.php/HorseRacingFunction.initGame
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.horseInitGame = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.HORSE_INIT_GAME;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/HorseRacingFunction.userBet
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.horseUserBet = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.HORSE_USER_BET;
      parameter.platform = 1;

      return this.securityRequest(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/HorseRacingFunction.getGameStatus
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.horseGetGameStatus = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.HORSE_GET_GAME_STATUS;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/HorseRacingFunction.getGameResult
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.horseGetGameResult = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.HORSE_GET_GAME_RESULT;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/HorseRacingFunction.getGameHistory
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.horseGetGameHistory = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.HORSE_GET_GAME_HISTORY;
      parameter.pageIndex = parameter.pageIndex || 0
      parameter.pageCount = parameter.pageCount || 30
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * 获取马匹属性列表
     * http://10.0.0.124/mediawiki/index.php/HorseRacingFunction.getHorseProperties
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getHorseProperties = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.HORSE_GET_PROPERTIES;

      return this.request(parameter, cb);
    }
    /****************************赛马游戏 end***********************************/


    /****************************新板球游戏 start***********************************/
    /**
     * 用户下注
     * http://10.0.0.124/mediawiki/index.php/CricketFunction.userBet
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.cricketUserBet = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.CRICKET_USER_BET;
      return this.securityRequest(parameter, cb);
    }

    /**
     * 获取游戏显示界面
     * http://10.0.0.124/mediawiki/index.php/CricketFunction.getGameShow
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getGameShow = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.CRICKET_GET_VIEW;
      return this.request(parameter, cb);
    }

    /**
     * 获取游戏当前所处阶段
     * http://10.0.0.124/mediawiki/index.php/CricketFunction.getGameStage
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getGameStage = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.CRICKET_GET_STAGE;
      return this.request(parameter, cb);
    }

    /**
     * 获取游戏历史
     * http://10.0.0.124/mediawiki/index.php/CricketFunction.getCricketHistory
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getCricketHistory = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.CRICKET_GET_HISTORY;
      return this.request(parameter, cb);
    }
    /****************************新板球游戏 end***********************************/


    /****************************板球英雄 start***********************************/
    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.getGuessEntrance
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getGuessEntrance = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_GUESS_ENTRANCE;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.getUserGuessHistoryRecord
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getUserGuessHistoryRecord = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_USER_GUESS_HISTORY_RECORD;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.getGuessHistory
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getGuessHistory = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_GUESS_HISTORY;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.getTodayGuessAndMatch
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getTodayGuessAndMatch = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_TODAY_GUESS_AND_MATCH;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.getBonusPool
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getBonusPool = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_BONUS_POOL;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.getGuessHeroRanking
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getGuessHeroRanking = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_GUESS_HERO_RANKING;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.getGuessBabyRanking
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.getGuessBabyRanking = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_GUESS_BABY_RANKING;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.userGuessBet
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.userGuessBet = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.USER_GUESS_BET;
      parameter.platform = 1;

      return this.securityRequest(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/GuessFunctions.userVote
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.userVote = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.USER_VOTE;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }
    /****************************板球英雄 end***********************************/

    /****************************一元夺宝 start***********************************/
      /**
       * http://10.0.0.55/mediawiki/index.php/HuntTreasureFunction.myLotteryList
       * @param parameter
       * @param cb
       * @returns {*}
       */
      Game.prototype.myLotteryList = function (parameter, cb) {
          var args = this.mixArguments.apply(this, arguments);
          cb = args.cb;
          parameter.FuncTag = this.funcTags.MY_LOTTERY_LIST;
          parameter.platform = this.ios ? 3 : 2;

          return this.request(parameter, cb);
      }

    /**
     * http://10.0.0.55/mediawiki/index.php/HuntTreasureFunction.findMyLotteryList
     * @param parameter
     * @param cb
     * @returns {*}
     */
    Game.prototype.findMyLotteryList = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.FIND_MY_LOTTERY_LIST;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/ActivityFunctions.getUserReceivePackageList
     * @param userId
     * @param cb
     * @returns {*}
     */
    Game.prototype.getUserReceivePackage = function (userId, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      var parameter = {};
      parameter.FuncTag = this.funcTags.GET_USER_RECEIVE_PACKAGE;
      parameter.userId = userId;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.findHuntTreasureInfo = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.FIND_HUNT_TREASURE_INFO;
      parameter.platform = this.ios ? 3 : 2;
      parameter.isRead = true;

      return this.request(parameter, cb);
    }
    Game.prototype.findPartakeList = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.FIND_PARTAKE_LIST;
      parameter.isRead = true;

      return this.request(parameter, cb);
    }
    Game.prototype.findLotteryList = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.FIND_LOTTERY_LIST;

      return this.request(parameter, cb);
    }
    /****************************一元夺宝 end***********************************/

    Game.prototype.registerViaPhoneNum = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.REGISTERVIAPHONENUM;
      parameter.platform = 1;

      return this.securityRequest(parameter, cb);
    }

    Game.prototype.verifyPhone = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.VERIFY_PHONE;
      parameter.platform = 1;
      parameter.smsType = 8;

      return this.request(parameter, cb);
    }

    Game.prototype.userSecurityLogin = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.USER_SECURITY_LOGIN;

      if (parameter.password) {
        parameter.psword = parameter.password;
        delete parameter.password;
      }

      parameter.rc = 'E52A4_' + parameter.username;
      parameter.username = encodeURIComponent(parameter.username);
      parameter.psword = parameter.psword;
      var up = this.up(parameter.username, parameter.psword);
      parameter.up = parameter.up || up;
      parameter.platform = 1;

      delete parameter.username;
      delete parameter.psword;

      return this.securityRequest(parameter, cb);
    }

    Game.prototype.lotteryNosDetail = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.LOTTERY_NO_DETAIL;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.myLotteryNos = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.MY_LOTTERY_NOS;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.getUserDetailInfo = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.GET_USER_DETAIL_INFO;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.purchaseTreasure = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.PURCHASE_TREASURE;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.lotteryDetail = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.LOTTERYDETAIL;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.findLastLottery = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.FIND_LAST_LOTTERY_DETAIL;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.findAvailableTreasure = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.FIND_AVAILABLE_TREASURE;
      parameter.platform = this.ios ? 3 : 2;
      parameter.isRead = true;

      return this.request(parameter, cb);
    }

    Game.prototype.travelDigTreasure = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.TRAVEL_DIG_TREASURE;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.travelDayRank = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.TRAVEL_DAY_RANK;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.initTravel = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.TRAVEL_INIT;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }


    Game.prototype.getStarList = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_STAR_LIST;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.takeGoods = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.TAKE_GOODS;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.toExplore = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.TO_EXPLORE;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.initStar = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;

      parameter.FuncTag = this.funcTags.STAR_INIT;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.getInitJewel = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_INIT_JEWEL;
      parameter.gameType = '27';
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.getJewelBox = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_JEWEL_BOX;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    Game.prototype.getJewelTopList = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_JEWEL_TOP_LIST;
      parameter.platform = this.ios ? 3 : 2;

      return this.request(parameter, cb);
    }

    /****************************跑车 atart***********************************/
     /**
     * http://10.0.0.55/mediawiki/index.php/LuxuryCarFunction.getSportsCarConfig
     * @param parameter
     * @param cb
     */
    Game.prototype.getSportsCarConfig = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_SPORTS_CAR_CONFIG;
      parameter.platform = this.ios ? 3 : 2;
      return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/LuxuryCarFunction.getSportsCarUserStage
     * @param parameter
     * @param cb
     */
    Game.prototype.getSportsCarUserStage = function(parameter, cb) {
        var args = this.mixArguments.apply(this, arguments);
        cb = args.cb;
        parameter = args.parameter;
        parameter.FuncTag = this.funcTags.GET_SPORTS_CAR_USER_STAGE;
        parameter.platform = this.ios ? 3 : 2;
        return this.request(parameter, cb);
    }


    /**
     * http://10.0.0.55/mediawiki/index.php/LuxuryCarFunction.upgradeSportsCar
     * @param parameter
     * @param cb
     */
    Game.prototype.upgradeSportsCar = function(parameter, cb) {
        var args = this.mixArguments.apply(this, arguments);
        cb = args.cb;
        parameter = args.parameter;
        parameter.FuncTag = this.funcTags.UPGRADE_SPORTS_CAR;
        parameter.platform = this.ios ? 3 : 2;
        return this.request(parameter, cb);
    }

    /**
     * http://10.0.0.55/mediawiki/index.php/LuxuryCarFunction.soldSportsCar
     * @param parameter
     * @param cb
     */
    Game.prototype.soldSportsCar = function(parameter, cb) {
        var args = this.mixArguments.apply(this, arguments);
        cb = args.cb;
        parameter = args.parameter;
        parameter.FuncTag = this.funcTags.SOLD_SPORTS_CAR;
        parameter.platform = this.ios ? 3 : 2;
        return this.request(parameter, cb);
    }

    /****************************跑车 end***********************************/

    return Game;
  });
})();

;{}(function() {
  !(function(name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("My", function(Parent) {
    function My(arg) {
      if (!(this instanceof My)) {
        return new My(arg);
      }
      
      this._userId = arg.userId;
      this._token = arg.token;
    }
    
    My.prototype = Object.create(Parent.prototype);

    My.prototype.funcTags = {
      USER_INFO : 10005001,
      GET_VIP_POINT: 10005070,
      GET_USER_PROP_LIST: 10005009,
      EXCHANGE_VIP: 10005071,
      GET_INVITEES:51010205
    }
    My.prototype.getInvitees = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_INVITEES;
      return this.request(parameter, cb);
    };
    My.prototype.info = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.USER_INFO;
      parameter.userId = this._userId;
      parameter.token = this._token;

      return this.request(parameter, cb);
    };

    My.prototype.getVipPoint = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_VIP_POINT;
      parameter.userId = this._userId;
      parameter.token = this._token;

      return this.request(parameter, cb);
    };

    My.prototype.getUserPropList = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_USER_PROP_LIST;
      parameter.userId = this._userId;
      parameter.token = this._token;

      return this.request(parameter, cb);
    };

    //@see http://10.0.0.55/mediawiki/index.php/AssetFunctions.exchangeVip
    My.prototype.exchangeVip = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.EXCHANGE_VIP;
      parameter.userId = this._userId;
      parameter.token = this._token;

      return this.request(parameter, cb);
    };

    return My;
  });
})();
;{}(function() {
  !(function(name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("News", function(Parent) {
    function News() {
      if (!(this instanceof News)) {
        if (!News.instance) {
          var args = Array.prototype.slice.call(arguments);
          News.instance = new News(args[0]);
        }

        return News.instance;
      }
    }

    News.prototype = Object.create(Parent.prototype);

    News.prototype.funcTags = {
      GET_NEWS_INFO_BY_NEWS_ID : 20006012,
      GET_NEWS_COMMENT: 20006007
    };

    /**
     * 根据动态Id获取动态详细信息
     * @see http://10.0.0.55/mediawiki/index.php/NewsV2Functions.getNewsInfoByNewsId
     */
    News.prototype.getNewsInfoByNewsId = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_NEWS_INFO_BY_NEWS_ID;

      return this.request(parameter, cb);
    };

    /**
     * 获取动态的评论列表
     * @see http://10.0.0.124/mediawiki/index.php/NewsV2Functions.getNewsComment
     */
    News.prototype.getNewsComment = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_NEWS_COMMENT;

      return this.request(parameter, cb);
    };

    return News;
  });
})();
;{}(function () {
    !(function (name, definition) {
        // Check exports
        var hasExports = typeof module !== 'undefined' && module.exports;
        if (hasExports) {
            module.exports = definition;
        } else {
            // Assign to common namespaces or simply the global object (window)
            this.apis = this.apis || {};
            this.apis[name] = definition;
        }
    })("Play", function (Parent) {
        function Play(arg) {
            if (!(this instanceof Play)) {
                return new Play(arg);
            }
            if(arg) {
                this._userId = arg.userId;
                this._token = arg.token;
            }
        }

        Play.prototype = Object.create(Parent.prototype);

        Play.prototype.funcTags = {
            GET_ACTOR_AND_USER_TOP_LIST:88008800, /*排行榜*/
            ACTOR_SORT_BY_HEADLINES:10002043, /*上头条礼物排行榜*/
            TIME_BY_HEADLINES:10002047, /*上头条新榜单*/
            USER_RECEIVE_GIFT:88008900,
            QUERY_MY_SELF_COUNT:88008901,
            CEREMONY_CHECK_CAR_INFO:88009000,
            READ_ACTIVITY_INFO:88009001,
            LUCKYID_TO_USERID:10005047,/*还原靓号*/
            GET_USER_INFO:10005001,/*获取用户信息*/
            //首充用户领取礼包
            RECEIVE_USER_FIRST_RECHARGE_PACKAGE : 20010012,
            GET_USER_FIRST_RECHARGE_PACKAGE_INFO : 20010013,

            GET_SHARE_RECOMMENDED_MSG: 51010801,/*获取分享信息 meShow接口*/

            //金币商城/*meShow接口*/
            GET_USER_GOLD_COIN: 51030106,
            GET_COIN_PROP_LIST: 51030108,
            EXCHANGE_COIN_PROP: 51030109,
            IS_CHARGE_LOTTERY_DRAW: 51010306,
            DO_LOTTERY: 51010304,
            GET_LOTTERY_PRIZE_LIST: 51010307,

            //谁是百万富翁/*定制接口*/
            GET_QUIZ_RANKING_LIST: 51050403,
            GET_USER_QUIZ_AMOUNT: 51050406,
            GET_USER_OBTAIN_LIVECARD:51050412,

            //新用户七日狂欢/*kkgame接口*/
            GET_USER_TASK_INFO: 88009100,
            GET_TASK_GAIN: 88009101,
            GET_HALF_PRICE_GIFT: 88009102,
            GET_TASK_BOX: 88009103,

            //汉今国际产品在线购买/*meShow接口*/
            GET_PRODUCTS: 51060511,

            //我的星光梦
            CHECK_DREAM_SIGN_UP: 88008819,
            UPLOAD_GREAM_SIGN_UP: 88008820,
            GET_GREAM_LIST: 88008821,
            VOTE_FOR_GREAM_ANCHOR: 88008822,
            DRAW_DREAM_ACTIVITY: 88008823,

            //四周年
            GET_FANS_LIST_FOR_ACTOR: 10003013,

            //周星榜单
            GET_WEEK_GIFT_RANK: 10002073,/*meShow接口*/

            //颜值监测站
            GET_FACE_SCORE_CONTRAST: 86000030,

            //兑吧合作页-新用户注册领取VIP
            SEND_SMS_FOR_NEW_USER : 10001022,
            CHECK_SMS_FOR_NEW_USER : 10001031,/*meShow接口*/
            GET_PRESENT_FOR_DUIBA_USER : 50001001,/*meShow接口*/

            // 年度盛典晋级赛房间内展示
            CEREMONY_JINJISAI: 88009000,
            GET_SUBCATA_ROOM_LIST: 20010302, /*获取主播模块*/
            GET_HOT_ROOM_LSIT:55000003, /*综合排序*/
            GET_ROOM_LIST:60001002,
            GET_LIVE_ROOM_BY_CATAID: 20010309,

            //KK战神
            GET_RICH_LIST: 86000032, /*战神列表*/
            QUERY_RICH_COUNT: 86000033, /*被膜拜次数*/
            CULT_RICH_USER: 86000034, /*膜拜*/
            QUERY_OWN_COUNT: 86000035, /*我的膜拜信息*/

            GET_USER_SHARE_REWARD_LIST: 20010019,
            GET_ACTOR_PROMOTION_REWARD_LIST: 20010020,

            //兑换券

            GET_VOUCHER_SEND:86000091,/*用户转赠奖券*/
            GET_VOUCHER_CHANGE: 86000093,/*用户兑换票券*/
            GET_VOUCHE_INFO: 86000094/*用户获取拥有票券*/

        };

        Play.prototype.getShareRecommendedMsg = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_SHARE_RECOMMENDED_MSG;

            return this.request(parameter, cb);
        };

        Play.prototype.getActorAndUserTopList = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_ACTOR_AND_USER_TOP_LIST;
            parameter.start =  parameter.start || 0;
            parameter.offset =  parameter.offset || 0;

            return this.request(parameter, cb);
        };

        Play.prototype.actorSortByHeadlines = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.ACTOR_SORT_BY_HEADLINES;

            return this.request(parameter, cb);
        };

        Play.prototype.timeByHeadlines = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.TIME_BY_HEADLINES;

            return this.request(parameter, cb);
        };

        Play.prototype.receiveUserGift = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.USER_RECEIVE_GIFT;
            parameter.userId = this._userId;
            parameter.token = this._token;

            return this.request(parameter, cb);
        };

        Play.prototype.queryMySelfRank = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.QUERY_MY_SELF_COUNT;
            parameter.userId = this._userId;
            parameter.token = this._token;

            return this.request(parameter, cb);
        };

        Play.prototype.getCeremonyCarInfo = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.CEREMONY_CHECK_CAR_INFO;
            parameter.userId = this._userId;
            parameter.token = this._token;
            parameter.type = parameter.type || 1;
            parameter.a = parameter.a || 2;
            parameter.c = parameter.c || 100101;

            return this.request(parameter, cb);
        };

        Play.prototype.getCeremonyCar = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.CEREMONY_CHECK_CAR_INFO;
            this._userId && 100000 !== this._userId && (parameter.userId = parameter.userId || this._userId);
            this._token && 'unknow' !== this._token && (parameter.token = parameter.token || this._token);
            parameter.type = parameter.type || 2;
            parameter.a = parameter.a || 2;
            parameter.c = parameter.c || 100101;

            return this.request(parameter, cb);
        };

        Play.prototype.readActivityInfo = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.READ_ACTIVITY_INFO;
            this._userId && 100000 !== this._userId && (parameter.userId = parameter.userId || this._userId);
            this._token && 'unknow' !== this._token && (parameter.token = parameter.token || this._token);
            parameter.type = parameter.type || 1;
            parameter.a = parameter.a || 2;
            parameter.c = parameter.c || 100101;

            return this.request(parameter, cb);
        };

        Play.prototype.luckyIdToUserId = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.LUCKYID_TO_USERID;
            parameter.luckyId = parameter.luckyId || this._userId;

            return this.request(parameter, cb);
        };

        Play.prototype.getUserInfo = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_USER_INFO;
            parameter.userId || (parameter.token = this._token);
            parameter.userId = parameter.userId || this._userId;

            return this.request(parameter, cb);
        };

        //首充用户领取礼包
        Play.prototype.receiveUserFirstRecharPackage = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.RECEIVE_USER_FIRST_RECHARGE_PACKAGE;
            parameter.userId = this._userId;

            return this.request(parameter, cb);
        };
        //首充用户查询礼包
        Play.prototype.getUserFirstRechargePackageInfo = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_USER_FIRST_RECHARGE_PACKAGE_INFO;
            parameter.userId = this._userId;

            return this.request(parameter, cb);
        };

        //金币商城-我的金币
        Play.prototype.getUserGoldCoin = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_USER_GOLD_COIN;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        //金币商城-礼物列表
        Play.prototype.getCoinPropList = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_COIN_PROP_LIST;
            parameter.pageIndex = parameter.pageIndex || 1;
            parameter.countPerPage = parameter.countPerPage || 10;

            return this.request(parameter, cb);
        };
        //金币商城-兑换礼物
        Play.prototype.exchangeCoinProp = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.EXCHANGE_COIN_PROP;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        //金币商城-抽奖机会
        Play.prototype.isChargeLotteryDraw = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.IS_CHARGE_LOTTERY_DRAW;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        //金币商城-抽奖
        Play.prototype.doLottery = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.DO_LOTTERY;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        //金币商城-中奖信息
        Play.prototype.getLotteryPrizeList = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_LOTTERY_PRIZE_LIST;

            return this.request(parameter, cb);
        };

        //谁是百万富翁-榜单
        Play.prototype.getQuizRankingList = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_QUIZ_RANKING_LIST;

            return this.request(parameter, cb);
        };
        //谁是百万富翁-个人信息
        Play.prototype.getUserQuizAmount = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_USER_QUIZ_AMOUNT;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        //谁是百万富翁-是否通过观看直播获得复活卡
        Play.prototype.getUserObtainCard = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_USER_OBTAIN_LIVECARD;
            parameter.userId = parameter.userId || this._userId;

            return this.request(parameter, cb);
        };


        //新用户七日狂欢-用户任务数据
        Play.prototype.getUserTaskInfo = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_USER_TASK_INFO;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        //新用户七日狂欢-领取完成任务奖励
        Play.prototype.getTaskGain = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_TASK_GAIN;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        //新用户七日狂欢-消费秀币获取半价礼物
        Play.prototype.getHalfPriceGift = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_HALF_PRICE_GIFT;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        //新用户七日狂欢-领取宝箱
        Play.prototype.getTaskBox = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_TASK_BOX;
            parameter.userId = parameter.userId || this._userId;
            parameter.token = parameter.token || this._token;

            return this.request(parameter, cb);
        };
        
        //汉今国际在线购买
        Play.prototype.getProducts = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_PRODUCTS;
            parameter.start = parameter.start || 0;
            parameter.num = parameter.num || 10;

            return this.request(parameter, cb);
        };

        //我的星光梦-检测是否报名过
        Play.prototype.checkDreamSignUp = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.CHECK_DREAM_SIGN_UP;
            parameter.userId = this._userId;
            parameter.token = this._token;
            parameter.a = 2;

            return this.request(parameter, cb);
        };
        //我的星光梦-上传报名表
        Play.prototype.uploadGreamSignUp = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.UPLOAD_GREAM_SIGN_UP;
            parameter.userId = this._userId;
            parameter.token = this._token;
            parameter.a = 2;

            return this.request(parameter, cb);
        };
        //我的星光梦-主播列表(全局)
        Play.prototype.getGreamList = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_GREAM_LIST;
            parameter.page = parameter.page || 1;
            parameter.a = 2;

            return this.request(parameter, cb);
        };
        //我的星光梦-主播列表(搜索)
        Play.prototype.searchGreamAnchor = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_GREAM_LIST;
            parameter.page = 1;
            parameter.a = 2;

            return this.request(parameter, cb);
        };
        //我的星光梦-用户投票
        Play.prototype.voteForGreamAnchor = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.VOTE_FOR_GREAM_ANCHOR;
            parameter.userId = this._userId;
            parameter.token = this._token;
            parameter.a = 2;

            return this.request(parameter, cb);
        };
        //我的星光梦-抽奖
        Play.prototype.drawDreamActivity = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.DRAW_DREAM_ACTIVITY;
            parameter.userId = this._userId;
            parameter.token = this._token;

            return this.request(parameter, cb);
        };
        // 年度盛典晋级赛房间内展示
        Play.prototype.ceremonyJinjisai = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.CEREMONY_JINJISAI;
            parameter.roomId = parameter.roomId;
            parameter.familyId = parameter.familyId;
            parameter.type = parameter.type || 4;
            parameter.platform = parameter.platform || 1;
            parameter.a = parameter.a || 2;
            parameter.c = parameter.c || 100101;

            return this.request(parameter, cb);
        };
        //四周年成长值获取及兑换
        Play.prototype.getOrExchangeGrowth = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.CEREMONY_JINJISAI;
            parameter.userId = this._userId;
            parameter.token = this._token;

            return this.request(parameter, cb);
        };
        //四周年历程
        Play.prototype.getMyCourse = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.CEREMONY_JINJISAI;

            return this.request(parameter, cb);
        };
        //四周年最支持主播的土豪
        Play.prototype.getFansListForActor = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_FANS_LIST_FOR_ACTOR;
            parameter.platform = 1;
            parameter.slotType = 3;

            return this.request(parameter, cb);
        };

        //颜值监测站
        Play.prototype.getFaceScoreContrast = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_FACE_SCORE_CONTRAST;
            parameter.platform = 1;

            return this.request(parameter, cb);
        };

        //周星榜单
        Play.prototype.getWeekGiftRank = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_WEEK_GIFT_RANK;
            parameter.platform = 1;

            return this.request(parameter, cb);
        };

        Play.prototype.getSubList = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.GET_SUBCATA_ROOM_LIST;
            parameter.start = parameter.start || 0;
            parameter.offset = parameter.offset || 10;

            return this.request(parameter, cb);
        };

        Play.prototype.getHotRoomList = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.GET_HOT_ROOM_LSIT;
            parameter.a = parameter.a || 2;
            parameter.c = parameter.c || 100101;

            return this.request(parameter, cb);
        };

        Play.prototype.getRoomList = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.GET_ROOM_LIST;
            parameter.platform = parameter.platform || 1;
            parameter.a = parameter.a || 1;

            return this.request(parameter, cb);
        };

        Play.prototype.getLiveRoom = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;

            parameter.FuncTag = this.funcTags.GET_LIVE_ROOM_BY_CATAID;
            return this.request(parameter, cb);
        };

        //KK战神
        Play.prototype.getRichList = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.GET_RICH_LIST;
            parameter.platform = parameter.platform || 1;
            parameter.a = parameter.a || 1;

            return this.request(parameter, cb);
        };

        Play.prototype.queryRichCount = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.QUERY_RICH_COUNT;
            parameter.platform = parameter.platform || 1;
            parameter.a = parameter.a || 1;

            return this.request(parameter, cb);
        };

        Play.prototype.cultRichUser = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.CULT_RICH_USER;
            parameter.userId = this._userId;
            parameter.token = this._token;
            parameter.platform = parameter.platform || 1;
            parameter.a = parameter.a || 1;

            return this.request(parameter, cb);
        };

        Play.prototype.queryOwnCount = function (parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.QUERY_OWN_COUNT;
            parameter.userId = this._userId;
            parameter.token = this._token;
            parameter.platform = parameter.platform || 1;
            parameter.a = parameter.a || 1;

            return this.request(parameter, cb);
        };

        //兑吧合作页-新用户注册领取VIP:发送验证码 变量phoneNum
        Play.prototype.sendSmsForNewUser = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.SEND_SMS_FOR_NEW_USER;
            parameter.platform = parameter.platform || 1;
            parameter.smsType = 8;

            return this.request(parameter, cb);
        };
        //兑吧合作页-新用户注册领取VIP:验证验证码 变量phoneNum, verifyCode
        Play.prototype.checkSmsForNewUser = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.CHECK_SMS_FOR_NEW_USER;
            parameter.platform = parameter.platform || 1;
            parameter.channel = 60166;
            parameter.refRoomId = 6055560;

            return this.request(parameter, cb);
        };
        //兑吧合作页-新用户注册领取VIP:领取VIP 变量userId, phoneNum
        Play.prototype.getPresentForDuibaUser = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.GET_PRESENT_FOR_DUIBA_USER;
            parameter.c = 60166;
            parameter.refRoomId = 6055560;

            return this.request(parameter, cb);
        };

        Play.prototype.getUserShareReward = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.GET_USER_SHARE_REWARD_LIST;
            parameter.userId = this._userId;
            parameter.token = this._token;
            parameter.start = parameter.start || 1;
            parameter.end = parameter.end || 10;

            return this.request(parameter, cb);
        };

        Play.prototype.getActorPromotionRewardList = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            cb = args.cb;
            parameter = args.parameter;
            parameter.FuncTag = this.funcTags.GET_ACTOR_PROMOTION_REWARD_LIST;
            parameter.userId = this._userId;
            parameter.token = this._token;
            parameter.start = parameter.start || 1;
            parameter.end = parameter.end || 10;

            return this.request(parameter, cb);
        };


        //用户转赠折扣券
        Play.prototype.getSendVoucher = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_VOUCHER_SEND;
            parameter.userId = this._userId;
            parameter.token = this._token;

            return this.request(parameter, cb);
        };
        //用户兑换折扣券
        Play.prototype.getChangeVoucher = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_VOUCHER_CHANGE;
            parameter.userId = this._userId;
            parameter.token = this._token;

            return this.request(parameter, cb);
        };
        //用户获取拥有票券信息
        Play.prototype.getVoucherInfo = function(parameter, cb) {
            var args = this.mixArguments.apply(this, arguments);
            parameter = args.parameter;
            cb = args.cb;
            parameter.FuncTag = this.funcTags.GET_VOUCHE_INFO;
            parameter.userId = this._userId;
            parameter.token = this._token;

            return this.request(parameter, cb);
        };

       return Play;
    });
})();
;{}(function() {
  !(function(name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("Plaza", function(Parent) {
    function Plaza() {
      if (!(this instanceof Plaza)) {
        if (!Plaza.instance) {
          var args = Array.prototype.slice.call(arguments);
          Plaza.instance = new Plaza(args[0]);
        }

        return Plaza.instance;
      }
    }

    Plaza.prototype = Object.create(Parent.prototype);

    Plaza.prototype.funcTags = {
      GET_SUBCATA_ROOM_LIST : 10002032,
      GET_KK_USER_RELATION_ROOM_LIST : 55000001
    };

    Plaza.prototype.getSubList = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_SUBCATA_ROOM_LIST;
      parameter.start = parameter.start || 0;
      parameter.partId = parameter.partId || 100;
      parameter.offset = parameter.offset || 10;
      parameter._cache = this.CACHE_CATALOG.M3;

      return this.request(parameter, cb);
    };

    /**
     * 获取用户有关的房间列表接口
     *
     * @see http://10.0.0.55/mediawiki/index.php/KKHallFunctions.getKKUserRelationRoomList
     */
    Plaza.prototype.getKKUserRelationRoomList = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_KK_USER_RELATION_ROOM_LIST;

      return this.request(parameter, cb);
    };

    return Plaza;
  });
})();
;{}(function() {
	!(function(name, definition) {
		// Check exports
		var hasExports = typeof module !== 'undefined' && module.exports;
		if (hasExports) {
			module.exports = definition;
		} else {
			// Assign to common namespaces or simply the global object (window)
			this.apis = this.apis || {};
			this.apis[name] = definition;
		}
	})("Prop", function(Parent) {
		function Prop() {
			if (!(this instanceof Prop)) {
				if (!Prop.instance) {
					var args = Array.prototype.slice.call(arguments);
					Prop.instance = new Prop(args[0]);
				}

				return Prop.instance;
			}
		}

		Prop.prototype = Object.create(Parent.prototype);

		Prop.prototype.funcTags = {
			GET_PROP_LIST : 10009001,
			GET_CAR_LIST : 10005011,
			GET_CAR_LIST_V2 : 20010101,
			BUY_PROP : 10005010,
			BUY_CAR : 10005012,
			BUY_CAR_V2 : 20010105,
			Virtual_Id_list : 10005059,
			Get_Id_Ticket_Count:10005037,
			Buy_VirtualId:10005040,
			search_VirtualId:10005063,
			GET_GROUP_LIST: 51130202,
			GET_AGENCY_LIST: 51130201,
			GET_CITY_BY_IP: 51090401
		};

		/**
		 * 获取道具资源列表
		 *
		 * @see http://10.0.0.55/mediawiki/index.php/ResourceFunctions.getPropList
		 */
		Prop.prototype.getPropList = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			cb = args.cb;
			parameter = args.parameter;
			if (this.CACHE_CATALOG) {
				parameter._cache = this.CACHE_CATALOG.M3;
			}
			parameter.FuncTag = this.funcTags.GET_PROP_LIST;

			return this.request(parameter, cb);
		};

		/**
		 * 新版获取汽车资源列表
		 *
		 * @author zyg
		 * @see wiki暂无
		 */
		Prop.prototype.getCarList = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.countPerPage = parameter.countPerPage ? parameter.countPerPage : 10;
			parameter.pageIndex = parameter.pageIndex ? parameter.pageIndex : 1;

			// parameter._cache = this.CACHE_CATALOG.M3;
			parameter.FuncTag = this.funcTags.GET_CAR_LIST_V2;

			return this.request(parameter, cb);
		};
		/**
		 * 购买道具
		 *
		 * @author zyg
		 * @see http://10.0.0.55/mediawiki/index.php/ConsumAction.buyProp
		 */
		Prop.prototype.buyProp = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;
			parameter.FuncTag = this.funcTags.BUY_PROP;

			return this.request(parameter, cb);
		};
		/**
		 * 新版购买汽车的接口
		 *
		 * @author zyg
		 * @see wiki暂无
		 * @param parameter = {
		 *            userId: token : carId : 汽车id months : 购买的月份 referrerId :
		 *            渠道推荐Id ,非必须 }
		 */
		Prop.prototype.buyCar = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.FuncTag = this.funcTags.BUY_CAR_V2;

			return this.request(parameter, cb);
		};

		/**
		 * 查询虚拟号列表
		 *
		 * @author zhh
		 * @see wiki http://10.0.0.55/mediawiki/index.php/UserAssetAction.getVirtualIdlist
		 * @param parameter = {
		 *             }
		 */
		Prop.prototype.getVirtuallist = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.FuncTag = this.funcTags.Virtual_Id_list;

			return this.request(parameter, cb);
		};

		/**
		 * 查询用户号券余额
		 *
		 * @author zhh
		 * @see wiki http://10.0.0.55/mediawiki/index.php/UserAssetAction.getIdTicketCount
		 * @param parameter = {userId: token :
		 *             }
		 */
		Prop.prototype.getIdTicketCount = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.FuncTag = this.funcTags.Get_Id_Ticket_Count;

			return this.request(parameter, cb);
		};

		/**
		 * 购买虚拟号码
		 *
		 * @author zhh
		 * @see wiki http://10.0.0.55/mediawiki/index.php/UserAssetAction.buyVirtualId
		 * @param parameter = {userId: token : virtualId: ticketType
		 *             }
		 */
		Prop.prototype.buyVirtualId = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.FuncTag = this.funcTags.Buy_VirtualId;

			return this.request(parameter, cb);
		};


		/**
		 * @see wiki http://10.0.0.55/mediawiki/index.php/UserAssetAction.fuzzyQueryVirtualId
		 */
		Prop.prototype.searchVirtualId = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.FuncTag = this.funcTags.search_VirtualId;

			return this.request(parameter, cb);
		};


		/**
		 * 获取归属组列表
		 * @see wiki http://10.0.0.124/mediawiki/index.php/AgencyFunctions.getGroupList
		 */
		Prop.prototype.getGroupList = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.FuncTag = this.funcTags.GET_GROUP_LIST;

			return this.request(parameter, cb);
		};


		/**
		 * 通过归属组获取代理列表
		 * @see wiki http://10.0.0.124/mediawiki/index.php/AgencyFunctions.getGroupList
		 */
		Prop.prototype.getAgencyListByGroupId = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.FuncTag = this.funcTags.GET_AGENCY_LIST;

			return this.request(parameter, cb);
		};


		/**
		 * 根据IP获取城市信息（海外）
		 * @see wiki http://10.0.0.124/mediawiki/index.php/OtherFunctions.getCityByIp
		 */
		Prop.prototype.getCityByIp = function(parameter, cb) {
			var args = this.mixArguments.apply(this, arguments);
			parameter = args.parameter;
			cb = args.cb;

			parameter.FuncTag = this.funcTags.GET_CITY_BY_IP;

			return this.request(parameter, cb);
		};

		return Prop;
	});
})();
;{}(function() {
  !(function(name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("User", function(Parent) {
    function User(arg) {
      if (!(this instanceof User)) {
        if (!User.instance) {
          var args = Array.prototype.slice.call(arguments);
          User.instance = new User(args[0]);
        }

        return User.instance;
      }
    }

    User.prototype = Object.create(Parent.prototype);

    User.prototype.funcTags = {
      USER_INFO : 10005001,
      USER_INFO_BY_ANY_ID: 10005043,
      LUCKYID_TO_USERID : 10005047,
      GET_VIEWED_ROOMLIST : 10002033,
      USER_NAME_VALIDITY : 10001001,
      USER_SECURITY_REGISTER : 40000001,
      USER_SECURITY_LOGIN : 40000015,
      USER_LOGIN_THIRD : 10001013,
      GET_ACTOR_LIVE_FLOW_ADDRESS:60001002,
      USER_REGISTER_THIRD : 10001006,
      GET_V2_SQUARE_TITLE_LIST: 51070501,
      GET_SUB_CATA_ROOM_LIST: 20010302
    };

    User.prototype.convertToUserId = function(luckyId, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      var parameter = {};
      parameter.FuncTag = this.funcTags.LUCKYID_TO_USERID;
      parameter.luckyId = typeof args.parameter === "object" ? args.parameter.luckyId : args.parameter;

      return this.request(parameter, cb);
    };

    User.prototype.info = function(userId, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      var parameter = {};
      parameter.FuncTag = this.funcTags.USER_INFO_BY_ANY_ID;
      parameter.userId = typeof args.parameter === "object" ? args.parameter.userId : args.parameter;

      return this.request(parameter, cb);
    };

    User.prototype.getViewedRoomList = function(userIds, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      var parameter = {};
      parameter.FuncTag = this.funcTags.GET_VIEWED_ROOMLIST;
      parameter.userIds = args.parameter.userIds instanceof Array ? args.parameter.userIds : args.parameter;
      parameter.userIds = parameter.userIds instanceof Array ? parameter.userIds.join(',') : parameter.userIds;

      parameter._cache = this.CACHE_CATALOG.M10;

      return this.request(parameter, cb);
    };

    User.prototype.verifyUserName = function(userName, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      var parameter = {};
      parameter.FuncTag = this.funcTags.USER_NAME_VALIDITY;
      parameter.username = typeof args.parameter === "object" ? args.parameter.userName : args.parameter;

      return this.request(parameter, cb);
    };

    User.prototype.register = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.USER_SECURITY_REGISTER;

      if (parameter.password) {
        parameter.psword = parameter.password;
        delete parameter.password;
      }

      parameter.username = encodeURIComponent(parameter.username);
      parameter.psword = parameter.psword;

      var up = this.up(parameter.username, parameter.psword);

      delete parameter.username;
      delete parameter.psword;

      parameter.up = up;

      return this.securityRequest(parameter, cb);
    };

    User.prototype.login = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.USER_SECURITY_LOGIN;

      if (parameter.password) {
        parameter.psword = parameter.password;
        delete parameter.password;
      }

      parameter.rc = "E52A4_" + parameter.username;
      parameter.username = encodeURIComponent(parameter.username);
      parameter.psword = parameter.psword;

      var up = this.up(parameter.username, parameter.psword);
      parameter.up = parameter.up || up;

      delete parameter.username;
      delete parameter.psword;

      return this.securityRequest(parameter, cb);
    };

    User.prototype.loginThird = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.USER_LOGIN_THIRD;

      return this.request(parameter, cb);
    };

    User.prototype.registerThird = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.USER_REGISTER_THIRD;

      return this.request(parameter, cb);
    };

    // @see http://10.0.0.55/mediawiki/index.php/ActorFunction.getActorLiveFlowAddress
    User.prototype.getActorLiveFlowAddress = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      var parameter = {};
      parameter.FuncTag = this.funcTags.GET_ACTOR_LIVE_FLOW_ADDRESS;
      parameter.roomId = typeof args.parameter === "object" ? args.parameter.roomId : args.parameter;
      args.parameter.userId && (parameter.userId = args.parameter.userId);

      return this.request(parameter, cb);

    };

    User.prototype.getV2SquareTitleList = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_V2_SQUARE_TITLE_LIST;

      return this.request(parameter, cb);
    };

    User.prototype.getSubCataRoomList = function(parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter = args.parameter;
      parameter.FuncTag = this.funcTags.GET_SUB_CATA_ROOM_LIST;

      return this.request(parameter, cb);
    };

    User.roomSource = User.prototype.roomSource = {
      SHOW: 1, //秀场直播
      GAME: 2, //游戏直播
      KK_MOBILE:9, // kk唱响手机端直播
      BANG: 10, //棒直播
      ALTERNATE: 8,
      VR: 12, //VR直播
      VR_PRIVATE: 13, //VR 私聊房间
      PROGRAM: 7, //节目房
      SPRITE:11, //使用直播精灵的娱乐房
      FRIEND:14, //交友房
      RADIO: 17,
      DOLL: 16, //娃娃机
      LOTTERY:19, //时时彩
      MUTI_VIDEO: 23,  //多人视频
      MUTI_AUDIO: 24,  //多人语音24
      MUTI_NEW_AUDIO: 31,  //新版多人语音
      MUTI_LUCKY: 27,   //幸运房
      MUTI_SPOTLIGHT: 30  //轮播房
    };

    return User;
  });
})();
;{}(function() {
  !(function(name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("Zjh", function (Parent) {
    function Zjh(arg) {
      if (!(this instanceof Zjh)) {
        return new Zjh(arg);
      }
      this._userId = arg.userId;
      this._token = arg.token;
      this.platform = arg.platform;
    }
  
    Zjh.prototype = Object.create(Parent.prototype);
  
    Zjh.prototype.funcTags = {
      GET_GAME_INIT_DATA: 86000041,
      BET_ON_COUNTRY: 86000040,
      GET_GAME_RESULT_RECORD: 86000042,
      GET_GAME_STATUS_INFO: 86000043
    };
  
    /**
     * http://10.0.0.55/mediawiki/index.php/CardGameFunction.getGameInitData
     * @param parameter
     * @param cb
     */
    Zjh.prototype.getGameInitData = function (parameter,cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_GAME_INIT_DATA;
      parameter.userId = this._userId;
      parameter.token = this._token;
      parameter.platform = this.platform;
  
      return this.request(parameter, cb);
    }
  
    /**
     * http://10.0.0.55/mediawiki/index.php/CardGameFunction.betOnCountry
     * @param parameter
     * @param cb
     */
    Zjh.prototype.betOnCountry = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.BET_ON_COUNTRY;
      parameter.userId = this._userId;
      parameter.token = this._token;
      parameter.platform = this.platform;
  
      return this.request(parameter, cb);
    }
  
    /**
     * http://10.0.0.55/mediawiki/index.php/CardGameFunction.getGameResultRecord
     * @param parameter
     * @param cb
     */
    Zjh.prototype.getGameResultRecord = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_GAME_RESULT_RECORD;
      parameter.userId = this._userId;
      parameter.token = this._token;
      parameter.platform = this.platform;
  
      return this.request(parameter, cb);
    }
  
    /**
     * http://10.0.0.55/mediawiki/index.php/CardGameFunction.getGameStatusInfo
     * @param parameter
     * @param cb
     */
    Zjh.prototype.getGameStatusInfo = function (parameter, cb) {
      var args = this.mixArguments.apply(this, arguments);
      cb = args.cb;
      parameter.FuncTag = this.funcTags.GET_GAME_STATUS_INFO;
      parameter.userId = this._userId;
      parameter.token = this._token;
      parameter.platform = this.platform;
      parameter.isRead = true;
  
      return this.request(parameter, cb);
    }
  
    return Zjh;
  });
})();
;{}window.SERVER_LIFT_TIME = 1687737003695;if(typeof module !== 'undefined' && module.exports){module.exports.SERVER = {"API_SERVER":"https://api.kktv9.com/meShow/entrance","JS_API_SERVER_NEW":"http://122.112.161.144:9093","CDN_SERVER":"/CDN/output","CENTRAL_SERVER_ADDRESS":"https://ws.kktv9.com/","APP_SHARE_PLAYBACK_SERVER":"http://kkabroad.kktv9.com/"};module.exports.SERVER_LIFT_TIME = 1687737003695;module.exports.API_NAMES = ["Activity","Earnings","Game","My","News","Play","Plaza","Prop","User","Zjh"];}else{window.SERVER = {"API_SERVER":"https://api.kktv9.com/meShow/entrance","JS_API_SERVER_NEW":"http://122.112.161.144:9093","CDN_SERVER":"/CDN/output","CENTRAL_SERVER_ADDRESS":"https://ws.kktv9.com/","APP_SHARE_PLAYBACK_SERVER":"http://kkabroad.kktv9.com/"};};;{}(function() {
  !(function(name, definition) {
    // Check exports
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasExports) {
      module.exports = definition;
    } else {
      // Assign to common namespaces or simply the global object (window)
      this.apis = this.apis || {};
      this.apis[name] = definition;
    }
  })("securityPlugin", function(exp) {
    var hexcase = 0;
    var b64pad = "";
    var chrsz = 8;

    function hex_md5(s) {
      return binl2hex(core_md5(str2binl(s), s.length * chrsz));
    }
    function b64_md5(s) {
      return binl2b64(core_md5(str2binl(s), s.length * chrsz));
    }
    function str_md5(s) {
      return binl2str(core_md5(str2binl(s), s.length * chrsz));
    }
    function hex_hmac_md5(key, data) {
      return binl2hex(core_hmac_md5(key, data));
    }
    function b64_hmac_md5(key, data) {
      return binl2b64(core_hmac_md5(key, data));
    }
    function str_hmac_md5(key, data) {
      return binl2str(core_hmac_md5(key, data));
    }

    function core_md5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << ((len) % 32);
      x[(((len + 64) >>> 9) << 4) + 14] = len;

      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
      }
      return Array(a, b, c, d);

    }

    function md5_cmn(q, a, b, x, s, t) {
      return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
      return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
      return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
      return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
      return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function core_hmac_md5(key, data) {
      var bkey = str2binl(key);
      if (bkey.length > 16)
        bkey = core_md5(bkey, key.length * chrsz);

      var ipad = Array(16), opad = Array(16);
      for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
      }

      var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
      return core_md5(opad.concat(hash), 512 + 128);
    }

    function safe_add(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xFFFF);
    }

    function bit_rol(num, cnt) {
      return (num << cnt) | (num >>> (32 - cnt));
    }

    function str2binl(str) {
      var bin = Array();
      var mask = (1 << chrsz) - 1;
      for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
      return bin;
    }

    function binl2str(bin) {
      var str = "";
      var mask = (1 << chrsz) - 1;
      for (var i = 0; i < bin.length * 32; i += chrsz)
        str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
      return str;
    }

    function binl2hex(binarray) {
      var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
      var str = "";
      for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
      }
      return str;
    }

    function binl2b64(binarray) {
      var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var str = "";
      for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
        for (var j = 0; j < 4; j++) {
          if (i * 8 + j * 6 > binarray.length * 32)
            str += b64pad;
          else
            str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
        }
      }
      return str;
    }

    function kks(p) {

      var i;
      var ks = new Array();
      var o = {};
      for ( var k in p) {
        ks.push(k.toLowerCase());
        o[k.toLowerCase()] = p[k];
      }
      p = null;
      ks.sort();

      var s0 = "";
      for (i = 0; i < ks.length; i++) {
        var v = o[ks[i]];
        s0 += v;
      }
      if (s0.length < 8) {
        s0 += "0123456789012345";
      }

      var s1 = new Array();
      for (i = 0; i < s0.length; i++) {
        s1.push(s0.charCodeAt(i));
      }

      for (i = 0; i < parseInt(s1.length / 8) - 1; i++) {
        for (var j = 0; j < 8; j++) {
          if ((i + 1) * 8 + j < s1.length)
            s1[j] ^= s1[(i + 1) * 8 + j];
        }
      }

      var hex_tab = [57.5, 63, 24, 16.5, 50.5, 32, 26.5, 17.5, 49.5, 18, 28, 18.5, 57, 47, 27, 19]; //s~0!e@5#c$8%r^6&
      var haxTab = "";
      for (var i = 0; i < hex_tab.length; i++) {
        haxTab += String.fromCharCode(hex_tab[i] * 2);
      }
      hex_tab = haxTab;
      s0 = "";
      var sum = 0;
      for (var i = 0; i < 8; i++) {
        var a = hex_tab.charAt((s1[i] >>> 3) & 0xF) + hex_tab.charAt(s1[i] & 0xF);
        sum += a.charCodeAt(0);
        s0 += a;
      }
      s0 += hex_tab.charAt(sum % 16);
      s0 += hex_tab.charAt(sum % 13);
      // o.r = hex_md5(s0);
      return s0;
    }

    function kke(s0) {
      // var s0 = "u=" + u + "&p=" + p;
      var s1 = new Array();
      var sum = 0;
      var i;
      for (i = 0; i < s0.length; i++) {
        var a = s0.charCodeAt(i);
        sum += a;
        s1.push(a);
      }
      sum &= 0xff;
      for (i = 0; i < s1.length; i++) {
        s1[i] ^= sum;
      }
      var hex_tab = "K2DEZMIU7OP13YJ8";
      var s2 = "";
      for (i = 0; i < s1.length; i++) {
        s2 += hex_tab.charAt((s1[i] >>> 4) & 0xF) + hex_tab.charAt(s1[i] & 0xF);
      }
      s2 += hex_tab.charAt((sum >>> 4) & 0xF) + hex_tab.charAt(sum & 0xF);
      return encodeURIComponent(s2);
    }

    function securityRequest(parameter, callback) {
      parameter.platform = parameter.platform || this.PLATFORM.WEB;
      parameter.a = parameter.a || this.A;
      parameter.c = parameter.c || this.C;
      // parameter.l = parameter.l || this.L;

      var language = 'en';
      try {
        language = ($.i18n.__('language') && ($.i18n.__('language') != 'language')) ? $.i18n.__('language') : 'en';
      } catch (e) {}
      parameter.l = parameter.l || language;

      var cloneParameter = {};
      for ( var k in parameter) {
        cloneParameter[k] = parameter[k];
      }
      delete cloneParameter._cache;

      var sv = kks(cloneParameter);
      cloneParameter = null;

      parameter.sv = sv;

      return this.request(parameter, callback);
    }

    // exp.s = {};
    // exp.s.sv = kks;
    exp.securityRequest = securityRequest;
    exp.up = function (u, p) {
      var s0 = "u=" + u + "&p=" + p;
      return kke(s0);
    };
    exp.dp = function (newPassword) {
      var s0 = "dp=" + newPassword;
      return kke(s0);
    };
  });
})();

;{}(function() {
  function kktv() {
  }
  var log = function() {
    window.console && console.log && console.log([].join.call(arguments, ", "));
  };

  kktv.prototype.version = SERVER_LIFT_TIME;

  kktv.prototype.domain = 'http://www.kktv5.com';

  kktv.prototype.postDataToServer = function(host, parameterString, isJSONP, callback) {
    var task;
    if (typeof host !== 'string') {
      throw Error('Illegal Argument Exception');
    }
    if (typeof callback !== 'function') {
      throw Error('Illegal Argument Exception');
    }
    task = {
      host : host,
      parameter : parameterString,
      callback : callback,
      isJSONP : isJSONP
    };
    return this._doTask(task);
  };

  kktv.prototype._doTask = function(task) {
    var options;
    options = {
      type : 'GET',
      timeout : 20 * 1000,
      async : true,
      dataType : task.isJSONP ? 'jsonp' : 'json',
      url : task.host,
      headers : {
        'If-Modified-Since' : '0'
      },
      data : 'parameter=' + encodeURIComponent(task.parameter),
      beforeSend : function() {
        return log(new Date().toString(), 'kktv client do task:', this.url);
      },
      error : function(textStatus, errorThrown) {
        if (errorThrown === 'timeout') {
          var _e = new Error();
          _e.name = 'timeout';
          _e.message = 'request timeout';
          return task.callback(_e);
        } else {
          var _e = new Error();
          _e.name = 'unknow';
          _e.message = errorThrown;
          return task.callback(_e);
        }
        return log("kktv client error: ", JSON.stringify(textStatus), errorThrown);
      },
      success : function(data, textStatus, XMLHttpRequest) {
        if (typeof task.callback !== 'function') {
          return;
        }
        return task.callback(null, data);
      }
    };
    return $.ajax(options);
  };

  kktv.prototype.PLATFORM = {
    WEB : 1,
    ANDROID : 2,
    IPHONE : 3,
    IPAD : 4
  };
  kktv.prototype.C = 100;
  kktv.prototype.A = 1;

  // var language = 'en';
  // try {
  //   language = ($.i18n.__('language') && ($.i18n.__('language') != 'language')) ? $.i18n.__('language') : 'en';
  // } catch (e) {}
  // kktv.prototype.L = language;


  if(typeof module !== 'undefined' && module.exports){

    module.exports = kktv;

  }else{

    this.KKApi = kktv;

  }

}).call(this);
;{}if(typeof module !== 'undefined'){

  var KKApi = require('./KKApi.js'),

    securityPlugin = require('../../../api/services/client/securityPlugin.js');

}


(function(Parent) {
  Parent = Parent || new Function();
  var hasProp = {}.hasOwnProperty,

    SERVER;

  if(typeof module !== 'undefined' && module.exports){

    SERVER = clientServerConfig.SERVER;

  }else{

    SERVER = window.SERVER;

  }

  var Client = (function(API_URL, CDN_URL) {
    function Client() {
      if (!(this instanceof Prop)) {
        throw new Error("The 'new' modifier is missing");
      }
    }
    Client.prototype = Object.create(Parent.prototype);

    Client.prototype.API_URL = API_URL;
    Client.prototype.CDN_URL = CDN_URL;
    Client.prototype.isCallbackSuccess = function(data) {
      if (!data) {
        return false;
      }
      return data.TagCode === '00000000';
    }
    Client.prototype.formatCDNParameter = function(json, m) {
      var apiName, key, str, val;
      apiName = json["FuncTag"];
      m = m || this.CACHE_CATALOG.M1440;
      delete json["FuncTag"];
      strList = [];
      for (key in json) {
        if (!hasProp.call(json, key))
          continue;
        val = json[key];
        strList.push(key + "-" + val);
      }
      var str = strList.join('_');
      return "/M/" + m + "/I/" + apiName + "/P/" + str + "/json.js";
    };

    Client.prototype.request = function(parameter, cb) {
      var deferred = $.Deferred();

      var dataResultDefered = function(err, result) {
        var a = cb instanceof Function && cb(err, result);
        if (err) {
          return deferred.reject(err);
        }
        deferred.resolve(result);
      };

      if (typeof parameter !== 'object') {
        throw new Error('Illegal Argument Exception');
      }
      parameter.platform = parameter.platform || this.PLATFORM.WEB;
      parameter.a = parameter.a || 1;

      var language = 'en';
      try {
        language = ($.i18n.__('language') && ($.i18n.__('language') != 'language')) ? $.i18n.__('language') : 'en';
      } catch (e) {}
      parameter.l = parameter.l || language;
      parameter.c = parameter.c || 100101;

      var isJSONP = !parameter._cache;
      var isCDN = !!parameter._cache;
      var CDNMinute = parameter._cache;

      delete parameter._cache;

      var parameterString = isJSONP && JSON.stringify(parameter);
      var host = isCDN ? this.CDN_URL + this.formatCDNParameter(parameter, CDNMinute) : this.API_URL;

      this.postDataToServer(host, parameterString, isJSONP, function(err, data) {
        if (err) {
          if (err.name === "timeout") {
            var _e = new APIError();
            _e.name = APIError.TIMEOUT_ERROR;
            _e.pro = err;
            console && console.error(_e);
            return dataResultDefered(_e);
          } else {
            var _e = new APIError();
            _e.name = APIError.SYSTEM_ERROR;
            _e.pro = err;
            console && console.error(_e);
            return dataResultDefered(_e);
          }

        }

        if (this.isCallbackSuccess(data)) {
          dataResultDefered(null, data);
        } else {
          var _e = new APIError();
          _e.name = APIError.REQUEST_ERROR;
          _e.detail = {
            funcTag : parameter.FuncTag,
            errorCode : data.TagCode
          };
          console && console.error(_e);
          return dataResultDefered(_e);
        }
      }.bind(this));

      return deferred.promise();
    };

    Client.prototype.mixArguments = function(parameter, cb) {
      if (arguments.length === 1 && parameter instanceof Function) {
        cb = parameter;
        parameter = undefined;
      }
      cb = typeof cb == 'function' ? cb : new Function();
      parameter = parameter || {};

      return {
        parameter : parameter,
        cb : cb
      };
    };

    Client.prototype.CACHE_CATALOG = {
      M1 : 1,
      M3 : 3,
      M10 : 10,
      M30 : 30,
      M180 : 180,
      M1440 : 1440
    };

    var APIError = (function() {
      function APIError() {
      }

      APIError.prototype = Object.create(Error.prototype);

      APIError.SYSTEM_ERROR = "System Error";
      APIError.TIMEOUT_ERROR = "Timeout Error";
      APIError.REQUEST_ERROR = "Request Error";
      APIError.JSON_PARSE_ERROR = "JSON Parse Error";
      APIError.UNKNOW_ERROR = "Unknow Error";

      return APIError;
    })();

    Client.APIError = APIError;

    return Client;

  })(SERVER.API_SERVER, SERVER.CDN_SERVER);

  Parent.Client = Client;

  window.apis && window.apis.securityPlugin && window.apis.securityPlugin(Client.prototype);

  if(typeof module !== 'undefined' && module.exports){

    securityPlugin && securityPlugin(Client.prototype);

    clientServerConfig.API_NAMES.forEach(function (apiName) {
        var api = require('../../../api/services/client/apis/' + apiName + '.js');
        Client[apiName] = api(Client);
    });

    module.exports = Client;

  }else{

    Object.keys(apis).forEach(function(api) {
      Client[api] = apis[api](Client);
      apis[api] = undefined;
    });
    window.apis = undefined;

  }

})(KKApi)
;{}(function() {
	!(function(name, definition) {
		// Check exports
		var hasExports = typeof module !== 'undefined' && module.exports;
		if (hasExports) {
			module.exports = definition();
		} else {
			// Assign to common namespaces or simply the global object (window)
			this[name] = definition();
		}
	})("KKApiErrorCodeTranslater", function() {
		var map = {
			'00000000' : 'request success',
            '10000001' : 'unknown response',
            '10010107' : 'buy car fail',
			'20001002' : 'stored procedure exception',
			'20001003' : 'stored procedure exception',
			'30001005' : 'token invalid',
            '30002002' : 'lack of money',
            '05100104' : 'prop didnt exist',
            '05100105' : 'lifelong user',
            '05100106' : 'lack of money',
            '05120102' : 'car sold out',
            '05120103' : 'car ditnt exist',
            '10010106' : 'insufficient qualification',
            '05400004' : 'id sold try other',
            '05400006' : 'buy error connect manager',
            '05400003' : 'id invalid',
            '05400005' : 'ticket not enough',
            '05400007' : 'money not enough',
            '05400008' : 'not found user try',
            '05400009' : 'ticket can not buy id'
		};
		Object.keys(map).forEach(function(k) {
			if (/\,/.test(k)) {
				var val = map[k];
				var keys = k.split(',');
				for (var i = 0; i < keys.length; i++) {
					map[keys[i].trim()] = val;
				}
				delete map[k];
			}
		});
		var helper = {
			translate : function(errObj, i18nCB) {
				if (!errObj || !(errObj instanceof KKApi.Client.APIError)) {
					return undefined
				}

				if (errObj.name === KKApi.Client.APIError.SYSTEM_ERROR) {
					errObj.message = 'system error';
				} else if (errObj.name === KKApi.Client.APIError.TIMEOUT_ERROR) {
					errObj.message = 'timeout error';
				} else if (errObj.name === KKApi.Client.APIError.JSON_PARSE_ERROR) {
					errObj.message = 'json parse error';
				} else if (errObj.name === KKApi.Client.APIError.REQUEST_ERROR) {
					errObj.message = map[errObj.detail.errorCode] || (KKApi.Client.APIError.UNKNOW_ERROR + ":" + errObj.detail.errorCode);
				} else {
					errObj.message = KKApi.Client.APIError.UNKNOW_ERROR
				}

				if (typeof i18nCB === 'function') {
					errObj.i18n = i18nCB(errObj.message);
					return errObj.i18n;
				}
				return errObj.message;
			}
		}

		return helper;
	});
})();
