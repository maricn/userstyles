// ==UserScript==
// Original:
// @name         bandcamp.com - keyboard control
// @version      0.1.0
// @match        https://bandcamp.com/*
// @match        https://*.bandcamp.com/*
// @homepageURL https://github.com/maricn/userstyles
// @updateURL   https://raw.githubusercontent.com/maricn/userstyles/main/js/bandcamp-keyboard.user.js
// ==/UserScript==

(function () {
  "use strict";
  window.addEventListener(
    "keydown",
    (event) => {
      console.log(event.code);
      // TODO: maricn - handle drag'n'drop track position
      switch (event.code) {
        case "Space":
          if (document.querySelector(".playpause"))
            document.querySelector(".playpause").click();
          if (document.querySelector(".playbutton"))
            document.querySelector(".playbutton").click();
          event.preventDefault();
          break;
      }
    },
    false
  );
})();
