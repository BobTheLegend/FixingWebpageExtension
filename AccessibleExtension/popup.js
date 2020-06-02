$(document).ready(function() {
  var fontButton = $("#font-button");
  var storedValues;
  console.log(fontButton.prop("checked"));
  console.log(document)
  chrome.storage.sync.get(["fontButton"], function(items){
    storedValues = items;
  });

});
