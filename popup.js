"use strict";

document.getElementById("btnSubmit").addEventListener("click", () => {
    console.log('button clicked');

    let api = "";
    let jwt = "";

    chrome.storage.sync.get("apiKey", (result) => {        
        api = result.apiKey;
    });

    chrome.storage.sync.get("jwt", (result) => {
        jwt = result.jwt;        
    });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
            keys: {
                "api": api,
                "jwt": jwt
            }            
        });
    });    
});