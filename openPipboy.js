var openKey = "tab";
var pipBoy : GameObject;
private var open = false;

function Start () {
	pipBoy.SetActive(false);
}

function Update () {
	if(Input.GetKeyDown(openKey)){
		if(open == true){
			pipBoy.SetActive(false);
			open = false;
		}
		else{
			pipBoy.SetActive(true);
			open = true;
		}
	}
	if(open == true){
		Time.timeScale = 0;
		gameObject.GetComponent("FirstPersonController").enabled = false;
	}
	else{
		Time.timeScale = 1;
		gameObject.GetComponent("FirstPersonController").enabled = true;
	}
}
