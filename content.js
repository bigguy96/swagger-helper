"use strict";

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.keys);

        let keys = JSON.stringify(request.keys);
        let jsonKeys = JSON.parse(keys);
        let api = jsonKeys.api;
        let jwt = jsonKeys.jwt;

        console.log('Extension called to fill in the API Key and JWT');

        let apiKey = document.getElementById("input_apiKey");
        apiKey.value = api;

        let fields = document.getElementsByName("app-jwt");
        for (let i = 0; i < fields.length; i++) {            
            fields[i].value = jwt;            
        }

        apiKey.dispatchEvent(new Event('change'));
    });