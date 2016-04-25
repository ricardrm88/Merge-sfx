// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function playMergeSound(response) {
    	var audio = new Audio('openchest.wav');
		audio.play();
	}

chrome.tabs.onUpdated.addListener(function(tabId , info) {
    if (info.status == "complete") {
    	chrome.tabs.sendMessage(tabId, 
  			{ text: "set_button_callback" },
			null);
    }
});

chrome.extension.onMessage.addListener( function(request,sender,sendResponse) {
	if( request.action === "play_sound" ){
		playMergeSound();
    }
});

chrome.browserAction.onClicked.addListener(function (tab) { 
    console.log("CLICK")  
});
