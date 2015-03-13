/**
 * @author Eric
 */
$(document).ready(function() {
	// add span element after each input element since it is a email contact form it should be obvious that a email is needed.
	$(":text, #verify").after("<span>*</span>");
	
	// move focus to first text box
	$("#email").focus();
	

	// the handler for the click event of a regular button
	$("#member_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			} 		
			// validate the first name entry
			var firstName = $("#first_name").val().trim();
			if (firstName.length == 0) {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#first_name").val(firstName);
				$("#first_name").next().text("");
			}
			// validate the last name entry
			var lastName = $("#last_name").val().trim();
			if (lastName.length == 0) {
				$("#last_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#last_name").val(lastName);
				$("#last_name").next().text("");
			}
			
		// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();				
			}
			else {
				//Send only validated data using the jQuery $.ajax() method. The json data is in the console.log for your review. 
				$(function(){
				 var dataString = $("#member_form").serialize();
     
		        $.ajax({
		        type: "POST",
		        url: "https://httpbin.org/post",
		        data: dataString,
		        dataType: "json",
		        success: function(data) {
		         
		         console.log(dataString)
		         console.log("validData")
		         //The valid data is there as a testing measure. Although to really confirm that the data is real it should be checked on the backend.
		          
		        }
		           
        })})
      };
			
		} // end function
	);	// end submit	
}); // end ready

//The following is to extract the information for the register.html. I left both field parts in for validation. 
var decode = function ( text ) {
	    text = text.replace(/\+/g, " ");
	    text = text.replace(/%[a-fA-F0-9]{2}/g, 
	        function ( text ) {
	            return String.fromCharCode( "0x" + text.substr(1,2));
	        }
	    );
	    return text;
	}
	    
	var display_data = function () {
	    var url_parts = window.location.toString().split("?");
	    if ( url_parts.length != 2 ) return;
	    
	    var fields = url_parts[1].split("&");
	    
	    if ( fields.length == 0 ) {
	        document.write("<p>No data was submitted.</p>");
	    } else {
	        document.write("<dl>");
	        var field_parts;
	        for ( var i in fields ) {
	            field_parts = fields[i].split("=");
	            field_parts[0] = decode( field_parts[0] );
	            field_parts[1] = decode( field_parts[1] );
	            document.write("<h3>" + field_parts[0] + "</h3>");
	            document.write("<h2>" + field_parts[1] + "</h2>");
	        }
	        document.write("</dl>");
	    }
	}


