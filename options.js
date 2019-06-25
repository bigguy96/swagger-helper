"use strict";

window.addEventListener('load', () => {
    console.log("Loaded!");
    
    chrome.storage.sync.get("apiKey", (result) => {               
        if(result.apiKey) {
            document.getElementById("txtApiKey").value = result.apiKey;
        }       
    });

    chrome.storage.sync.get("jwt", (result) => {
        if(result.jwt) {
            document.getElementById("txtJwt").value = result.jwt;
        }        
    });
});

document.getElementById("btnSubmit").addEventListener("click", () => {
    //let selectedService = document.getElementById("services").value;
    //let selectedEnvironment = document.getElementById("environment").value;
    let apiKey = document.getElementById("txtApiKey").value;
    let jwt = document.getElementById("txtJwt").value;

    console.log(apiKey);
    console.log(jwt);

    chrome.storage.sync.set({"apiKey": apiKey, "jwt": jwt}, () => {
        console.log('Set storage called');
        
        close();
                  
    });   
});

document.getElementById("btnClear").addEventListener("click", () => {
    let answer = confirm("Are you sure you want to delete the stored API key and JWT?");
    
    if (answer === true) {
        console.log("Clear storage");
        chrome.storage.sync.clear();
    }    
});