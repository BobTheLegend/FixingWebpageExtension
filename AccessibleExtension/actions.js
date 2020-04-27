window.onload = function() {
  var fontButton = document.getElementById('font-button');
  var storedValues;
  console.log(fontButton.checked);
  chrome.storage.sync.set({"fontButton":fontButton.checked},function(){

  });
  chrome.storage.sync.get(["fontButton"], function(items){
    storedValues = items;
  });
  storedValues.items

}
