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
   
         var locations = [];
   	     var Treasure = [];
		 var items = [];
		 var inventory = [];
		 
  // Store Locations in an array.
  
     locations[0]= Jamaica;
	 locations[1]= Cuba;
	 locations[2]= Panama;
	 locations[3]= Cayman;
	 locations[4]= DomincainRepublic;
	 locations[5]= Bahamas;
	 locations[6]= Miami;
	 locations[7]= TurksandCaicos;
	 locations[8]= Haiti; 
	 locations[9]= Aruba;      
	 locations[10]= CostaRica;
	 Location.push(Jamaica, Cuba, Panama, Cayman, TurksandCaicos, Haiti, Aruba, CostaRica); 
	 
  // item array 
     
	 items[0] = Treasurechest;
	 item[1] = Rarepearl;
	 items[2] = Goldencompass;
	 items[3] = Magicskullkey;
	 items[4] = Cubancigar;
	 
	   //   Initialization 
    function init() {
             look();   
	}	 
  //	 Add locations and items  prototype
  //     ("Treasure-chest","Rare-pearl","Golden-compass","Magic-skull-key","Cuban-cigar","")
  
	 function locations(id, name, desc, item) {
	 this.id = id;
	 this.name = name;
	 this.desc = desc;
	 this.item = item; 
	 locations.toString = function() {
                                 return this.id + "" + this.name + "" + this.description + "" + this.item
                            };
	 var Jamaica = new locations(0,"Jamaica","You’re on a ship in Montego Bay, off the Coast of Jamaica ready to venture through Paradise hoping to find some treasure.","Treasure-chest");
	 var Cuba = new locations(1,"Cuba","Welcome to Cuba don't forget to check out Havana for some cubain cegar.","Cuban-cigar"); 
	 var Panama = new locations(2,"Panama","Welcome to Panama City please feel free to search the City, you may be lucky to find your fortune.",);
	 var Cayman = new locations(3,"Cayman","Welcome to the Cayman Islands, don't forget to check-in by our Treasure Island Resort.",);
	 var DomincainRepublic = new locations(4,"Domincain-Republic",null);
	 var Bahamas = new locations(5,"Bahamas","4Welcome to Dominican Republic, there is lots of buried treasure off the shore of Punta Cana. Don't forget to bring you shovel and watch out for the sea shells.",null);
	 var Miami = new locations(6,"Miami","Magic-skull" );
	 var TurksanCaicos = new locations(7,"Turks-and-Caicos",null);
	 var Haiti = new locations(8,"Haiti","Welcome to Haiti.",null);
	 var Aruba = new locations(9,"Aruba","Welcome to Aruba.","Rare-pearl");
	 var CostaRica = new locations(10,"Costa-Rica","Welcome to Costa Rica.","Golden Compass");
	 }    
	 
	function items (id, name, desc, item) {
	 this.id = id;
	 this.name = name;
	 this.desc = desc;
	 this.item = item;
	 items.toString = function() {
                                 return this.id + "" + this.name + "" + this.description + "" + this.item
                            };
	
	
	var Treasurechest new items (0,"Treasurechest" , "Wow! look what you found" , "Treasure chest");
	var Rarepearl new items (1, "Rare-pearl" , "sweet" , "Rare pearl");
	var Magicskullkey new items (2,"Magic-skullkey","Awesome","Magic skull key");
	var Cubancigar new items (3,"Cubancigar","dont smoke the hold thing at once you just find a ","Cubancigar");
	var GoldenCompass new items(4,"GoldenCompass","You think your so cool","Golden Compass");
    }   
  //   Debug Aid	
   
	     console.log(items[]);
		 
	function Novi_erroLoc() {
		erroLoc = erroLoc + 1;
			if (erroLoc >= 1){
			displayMessage("Sorry You cannot go that way");
	       }
		}
  //  function UpdateDisplay(){
  //	     message();
  //	}
 //     Event handler for each button for North, South, East, West BUG needs******* to be remove******
	 function btnNorth_click(){
	        if (locations[0] === 0){
			    currentLoc = 1;
			    score += 5;
				look ();
		   } else { 
               if (currentLoc === 3){
			       currentLoc = 0;
	               look();
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
		   } else { 
               if (currentLoc === 1){
                   score += 5;
				   Novi_erroLoc();
	               look  ();
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
		    
            displayMessage(msg);
			document.getElementById("Score").innerHTML = "Score:"+score;
			
	//		cardinal direction
	
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
			                      updatedisplayMessage("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
		                        }
			}	
	function updatedisplayMessage(locations.toString ) {
             var target = document.getElementById("message");
             target.value = locations.toString +"\n\n" + target.value;
            } 
      //       Help button		 
    function btnhlp_click() {
             alert("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
               }
			   
			   