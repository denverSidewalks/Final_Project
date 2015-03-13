/**
 * @author Eric
 * Keep the load seperate for the gallery otherwise you may be loading images that no one will look at. Here you have the ajax load for the flickr
 * gallery using the $.each method. Not really related to my website, but it looks good. 
 */
		$(document).ready(function(){
			var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=sidewalk&format=json&jsoncallbackid=c96991c7a35f0279a1abb93ad61a9373&format=json&jsoncallback=?&";
		
			$.getJSON(url, function(data) {
				var html = "";
			
				$.each(data.items, function(i, item){	
					html += "<h2>" + item.title + "</h2>";
					html += "<h3>" + item.description + "</h3><hr>";
					
				});
			
				$("#team").html(html);
			});	
		});