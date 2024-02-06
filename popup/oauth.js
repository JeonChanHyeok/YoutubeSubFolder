window.onload = function() {
    document.querySelector('button').addEventListener('click', function() {
        chrome.identity.getAuthToken({'interactive': true}, function(token) {
            let init = {
                method: 'GET',
                async: true,
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                'contentType': 'json'
            };
            fetch(
                'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=50',
                init)
                .then((response) => response.json())
                .then(function(data) {
                    const names = [];
                    for(let i = 0 ; i < data.items.length ; i ++){
                        names.push(data.items.at(i).snippet.title);
                    }
                    alert(data.items.length);
                });
        });
    });
};