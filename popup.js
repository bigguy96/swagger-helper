"use strict";

document.getElementById("btnSubmit").addEventListener("click", () => {
    console.log('button clicked');

    let api = "n/a";
    let jwt = "n/a";

    chrome.storage.sync.get("apiKey", (result) => {        
        if (result.apiKey) {            
            api = result.apiKey;
          }                
    });

    chrome.storage.sync.get("jwt", (result) => {
        if (result.jwt) {                 
            jwt = result.jwt;        
          }        
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