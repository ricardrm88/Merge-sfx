chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse)
{
    if (msg.text && (msg.text === "set_button_callback"))
    {
        var btns = document.getElementsByClassName("js-merge-commit-button");
        if (btns.length){
        	var btn = btns[0];
        	btn.addEventListener('click', onBtnClick);	
        }
        
    }
});

function onBtnClick (e)
{
    chrome.extension.sendMessage({action: "play_sound"}, null);
}
