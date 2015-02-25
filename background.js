
Html2Jade = require("html2jade");

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

var copy = function(info) {

  Html2Jade.convertHtml(info.selectionText, {}, function (err, jade) {
    alert(jade);
  });
}
var menu = chrome.contextMenus.create({"title": "Copy in jade",
     contexts:["selection"], "onclick": copy});

