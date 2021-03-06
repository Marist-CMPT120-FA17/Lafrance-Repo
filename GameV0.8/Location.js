            /*location.js*/
		  
  // Global Variables 
   
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

  // Add Global array for look() and Inventory("Treasure")
   
      var locations =[];
	  var Treasure =[];
	  
	  var TreasureChest = new Item (0,"Treasure chest","You retrieved a Treasure Chest, and its empty but don’t worry there are lots of hidden treasure around these Islands. Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
	  var CubanCigar = new Item (1,"Cuban cigar","You just retrieved a Cuban cigar!!!");
	  var Rarepearl = new Item (3,"Rare pearl","Nice! You just retrieved a Rare pearl!!!");
	  var MagicSkullkey = new Item (2,"Magic skull key","Awesome! You just retrieved the Magic Skull key!!");
	  var GoldenCompass = new Item(4,"Golden Compass","You just retrieved the Golden Compass!!");
		 
  // Locations in an array.
  
  	  var Jamaica = new Location(0,"Jamaica","You’re on a ship in Montego Bay, off the Coast of Jamaica ready to venture through Paradise hoping to find some treasure. Wow! it looks like you found a Treasure Chest. Click on the TAKE ITEM button to retrieve item.",TreasureChest);
	  var Cuba = new Location(1,"Cuba","Welcome to Cuba don't forget to check out Havana for some Cuban cigar. Ohh! look You just found a Cigar. Don't smoke the whole thing at once.",CubanCigar); 
	  var Panama = new Location(2,"Panama","Welcome to Panama City please feel free to search the City, you may be lucky to find your fortune.",null);
	  var Cayman = new Location(3,"Cayman","Welcome to the Cayman Islands, don't forget to check-in by our Treasure Island Resort.",null);
	  var DomincainRepublic = new Location(4,"Domincain-Republic","Dominican Republic, there is lots of buried treasure off the shore of Punta Cana. Don't forget to bring you shovel and watch out for the looters!.",null);
	  var Bahamas = new Location(5,"Bahamas","Welcome to the Bahamas, I hope you get to check out the blue Lagoon island and say hello to the dolphins.",null);
	  var Miami = new Location(6,"Miami","welcome to Miami, please visted the ship yard in south Miami if you would like to upgrade your ship!.Oh! it look like your found something. Please Click on the TAKE ITEM button to retrieve item.",MagicSkullkey );
	  var TurksandCaicos = new Location(7,"Turks-and-Caicos","Don't forget to check out the the Grand Truk lighthouse there are tails of buried treasure around here that area",null);
	  var Haiti = new Location(8,"Haiti","Welcome to Haiti.","missing text",null);
	  var Aruba = new Location(9,"Aruba","Welcome to Aruba. Sweet! it looks like you just found a pearl. Click on the TAKE ITEM button to retrieve item.",Rarepearl);
	  var CostaRica = new Location(10,"Costa-Rica","Welcome to Costa Rica! Get ready to navigate the seven seas. Please Click on the TAKE ITEM button to retrieve item.",GoldenCompass);

	 
    
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
	 
  // Initialization
  
    function init() {
      var desc = locations[currentLoc].desc;	
     	  updatedisplayMessage(desc);
	}
	
    function look(){	
  // Debug Aid
  
		console.log(currentLoc);
		console.log(locations);
		console.log(score);
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
	
  //  This function works with the navigation Matrix and add score by 5 points. 
  
	function nextLoc(dir) {
		var newLoc = nav[currentLoc][dir];
        if (newLoc >= 0) {
            currentLoc = newLoc;
		    score +=5;
            } else {
               updatedisplayMessage("You cannot go that way.");
            }            
         }
	 function btnNorth_click(){
	          nextLoc(0);
			  look();			
     }
	 function btnSouth_click(){
              nextLoc(1);
			  look();
            				
     }
	 function btnEast_click(){
		      nextLoc(2);
			  look();
	 }
	 function btnWest_click(){
		      nextLoc(3);
			  look();
      }
	  
  // this btnitem_click() function add treatures to inventory when found
	
    function btnitem_click(){
		if(locations[currentLoc].item !=null ){
			Treasure.push(locations[currentLoc].item);
			locations[currentLoc].item = null;
			inventory();
			
		  }
	  } 
	function inventory(){
		document.getElementById("inventory").innerHTML ="Inventory list:\n"
		 var i;
		 for( i = 0; i<Treasure.length; i++) {
			 document.getElementById("inventory").innerHTML += Treasure[i].name+"\n";
			  updatedisplayMessage(Treasure[i].desc+"\n");
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
		+inventorymessage;
		}
	function scoremsg(score){
		document.getElementById("Score").innerHTML = "Score:"+score;
	} 	
	
  //   Help button
  
    function btnhlp_click() {
             alert("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
    }
			   
			   