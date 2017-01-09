function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyCgOL4a_gaDfNdDb_K3NefeO-KRx2REy7s',
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
  }).then(function() {
    var request = gapi.client.request(
    {
      'path': 'https://www.googleapis.com/youtube/v3/search',
      'method': 'GET',
      'params': {
        eventType: 'live',
        part: 'snippet',
        type: 'video'
      }
    });


  //var request = gapi.client.youtube.search.list( );
  request.execute(function(response) {
    var str = JSON.stringify(response.items);
    $('#videos').html('<pre>' + str + '</pre>');
    console.log(response);
  });
}, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);