(function (b, r, a, n, c, h, _, s, d, k) {
  if (!b[n] || !b[n]._q) {
    for (; s < _.length; ) c(h, _[s++]);
    d = r.createElement(a);
    d.async = 1;
    d.src = "https://cdn.branch.io/branch-latest.min.js";
    k = r.getElementsByTagName(a)[0];
    k.parentNode.insertBefore(d, k);
    b[n] = h;
  }
})(
  window,
  document,
  "script",
  "branch",
  function (b, r) {
    b[r] = function () {
      b._q.push([r, arguments]);
    };
  },
  { _q: [], _v: 1 },
  "addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(
    " "
  ),
  0
); // init Branch
$(document).ready(function () {
  getapi();
  branch.init("key_live_ol6e2Q0g1uaTSszJ6wQXYgbiBscyLi1h");
});

function getapi() {
  $.ajax({
    url: "https://ip.seeip.org/geoip",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function (location) {
      console.log(location.country);
      if (location.country == "India") {
        $("#main_ind").show();
        $("#pak_home_data").hide();
        $("#news_link").show();

        $("#pak_stream").html("India's best 24x7 live streaming mobile application");

        // contentUrd();
        $("#footer_data").html(
          'Copyright 2022 Melot Technologies Private Limited/The light house technology.<br><img src="/heartlive/fbapp/images/complaint.png" class="app-logo-end"  id="comp_img">'
        );
        $("#add_bar").html(
          '<li>Mumbai Office Address: Office 1009</li><li>Saki Vihar Rd, Opposite Mtnl Off, Tunga Village,</li><li>Chandivali, Powai,</li><li>Mumbai, Maharashtra 400072</li><li>Phone: +917588722392  <span style="font-size:2.5vw;">**(Available 9:00am to 6:00PM Indian Standard Time)</span></li><li>Email: melot@heartlive.com</li>'
        );

        $("#fb_link").attr("href", "https://www.facebook.com/heartliveindiaofficial");
        $("#tw_link").attr("href", "https://twitter.com/SKIndia14?s=09");
        $("#insta_link").attr("href", "https://www.instagram.com/heartliveindiaofficial/");
        $("#u_link").attr("href", "https://www.youtube.com/channel/UCXCaK8T4Nbe05PDM8X6GONw");
      } else {
        $("#pak_stream").html("Stream & Live your Dreams");
        $("#main_ind").hide();
        $("#news_link").hide();
        $("#pak_home_data").show();

        $("#add_bar").append("<li>Email:  heartlive@heartlive.com</li>");
        $("#footer_data").html('Copyright 2023 The light house technology. All Rights Reserved<br><img src="/heartlive/fbapp/images/complaint.png" class="app-logo-end"  id="comp_img">');

        // contenteng();
      }
    },
  });
}
