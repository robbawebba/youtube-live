function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyCgOL4a_gaDfNdDb_K3NefeO-KRx2REy7s',
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
  }).then(searchLiveVideos, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);

function searchLiveVideos() {
  var query = $("#search").val();
  $("#search").val('');
  $("#videos").html('');
  var request = gapi.client.request(
    {
      'path': 'https://www.googleapis.com/youtube/v3/search',
      'method': 'GET',
      'params': {
        q: query,
        eventType: 'live',
        part: 'snippet',
        type: 'video'
      }
    });
  request.execute(function(response) {
    $.each(response.items, function(i, item){
       $('#videos').html($('#videos').html() + "<div class=\"embed-responsive embed-responsive-16by9\"><iframe class=\"embed-responsive-item\" width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/"+ item.id.videoId +"\"></iframe></div>");
    });
    console.log(response);
  });
}