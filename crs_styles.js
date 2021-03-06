function waitForElement(elementId, callBack){
  window.setTimeout(function(){
    var element = document.getElementById(elementId);
    if(element){
      callBack(elementId, element);
    }else{
      waitForElement(elementId, callBack);
    }
  },500)
};

function ChatFlexLoanBubbleDisplay() {
    var flexBubble = document.getElementById("flexLoanTopChatBubble");
    flexBubble.style.display = "block";
};

waitForElement("flexLoanTopChatBubble",function(){
  setTimeout("ChatFlexLoanBubbleDisplay()", 5000); // after 5 secs

  document.getElementById("closeButtonImg").onclick = function() {
    var flexBubble = document.getElementById("flexLoanTopChatBubble");
    flexBubble.style.display = "none";
};

});
