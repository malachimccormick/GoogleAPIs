


function defineRequest() {
    // See full sample for buildApiRequest() code, which is not 
    // specific to a particular API or API method.

    buildApiRequest('GET',
        '/youtube/v3/search', {
            'maxResults': '10',
            'part': 'snippet',
            'q': '',
            'type': 'video'
        });

    }