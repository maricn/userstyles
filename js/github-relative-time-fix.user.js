// ==UserScript==
// @name        github.com - relative time to absolute time
// @namespace   https://github.com/maricn
// @match       https://github.com/*
// @homepageURL https://github.com/maricn/userstyles
// @version     0.1.0
// @author      maricn
// @updateURL   https://raw.githubusercontent.com/maricn/userstyles/main/js/github-relative-time-fix.user.js
// ==/UserScript==

(function () {
  "use strict";

  const times = document.querySelectorAll("relative-time, local-time");
  for (let i = 0; i < times.length; i++) {
    times[i].outerHTML =
      '<span style="font-size: 14px;">' +
      times[i].getAttribute("datetime").split("T").join("\n") +
      "</span>";
  }
})();
