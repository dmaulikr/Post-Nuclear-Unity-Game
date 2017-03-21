var health : boolean;
var AP : boolean;
var XP : boolean;
var level : boolean;
var rads : boolean;
var caps : boolean;
var ammo : boolean;
var weapon : boolean;
var weight : boolean;
var scrollPosition : Vector2 = Vector2.zero;

function Start () {

}

function Update () {
	if(health == true){
		GetComponent.<GUIText>().text = "HP   "+Stats.curHealth+"/"+Stats.maxHealth;
	}
	if(AP == true){
		GetComponent.<GUIText>().text = "AP   "+Stats.AP+"/"+Stats.maxAP;
	}
	if(XP == true){
		GetComponent.<GUIText>().text = "XP   "+Stats.xp+"/"+(10 + Stats.level * 10);
	}
	if(level == true){
		GetComponent.<GUIText>().text = "Level "+Stats.level;
	}
	if(rads == true){
		GetComponent.<GUIText>().text = "Rads   "+Stats.rads;
	}
	if(caps == true){
		GetComponent.<GUIText>().text = "Caps   "+Stats.caps;
	}
	if(ammo == true){
		GetComponent.<GUIText>().text = "Ammo "+Inventory.ammo;
	}
	if(weapon == true){
		GetComponent.<GUIText>().text = "Equipped Weapon:\n"+Inventory.curWeapon;
	}
	if(weight == true){
		GetComponent.<GUIText>().text = "Capacity:\n"+Inventory.curWeight+"/"+Inventory.maxWeight;
	}
}

//function OnGUI () {
	
//}