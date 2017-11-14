            /*Location.js*/
		  
//<!--Global Variables-->

	     var score = 0;
		 var currentLoc = 0;
		 var erroLoc = 0;
	     var VisitedLoc0 = false;
         var VisitedLoc1 = false;
         var VisitedLoc2 = false;
         var VisitedLoc3 = false;
         var VisitedLoc4 = false;	
		 var VisitedLoc5 = false;
         var VisitedLoc6 = false;
         var VisitedLoc7 = false;
         var VisitedLoc8 = false;
         var VisitedLoc9 = false;
  //<!--add Global array for Location and Inventory-->
         var Location =[10];
		 var Player-inventory = [5];
  //<!--Debug Aid--!>		 
	     console.log();
		 
 // <!--Initialization-->
    function init() {
            look();
        }
	function Novi_erroLoc() {
		erroLoc = erroLoc + 1;
			if (erroLoc >= 1){
			displayMessage("Sorry You cannot go that way");
	       }
		}
    function UpdateDisplay(){
		     message();
		}
 //<!--Event handler for each button for North, South, East, West BUGG-->
	 function btnNorth_click(){
	        if (currentLoc===0){
			    currentLoc = 1;
			    score += 5;
				look();
		   } else { 
               if (currentLoc===3){
			       currentLoc = 0;
	               look();
				   Novi_erroLoc();
              } else{
	            return score;
				}
             }				
        }
	 function btnSouth_click(){
	        if (currentLoc===1){
			    currentLoc = 2;
			    score += 5;
				look();
		   } else { 
               if (currentLoc===1){
                   score += 5;
	               look();
				   Novi_erroLoc();
              } else{
	            return score;
				}
             }				
        }
	 function btnEast_click(){
	        if (currentLoc===2){
			    currentLoc = 4;
			    score += 5;
				look();
		   } else { 
               if (currentLoc===1){
                   score += 5;
				   Novi_erroLoc();
	               look();
              } else{
	            return score;
				}
             }				
        } 
	 function btnWest_click(){
	        if (currentLoc===4){
			    currentLoc = 0;
			    score += 5;
				look();
		   } else { 
               if (currentLoc===1){
                   score += 5;
	               look();
				   Novi_erroLoc();
              } else{
	            return score;
				}
             }				
        } 
    //		    add Location prototype
	  
	//		   <!--locations-->
	 function Location
	 function look() {
            var desc = "";
	                switch(currentLoc) {
               case 0: desc = "0. You’re on a ship in Montego Bay, off the Coast of Jamaica ready to venture through Paradise hoping to find some treasure.";
                       break;
               case 1: desc = "1. Welcome to Cuba don't forget to check out Havana for some cubain cegar.";
                       break; 
               case 2: desc = "2. Welcome to Panama City please feel free to search the City, you may be lucky to find your fortune.";
                       break;
               case 3: desc = "3. Welcome to the Cayman Islands, don't forget to check-in by our Treasure Island Resort.";
                       break;
               case 4: desc = "4. Welcome to Dominican Republic, there is lots of buried treasure off the shore of Punta Cana. Don't forget to bring you shovel and watch out for the sea shells.";
                       break;
	           case 5: desc = "5. Welcome to the Bahamas.";
                       break;
			   case 6: desc = "6. Welcome to Miami.";
                       break;	   
			   case 7: desc = "7. Welcome to Turks and Caicos Islands.";
                       break; 
		       case 8: desc = "8. Welcome to Haiti.";
                       break;
			   case 9: desc = "9. Welcome to Aruba.";
                       break;	   
			   case 10:desc = "10. welcome to Costa Rica.";
			           break;
              default: desc = "11. Sorry You cannot go that way";
            }
            desc = desc;
            displayMessage(desc);
			document.getElementById("Score").innerHTML = "Score:"+score;
			} 
	//		<!--cardinal direction-->
	function btnGo_click(){
             var user_input = document.getElementById("txtCommand").value;
		         if (user_input == "n") {
				 btnNorth_click();
		  } else if (user_input == "s") {
			     btnSouth_click();
		       } else if (user_input == "e") {
			             btnEast_click();
		               } else if (user_input == "w") {
				                  btnWest_click();
		                          } else {
			                      displayMessage("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
		                        }
			}	
	function displayMessage(msg) {
             var target = document.getElementById("message");
             target.value = msg + "\n\n" + target.value;
            }
    function updatemessage(){
	        }  
             <!--Help button-->			 
    function btnhlp_click() {
             alert("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
               }

	        /*function Jamaica(){
			       var message = "0. You’re on a ship in Montego Bay, off the Coast of Jamaica ready to venture through Paradise hoping to find some treasure.";
			  }
			  function Cuba(){
			       var Message = "1. Welcome to Cuba don't forget to check out Havana for some cubain cegar.";
			  }
			  function Panama(){
			       var message = "2. Welcome to Panama City please feel free to search the City, you may be lucky to find your fortune.";
			  }
			  function Cayman Islands(){
				   var Message = "3. Welcome to the Cayman Islands, don't forget to check-in by our Treasure Island Resort.";
			  }
			  function Dominican Republic(){
			  var  Message = "4. Welcome to Dominican Republic, there is lots of buried treasure off the shore of Punta Cana. Don't forget to bring you shovel and watch out for the sea shells.";
			  }
			  function Bahamas(){
			  var   Message = "5. Welcome to the Bahamas.";
			  }
			  function Miami(){
			  var  Message = "6. Welcome to Miami.";
			  }
			  function Turks and Caicos Islands(){
			  var  Message = "7. Welcome to Turks and Caicos Islands.";
			  }
			  function Haiti(){
			  var	 Message = "8. Welcome to Haiti.";  
			  }
			  function Aruba(){
			  var  Message = "9. Welcome to Aruba.";
			  }
			  function Costa Rica(){
			  var Message = "10. welcome to Costa Rica.";	  
			  } */
			  
			 