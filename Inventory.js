var items : String[];
var newStuff : String[];
var obstats : GameObject;
//static var tempI = new String[500];
//static var blankTemp = new String[500];
static var stuff : String[];
static var shower = "";
static var itemsNum = 0;
static var ammo = 10;
static var curWeapon = "fists";
static var curWeight = 0.0;
static var maxWeight = 100;

function Start () {
	stuff = items;
	//tempI = items;
}

function Update () {
	newStuff = stuff;
}

static function addTo (item : String) {
	var added = false;
	for(var i : int = 0; i < stuff.Length - 1 && added == false; i++){
        if(String.IsNullOrEmpty(stuff[i]) == true){
        	stuff[i] = item;
        	added = true;
    	}
	}
}

static function showStuff (){
	shower = "";
	for(var j : int = 0; j < stuff.Length; j++){
		if(!String.IsNullOrEmpty(stuff[j])){
			shower += stuff[j] + "\n";
		}
	}
}

static function use (thing : String) {
	if(thing == "pistol"){
		curWeapon = "pistol";
	}
	if(thing == "shotgun"){
		curWeapon = "shotgun";
	}
	if(thing == "knife"){
		curWeapon = "knife";
	}
	if(thing == "Nuka-Cola"){
		Stats.rads += 2;
		Stats.addHealth(4);
		removeItem(thing);
	}
	if(thing == "stimpak"){
		Stats.addHealth(16);
		removeItem(thing);
	}
	if(thing == "radaway"){
		Stats.rads = 0;
		removeItem(thing);
	}
}

static function removeItem (removable : String){
	var hasRemoved = false;
	for(var f : int = 0; f < stuff.Length && hasRemoved == false; f++){
		if(stuff[f] == removable){
			stuff[f] = "";
			hasRemoved = true;
		}
	}
	reorganize();
}

static function reorganize () {
	var tempI = new String[500];
	itemsNum = 0;
	var listN : int = 0;
	
	for(var h : int = 0; h < stuff.Length; h++){
		if(!String.IsNullOrEmpty(stuff[h])){
			tempI[listN] = stuff[h];
			listN ++;
		}
	}
	stuff = tempI;
	//tempI = blankTemp;
	itemsNum = listN;
}

static function weigh (statsOb : GameObject) {
	curWeight = 0.0;
	for(var b : int = 0; b < stuff.Length; b++){
		if(!String.IsNullOrEmpty(stuff[b])){
			curWeight += statsOb.GetComponent(stuff[b]).weight;
		}
	}
}