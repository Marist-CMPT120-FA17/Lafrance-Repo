            /*location.js*/
		  
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
		 var VisitedLoc10 = false;
		 
   //   Add Global array for look  and Inventory
   
         var Locations = [];
   	     var Treasure = [];
		 var invantory = [];
		 
  //	 Add locations and items  prototype
  //     ("Treasure-chest","Rare-pearl","Golden-compass","skull-key","Cuban cigar","")
  
	 function locations(id, name, desc, item) {
	 this.id = id;
	 this.name = "Montego Bay";
	 this.desc = "0. You’re on a ship in Montego Bay, off the Coast of Jamaica ready to venture through Paradise hoping to find some treasure.";
	 this.item = item
	 display(myShape.toString());
     } 
  // Store some Locations in an array.
  
     locations[0]= Jamaica;
	 locations[1]= Cuba;
	 locations[2]= Panama;
	 locations[3]= Haiti
	 locations[4]= Domincain-Republic:
	 locations[5]= Bahamas
	 locations[6]= Miami
	 locations[7]= Turks-and-Caicos;
	 locations[8]= Haiti;
	 locations[9]= Aruba;
	 locations[10]= Costa-Rica;
	   
  //   Debug Aid--!>	
   
	     console.log();
		 
   //   Initialization-->
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
 //     Event handler for each button for North, South, East, West BUG needs******* to be remove******
	 function btnNorth_click(){
	        if (currentLoc === 0){
			    currentLoc = 1;
			    score += 5;
				look ();
				Treasure();
		   } else { 
               if (currentLoc === 3){
			       currentLoc = 0;
	               look();
				   Treasure();
				   Novi_erroLoc();
              } else{
	            return score;
				}
             }				
        }
	 function btnSouth_click(){
	        if (currentLoc === 1){
			    currentLoc = 2;
			    score += 5;
				look();
				Treasure();
		   } else { 
               if (currentLoc === 1){
                   score += 5;
	               look  ();
				   Novi_erroLoc();
              } else{
	            return score;
				}
             }				
        }
	 function btnEast_click(){
	        if (currentLoc === 2){
			    currentLoc = 4;
			    score += 5;
				look();
				Treasure();
		   } else { 
               if (currentLoc === 1){
                   score += 5;
				   Novi_erroLoc();
	               look  ();
				   Treasure();
              } else{
	            return score;
				}
             }				
        } 
	 function btnWest_click(){
	        if (currentLoc === 4){
			    currentLoc = 0;
			    score += 5;
				look  ();
				Treasure();
		   } else { 
               if (currentLoc === 1){
                   score += 5;
	               look();
				   Treasure();
				   Novi_erroLoc();
              } else{
	            return score;
				}
             }				
        } 
            desc = desc;
            displayMessage(desc);
			document.getElementById("Score").innerHTML = "Score:"+score;
			
	//		<!--cardinal direction-->
	
	function btnGo_click(){
             var user_input = document.getElementById("txtCommand").value;
		         if (user_input == "n"|| user_input == "N" || user_input == "north") {
				 btnNorth_click();
		  } else if (user_input == "s" || user_input == "S") {
			     btnSouth_click();
		       } else if (user_input == "e"|| user_input == "e") {
			             btnEast_click();
		               } else if (user_input == "w" || user_input == "W" ) {
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

	    
			  
			 