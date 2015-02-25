
function copyToClipboard( text ){
  var copyDiv = document.createElement('div');
  copyDiv.contentEditable = true;
  document.body.appendChild(copyDiv);
  copyDiv.innerHTML = text;
  copyDiv.unselectable = "off";
  copyDiv.focus();
  document.execCommand('SelectAll');
  document.execCommand("Copy", false, null);
  document.body.removeChild(copyDiv);
}

var copy = function(info) {
  Html2Jade.convertHtml(info.selectionText, {}, function (err, jade) {
    jade = jade.replace(/\n    /g, "\n");
    jade = jade.replace(/html\n  head\n  body/g, "");
    jade = jade.replace(/ /g, "&nbsp;");
    jade = jade.replace(/\n/g, "<br />");
    copyToClipboard(jade);
  });
}

var menu = chrome.contextMenus.create({"title": "Copy HtmlInJade",
 contexts:["selection"], "onclick": copy});
