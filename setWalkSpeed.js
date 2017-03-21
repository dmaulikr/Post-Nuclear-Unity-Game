var walkingSpeed = 5.0;
var runningSpeed = 10.0;
var slowSpeed = 2.5;
var character : GameObject;
var obstats : GameObject;

function Start () {
	yield WaitForEndOfFrame();
	Inventory.weigh(obstats);
}

function Update () {
	//var person : FirstPersonController;
	//person = GameObject.FindObjectOfType.<FirstPersonController>();
	if(Inventory.curWeight > Inventory.maxWeight){
		character.GetComponent("FirstPersonController").m_RunSpeed = slowSpeed;
		character.GetComponent("FirstPersonController").m_WalkSpeed = slowSpeed;
	}
	else{
		character.GetComponent("FirstPersonController").m_RunSpeed = runningSpeed;
		character.GetComponent("FirstPersonController").m_WalkSpeed = walkingSpeed;
	}
 }
