            /*location.js*/
		  
   //Global Variables 
   
      // var takeitem = true;
      var Inventory = 0;
	  var hiddenTresure = 0;
	  var score = 0;
      var currentLoc = 0;
	  
	 // locations Matrix
	 
	 var nav = [// N  S  E  W
	 
         /*0*/	  [1, 2, 8, 3 ],
		 /*1*/    [5, 0, 7, -1],
		 /*2*/    [0, -1, 10, 9],
		 /*3*/    [1, 10, 8, -1],
		 /*4*/    [7, 9, -1, 8],
		 /*5*/    [-1, 1, 7, 6], 
		 /*6*/    [-1, -1, 5, -1], 
		 /*7*/    [-1, 4, -1,-1], 
		 /*8*/    [7, 9, 4, 0], 
		 /*9*/    [4, -1, 2, -1], 
		 /*10*/   [3, -1, 2, -1],
                ];	
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

   //Add Global array for look() and Inventory("Treasure")
   
      var locations =[];
	  var items =[];
	  var Treasure =[];
		 
  // Locations in an array.
  
  	  var Jamaica = new Location(0,"Jamaica","You’re on a ship in Montego Bay, off the Coast of Jamaica ready to venture through Paradise hoping to find some treasure and Wow! it looks like you found a Treasure Chest. Click on the TAKE ITEAM button to retrieve item. ","Treasure Chest");
	  var Cuba = new Location(1,"Cuba","Welcome to Cuba don't forget to check out Havana for some Cuban cigar. Ohh! look You just found a Cigar. Don't smoke the whole thing at once. ","Cuban Cigar"); 
	  var Panama = new Location(2,"Panama","Welcome to Panama City please feel free to search the City, you may be lucky to find your fortune.",null);
	  var Cayman = new Location(3,"Cayman","Welcome to the Cayman Islands, don't forget to check-in by our Treasure Island Resort.",null);
	  var DomincainRepublic = new Location(4,"Domincain-Republic","Dominican Republic, there is lots of buried treasure off the shore of Punta Cana. Don't forget to bring you shovel and watch out for the looters.",null);
	  var Bahamas = new Location(5,"Bahamas","Welcome to the Bahamas",null);
	  var Miami = new Location(6,"Miami","welcome to Miami, would you like a ship upgrade","Magic Skull key" );
	  var TurksandCaicos = new Location(7,"Turks-and-Caicos","missing text",null);
	  var Haiti = new Location(8,"Haiti","Welcome to Haiti.","missing text",null);
	  var Aruba = new Location(9,"Aruba","Welcome to Aruba. Sweet! it looks like you just found a.","Rare-pearl");
	  var CostaRica = new Location(10,"Costa-Rica","Welcome to Costa Rica! Get ready to navigate the seven seas.","Golden Compass");

	  var Treasurechest = new Item (0,"Treasure chest","You retrieved a Treasure Chest, and its empty but don’t worry there are lots of hidden treasure around these Islands. Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
	  var Cubancigar = new Item (1,"Cuban cigar","You just retrived a Cuban cigar!!!");
	  var Rarepearl = new Item (3,"Rare pearl","Nice! You just retrived a Rare pearl!!!");
	  var Magicskullkey = new Item (2,"Magic skull key","Awesome! You just retrived the Magic Skull key!!");
	  var GoldenCompass = new Item(4,"Golden Compass","You just retrive the Golden Compass!!");
    
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
     
	items[0] = Treasurechest;
	items[1] = Cubancigar;
	items[2] = Magicskullkey;
	items[3] = Rarepearl;
	items[4] = GoldenCompass;
	
		
	
  // Initialization
  
    function init() {
      var desc = locations[currentLoc].desc;	
     	  updatedisplayMessage(desc);
	}
	
    function look(){	
  // Debug Aid
  
		console.log(currentLoc);
		console.log(locations);
		console.log(items);
		console.log(score);
		console.log(hiddenTresure);
		//console.log(item.length);
		//console.log(btnNorth_click()); //game crash when this console is active in the program
		console.log(btnitem_click);
		console.log(Treasure);
		console.log(displayinventorymsg);
		console.log(locations[currentLoc]);
		var desc = locations[currentLoc].desc;	
		updatedisplayMessage(desc);
		scoremsg(score);
	}
	
  // Add locations and items prototype
 
	function Location(id, name, desc, item) {
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.item = item; 
		this.toString = function() {
			return this.id + "" + this.name + "" + this.desc + "" + this.item;
        };
	}					
	function Item(id, name, desc){
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.toString = function() {
                                 return this.id + "" + this.name + "" + this.desc;
                        };
	}
	
  //  This function Works with the Navigation matrix and add score by 5 points 
  
	function nextLoc(dir) {
		var newLoc = nav[currentLoc][dir];
        if (newLoc >= 0) {
            currentLoc = newLoc;
		    score +=5;
            } else {
               updatedisplayMessage("You cannot go that way.");
            }            
         }
  //    check score function	
    /* function chkscore(){
		  var item = locations[currentLoc].item;
		      if(item.length == 1){  
	                  }else{
					     if(item.length == 0){
                            return score;
						           }
						    }   
	 }*/  
	 
	/* function chkscore(){
	 if([currentLoc] <=11){
			 score +=5;
		 }else{
			 ([currentLoc] == 0 )
				 return score;
		      }
	 }*/
  //    Event handler for each button for North, South, East, West.
  
	 function btnNorth_click(){
	          nextLoc(0);
		      hiddenTresure = 1;
	//		  chkscore();
			  look();			
    }
	 function btnSouth_click(){
              nextLoc(1);
			  hiddenTresure = 2;
	//		  chkscore();
			  look();
            				
     }
	 function btnEast_click(){
		      nextLoc(3);
			  hiddenTresure = 3;
	//		  chkscore();
			  look();
	 }
	 function btnWest_click(){
		      nextLoc(4);
		      hiddenTresure = 4
	//	  chkscore();
			  look();
      }
		// this btnitem_click() function add treatures to inventory when found
	
      function btnitem_click(){
		var name = items[hiddenTresure].desc;
		if(hiddenTresure == 0){
			Treasure.push(Treasurechest.name);
			displayinventorymsg(Treasure);
			updatedisplayMessage(name);
		}else{
			if(hiddenTresure == 1){
				 Treasure.push(Cubancigar.name);
				 displayinventorymsg(Treasure);
				 updatedisplayMessage(name);
			}else{
				if(hiddenTresure == 2){
					Treasure.push(Magicskullkey.name);
					displayinventorymsg(Treasure);
					updatedisplayMessage(name);
				}else{
					if(hiddenTresure == 3){
						Treasure.push(Rarepearl.name);
						displayinventorymsg(Treasure);
						updatedisplayMessage(name);
					}else{
						if(hiddenTresure == 4){
							Treasure.push(GoldenCompass.name);
							displayinventorymsg(Treasure);
							updatedisplayMessage(name);
						}else{
							if(hiddentresure == null); 
							return Treasure;
							updatedisplayMessage("Sorry there is no Treasure here");
			            }
					}
		        }
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
	function displayinventorymsg(inventorymessage){
		document.getElementById("inventory").innerHTML ="Inventory list:"+inventorymessage;
		}
	function scoremsg(score){
		document.getElementById("Score").innerHTML = "Score:"+score;
	} 	
      //       Help button		 
    function btnhlp_click() {
             alert("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
    }
			   
			   