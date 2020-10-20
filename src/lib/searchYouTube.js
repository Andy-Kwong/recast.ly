var searchYouTube = (options, successCB, errorCB = null) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: function(data) {
      console.log('success!', options);
      successCB(data.items);
    },
    error: function(response) {
      console.log(options);
      console.log('Request Failed');
    }
  });
};

// searchYoutube({key: 'API_KEY', query: 'cats', max: 10}, () = {});
export default searchYouTube;
