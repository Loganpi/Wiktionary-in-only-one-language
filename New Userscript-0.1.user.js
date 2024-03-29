// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var divList = document.getElementsByClassName("mw-content-ltr");
    var nodeList = divList[0].querySelectorAll("*");
    console.log(nodeList);
    if (nodeList.length > 0) {

        var newDiv = document.createElement("div");
        var scrapingRomanian = true;
        var toc = document.getElementById("toc");
        toc.innerHTML = ""
        for (var i = 0; i < nodeList.length; i++) {
            var thisNode = nodeList[i];
            if (thisNode.nodeName == document.createElement("h2").nodeName) {
                // Check to see if scraping was on, if so, stop scraping
                if (scrapingRomanian == false) {
                    scrapingRomanian = true;
                }

                var span = thisNode.querySelectorAll("span")[0];
                if (span) {
                    console.log(span.id);

                    if (span.id !== "Romanian") {
                        console.log("yes");
                        scrapingRomanian = false;
                    }
                }
                else {
                    console.log("No span element found");
                }
                // console.log(span.id)


            }
            // If we are scraping, add this to the new div
            if (scrapingRomanian == false) {
                newDiv.appendChild(thisNode);
            }

        }

        console.log(newDiv);
    }
})();