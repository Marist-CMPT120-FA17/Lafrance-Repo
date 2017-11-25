            /*location.js*/
		  
   //Global Variables 
   
      //var takeitem = true;
      var Inventory = 0;
	  var hiddenTresure = 0;
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
		 
   //Add Global array for look and Inventory("Treasure")
   
      var locations =[];
   	  var Treasure =[];
	  var items =[];
		 
  // Locations in an array.
  
  	  var Jamaica = new Location(0,"Jamaica","You’re on a ship in Montego Bay, off the Coast of Jamaica ready to venture through Paradise hoping to find some treasure. Wow! look you found a","Treasure Chest");
	  var Cuba = new Location(1,"Cuba","Welcome to Cuba don't forget to check out Havana for some Cuban cigar. Don't smoke the whole thing at once. You just found a: click the TAKEITEAM button to retrieve item","Cuban Cigar"); 
	  var Panama = new Location(2,"Panama","Welcome to Panama City please feel free to search the City, you may be lucky to find your fortune.",null);
	  var Cayman = new Location(3,"Cayman","Welcome to the Cayman Islands, don't forget to check-in by our Treasure Island Resort.",null);
	  var DomincainRepublic = new Location(4,"Domincain-Republic","Dominican Republic, there is lots of buried treasure off the shore of Punta Cana. Don't forget to bring you shovel and watch out for the looters.",null);
	  var Bahamas = new Location(5,"Bahamas","Welcome to the Bahamas" ,null);
	  var Miami = new Location(6,"Miami","welcome to Miami, would you like to update you ship","Magic Skull key" );
	  var TurksandCaicos = new Location(7,"Turks-and-Caicos","missing text",null);
	  var Haiti = new Location(8,"Haiti","Welcome to Haiti.","missing text",null);
	  var Aruba = new Location(9,"Aruba","Welcome to Aruba. Sweet! it looks like you just found a.","Rare-pearl");
	  var CostaRica = new Location(10,"Costa-Rica","Welcome to Costa Rica! Get ready to navigate the seven seas.","Golden Compass");

	  var Treasurechest = new Item (0,"Treasure chest","you found a treasure chest");
	  var Rarepearl = new Item (1,"Rare pearl","you found a Rare pearl");
	  var Magicskullkey = new Item (2,"Magic skull key","Awesome you just found Magic skull key");
	  var Cubancigar = new Item (3,"Cuban cigar","you just find a Cuban cigar");
	  var GoldenCompass = new Item(4,"Golden Compass","Wow! get ready to cruz the ocaen on the seven seas you found a Golden Compass");
    
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
	
	 
  // Items in array 
     
	items.push[Treasurechest, Rarepearl, GoldenCompass, Cubancigar];	
	
  // Initialization
  
    function init() {
                
	}
	
    function look(){	
  // Debug Aid
  
		console.log(currentLoc);
		console.log(locations);
		console.log(items);
		console.log(score);
		console.log(locations[currentLoc]);
		var desc = locations[currentLoc].desc;
		var name = items[hiddenTresure].name;
		
		updatedisplayMessage(desc);
		displayinventorymsg(name);
		scoremsg(score);
	// this btnitem_click() function add treatures to inventory when found
	
    function btnitem_click(){
		if(hiddentTresure === 0){
			items.push(Treasurechest.name);  	
		}else{
			if(hiddentTresure === 1){
				 items.push(GoldenCompass.name);
			}else{
				if(hiddentTresure === 2){
					items.push(Magicskullkey.name); 
				}else{
					if(hiddentTresure === 3){
						items.push(Cubancigar.name); 
					}else{
						if(hiddentTresure === 4){
						}else{
							return items.length;
							updatedisplayMessage("Sorry you have to find a Treasure before you can retrive it with the TAKEITEM button" );
			            }
					}
		        }
			}       
	    }
	}
	}
  // Add locations and items  prototype
  
  // ("Treasure-chest","Rare-pearl","Golden-compass","Magic-skull-key","Cuban-cigar","")
  
	function Location(id, name, desc, item) {
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.item = item; 
		this.toString = function() {
			return this.id + "" + this.name + "" + this.description + "" + this.item;
        };
	}					
	function Item(id, name, desc){
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.toString = function() {
                                 return this.id + "" + this.name + "" + this.description;
                        };
	}
	
  //   Debug Aid	
   
	     console.log();
		 
	function Novi_erroLoc() {
		erroLoc = erroLoc + 1;
			if (erroLoc >= 1){
			updatedisplayMessage("Sorry You cannot go that way");
	        }
	}

  //    Event handler for each button for North, South, East, West BUG needs******* to be remove******
  
	function btnNorth_click(){
		if (currentLoc === 0|| hiddenTresure === 0){
			    currentLoc = 1;
				hiddenTresure = 0;
			    score += 5;
				look ();
		}	else { 
				if (currentLoc === 1||hiddenTresure === 1){
			       currentLoc = 2;
	               look();
				   Novi_erroLoc();			   
                }	else{
					return score;
				    }
            }				
    }
	function btnSouth_click(){
		if (currentLoc === 1||hiddenTresure === 1){
			    currentLoc = 2;
			    score += 5;
				hiddenTresure = 2;
				look();
		    }else { 
               if (currentLoc === 1){
                   score += 5;
	               look();
				   Novi_erroLoc();
              } else{
	            return score;
				}
             }				
     }
	 function btnEast_click(){
		if (currentLoc === 2||hiddenTresure === 2){
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
		if (currentLoc === 4||hiddenTresure === 4){
			    currentLoc = 3;
				hiddenTresure = 6
			    score += 5;
				   look ();
		   } else { 
               if (currentLoc === 1){
                   score += 5;
	               look();
				   Novi_erroLoc();
              } else{
	            return score;
				}
             }				
    }
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
	function updatedisplayMessage(msg) {
             var target = document.getElementById("message");
             target.value = msg+"\n\n"+ target.value;
    } 
	function displayinventorymsg(imessage){
		document.getElementById("inventory").innerHTML = "\n"+imessage;
		}
	function scoremsg(score){
		document.getElementById("Score").innerHTML = "Score:"+score;
	} 	
      //       Help button		 
    function btnhlp_click() {
             alert("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
    }
			   
			   