
/**
 Generates a personality profile for the author of the input text.
 **/
var getProfile = function(message, options) {
    var params = {
        include_raw: false,
        headers: false,
        version: '2016-10-20'
    };
    var headers = {
        'Content-Type': 'application/json',
        'Content-Language': 'en',
        'Accept': 'application/json',
        'Accept-Language': 'en'
    };

    if(options){
        if(options['Content-Type']){
            headers['Content-Type'] = options['Content-Type'];
        }
        if(options['Content-Language']){
            headers['Content-Language'] = options['Content-Language'];
        }
        if(options['Accept']){
            headers['Accept'] = options['Accept'];
        }
        if(options['Accept-Language']){
            headers['Accept-Language'] = options['Accept-Language'];
        }
        if(options['include_raw']){
            params['include_raw'] = options['include_raw'];
        }
        if(options['headers']){
            params['headers'] = options['headers'];
        }
        if(options['headers']){
            params['headers'] = options['headers'];
        }
    }

    return endpoint.post({
        body: message,
        params: params,
        headers: headers
    });
};

// Public API
endpoint.getProfile = getProfile;
