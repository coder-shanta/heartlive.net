;
(function(exp) {
	var si;
	function init(text, lock) {
		var $container = $("<div id='loadingContainer'></div>");
		$container.css({
			"background" : "url(/images/global/loading/gray_1.png)",
			"border-radius" : "5px",
			"position" : "fixed",
			"z-index" : 99,
			"visibility" : "hidden"
		});

		var $lock = $('<div id="loadingContainerLock"></div>');
		$lock.css({
			position : 'fixed',
			left : 0,
			top : 0,
			right : 0,
			bottom : 0,
			"z-index" : 98,
			background : 'rgba(256, 256, 256, 0.2)'
		});

		var $panel = $("<div></div>");
		$panel.css({
			"padding" : "12px",
			"line-height" : "21px",
			"height" : "21px"
		});

		var $img = $("<span>");
		$img.css({
			display : "inline-block",
			width : "21px",
			height : "21px",
			verticalAlign : "middle",
			background : "url(/images/global/loading/loading.png) no-repeat",
			backgroundSize : "100%,100%"
		});

		var deg = 0;
		si = setInterval(function() {
			$img.css({
				"-webkit-transform" : "rotate(" + deg + "deg)"
			});
			deg = deg === 360 ? 0 : Math.min(deg + 10, 360);
		}, 25);

		$panel.append($img);
		var $text = $("<span>");
		$text.css({
			display : "inline-block",
			height : "21px",
			verticalAlign : "middle",
			paddingLeft : "8px",
			color : "#EEEEEE"
		});

		$text.text(text || $.i18n._("loading text"));
		$panel.append($text);

		$container.append($panel);
		lock && $("body").prepend($lock);
		
		$("body").prepend($container);

		setTimeout(function() {
			setOffset($container);
		}, 100);
	}

	function setOffset($container) {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		var objWidth = $container.width();
		var objHeight = $container.height();

		$container.css({
			"top" : (windowHeight - objHeight) / 2 + "px",
			"left" : (windowWidth - objWidth) / 2 + "px",
			"visibility" : "visible"
		});
	}

	var loading = {
		show : function(text, lock) {
			if (si !== undefined) {
				return;
			}
			init(text, lock);
		},
		dismiss : function() {
			clearInterval(si);
			si = undefined;
			$("#loadingContainer").remove();
			$("#loadingContainerLock").remove();
		}
	};

	exp.loading = loading;
})(window);