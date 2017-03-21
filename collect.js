var thing = "box";
var maxDistance = 1.0;
var player : Transform;
var isAmmo : boolean;
var ammo = 0;
var obstats : GameObject;
var distance;

function Start () {

}

function Update () {
	distance = Vector3.Distance(player.position, transform.position);
	if(distance <= maxDistance){
		if(Input.GetKeyDown("e")){
			if(isAmmo == true){
				Inventory.ammo += ammo;
			}
			else{
				Inventory.addTo(thing);
				Inventory.weigh(obstats);
			}
			Destroy(gameObject);
		}
	}
}