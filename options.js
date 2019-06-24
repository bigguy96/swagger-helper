"use strict";

window.addEventListener('load', () => {
    console.log("Loaded!");
    
    chrome.storage.sync.get("apiKey", (result) => {               
        if (!chrome.runtime.error) {
            console.log(result);
            document.getElementById("txtApiKey").value = result.apiKey;
          }       
    });

    chrome.storage.sync.get("jwt", (result) => {
        if(!chrome.runtime.error){
            console.log();
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
        console.log('set storage called');

        if (chrome.runtime.error) {
            console.log("Runtime error in set storage.");
          }

        close();
    });   
});