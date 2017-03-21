static var curItem = 0;
private var slot1 = "";
private var slot2 = "";
private var slot3 = "";
private var slot4 = "";
private var slot5 = "";
var selectKey = "return";
var trashKey = "-";
var unequipKey = "p";
var obstats : GameObject;

function Start () {
	
}

function OnEnable () {
	curItem = 0;
	Inventory.reorganize();
	Inventory.weigh(obstats);
}

function Update () {
	//print(Inventory.itemsNum);
	if(Input.GetKeyDown("up")){
		if(curItem > 0){
			curItem --;
		}
	}
	if(Input.GetKeyDown("down")){
		if(curItem < Inventory.itemsNum -1){
			curItem ++;
		}
	}
	
	if(curItem - 2 >= 0){
		slot1 = Inventory.stuff[curItem-2];
	}
	else{
		slot1 = "";
	}
	
	if(curItem - 1 >= 0){
		slot2 = Inventory.stuff[curItem-1];
	}
	else{
		slot2 = "";
	}
	
	if(curItem >= 0){
		slot3 = Inventory.stuff[curItem];
	}
	else{
		slot3 = "";
	}
	
	if(curItem + 1 >= 0){
		slot4 = Inventory.stuff[curItem+1];
	}
	else{
		slot4 = "";
	}
	
	if(curItem + 2 >= 0){
		slot5 = Inventory.stuff[curItem+2];
	}
	else{
		slot5 = "";
	}
	
	GetComponent.<GUIText>().text = slot1 + "\n" + slot2 + "\n" + slot3 + "\n" + slot4 + "\n" + slot5;
	if(Input.GetKeyDown(selectKey)){
		Inventory.use(Inventory.stuff[curItem]);
		Inventory.weigh(obstats);
	}
	if(Input.GetKeyDown(trashKey)){
		Inventory.removeItem(Inventory.stuff[curItem]);
		Inventory.weigh(obstats);
	}
	if(Input.GetKeyDown(unequipKey)){
		Inventory.curWeapon = "fists";
	}
}
