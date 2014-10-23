window.onload = function(){

	$('.search-video-form').on('submit', function(event){
		loadFunctions.onClientLoad();
		// loadFunctions.onYouTubeApiLoad();
		// loadFunctions.search();
		// loadFunctions.onSearchResponse();
		// loadFunctions.showResponse();
	});
};

var loadFunctions = (function(){


	function onClientLoad() {
		gapi.client.setApiKey('AIzaSyAIIcD5k2TelZ8bRkXqg8kW_12vS4HBCN0');
	  gapi.client.load('youtube', 'v3', function(){
	  	search();
	  });
	}

	// Called automatically when YouTube API interface is loaded
	// function onYouTubeApiLoad() {
	// 	gapi.client.setApiKey('AIzaSyAIIcD5k2TelZ8bRkXqg8kW_12vS4HBCN0');
	// 	search();
	// }
	
	function search() {
		
		// Use the JavaScript client library to create a search.list() API call.
	  var request = gapi.client.youtube.search.list({
	    part: 'snippet',
        q: "Mudvayne"
	  });
	  // Send the request to the API server, and call onSearchRepsonse with the response.
	  request.execute(onSearchResponse);
	}

	function onSearchResponse(response) {
    showResponse(response);
	}

	function showResponse(response) {
	  var responseString = JSON.stringify(response, '', 2);
	  document.getElementById('response').innerHTML += responseString;	
	  debugger;  
	}

	return {
		onClientLoad: onClientLoad,
		// onYouTubeApiLoad: onYouTubeApiLoad,
		search: search,
		onSearchResponse: onSearchResponse,
		showResponse: showResponse,
		// callFunctions: callFunctions
	};

})();
