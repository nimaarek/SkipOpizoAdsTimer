// ==UserScript==
//
// @name           opizo.me - Skip the advertising countdown timer.
// @description    Bypassing the https://opizo.me countdown timer by override a local variable called 'count', This variable is the time-intervals counter.
//
// @author         AliReza Chegini Aka. nimaarek <priv8@tuta.io>
// @version        1.0
// @namespace      https://github.com/nimaarek
//
// @downloadURL    https://raw.github.com/nimaarek/SkipOpizoAdsTimer/master/Opizo.meAdsTimerBypass.user.js
// @updateURL	   https://raw.github.com/nimaarek/SkipOpizoAdsTimer/master/Opizo.meAdsTimerBypass.user.js
//
// @match		   *://*.opizo.me/*
// @run-at		   document-body
// @grant          none
// @unwrap
//
// ==/UserScript==

// gobal variable
var NOP = 0;

// main_function
const Make_ = {
    bypass () {
        // console.log('time-intervals count value:')
        // console.log(window.count)
        window.count = NOP
    }
}

// Execution of main_function at specified times
switch (document.readyState) {
    case "loading":
        break;
    case "interactive": {
        Make_.bypass();
        break;
    }
    case "complete":
        break;
}

// THE END - GoodGame!
