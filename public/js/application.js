window.onload = function(){
		$('.search-video-form').on('submit', function(event){
			loadFunctions.onClientLoad();
		});
};

	var loadFunctions = (function(){
		function onClientLoad() {
			gapi.client.setApiKey('AIzaSyAIIcD5k2TelZ8bRkXqg8kW_12vS4HBCN0');
		  gapi.client.load('youtube', 'v3', function(){
		  	search();
		  });
		}
		
		function search() {
		  var request = gapi.client.youtube.search.list({
		    part: 'snippet',
	        q: "Mudvayne"
		  });
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
			search: search,
			onSearchResponse: onSearchResponse,
			showResponse: showResponse,
		};

})();
