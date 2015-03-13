//Below is the code to get the ip address using $.ajax 

$(document).ready(function(){        
        $.ajax({
        type: "get",
        url: "https://httpbin.org/get",
        //data: "args.origin",
        dataType: "json",
        success: function(result){
            $("#getIPaddress").html(result.origin);
            console.log(result.origin)
           }
        })
      });         
     
//Below is the code to get the local storage set up from values on the form. The values are hidden and the displayed 
//with the click function on the button.
$(document).ready(function(){
//function storeName()
//{
  //Below are the three items called from the HTML values 
  var username = document.getElementById( "username" ).value ;
  var surname = document.getElementById( "surname" ).value ;
  var classname = document.getElementById( "classname" ).value ;
  //Below is a check
  if ( username === "null" || username === "" ) return false ;
  //using the .setItem method
  localStorage.setItem( "user" , username ) ;
  localStorage.setItem( "lastname" , surname ) ;
  localStorage.setItem( "coursename" , classname ) ;
  document.getElementById( "username" ).value = "" ;

  //document.getElementById( "leg" ).innerHTML = "\"" + localStorage.getItem( "user" ) 
  //+ localStorage.getItem( "lastname" ) + "\" is Stored" ;
  //Here I added in the jQuery .click() method
 $("#recall").click(function(){
        recallName();
        //added in the append() method
        $("legend").append(localStorage.getItem( "coursename" ));
    });
//}
});



function recallName()
{
  if ( localStorage.getItem( "user" ) === null ) return false ;
  document.getElementById( "username" ).value = "" ;
  //using the .getItem method
  document.getElementById( "leg" ).innerHTML = "The student is " + localStorage.getItem( "user" ) + " " +
  localStorage.getItem( "lastname" ) +" and the course is " ;
}

/* *************************************************************** */
/* The code below is for testing the local storage by removeing values and setting up the .onclicks
function removeName()
{
  if ( localStorage.getItem( "user" ) === null ) return false ;
  document.getElementById( "leg" ).innerHTML = "\"" + localStorage.getItem( "user" ) + "\" is Removed" ;
  localStorage.removeItem( "user" ) ;
   localStorage.removeItem( "lastname" ) ;
    localStorage.removeItem( "coursename" ) ;
  document.getElementById( "username" ).value = "" 
  document.getElementById( "surname" ).value = "" 
  document.getElementById( "classname" ).value = "" ;
}

console.log("local storage");
for (i=0; i<localStorage.length; i++)   {
    console.log(localStorage.key(i)+"=["+localStorage.getItem(localStorage.key(i))+"]");
}

function init()
{
 // document.getElementById( "store" ).onclick = storeName ;
  //document.getElementById( "recall" ).onclick = recallName ;
  document.getElementById( "remove" ).onclick = removeName ;
}
document.addEventListener( "DOMContentLoaded" , init , false ) ;
*/