var weapons : GameObject[];
var obstats : GameObject;
var bullet : Rigidbody;
var curObject : GameObject;

function Start () {
	
}

function Update () {
	
	for(var i : int = 0; i < weapons.Length; i++){
		if(weapons[i].name == Inventory.curWeapon){
			weapons[i].SetActive(true);
			curObject = weapons[i];
		}
		else{
			weapons[i].SetActive(false);
		}
	}
	if(Input.GetKeyDown("mouse 0")){
		attack();
	}
}
function attack () {
	if(obstats.GetComponent(Inventory.curWeapon).melee == false){
		if(Inventory.ammo > 0){
			var clone : Rigidbody = Instantiate(bullet, curObject.transform.position, transform.rotation);
 			clone.GetComponent.<Rigidbody>().AddForce(transform.forward * 3000);
 			clone.GetComponent("bullet").damage = obstats.GetComponent(Inventory.curWeapon).damage;
 			Inventory.ammo -= 1;
 		}
	}
}