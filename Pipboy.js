var leftKey = "left";
var rightKey = "right";
var statsS : GameObject;
var itemsS : GameObject;
var dataS : GameObject;
private var curPage = 1;

function Start () {

}

function Update () {
	if(curPage < 3){
		if(Input.GetKeyDown(rightKey)){
			curPage ++;
		}
	}
	if(curPage > 1){
		if(Input.GetKeyDown(leftKey)){
			curPage --;
		}
	}
	if(curPage == 1){
		statsS.SetActive(true);
		itemsS.SetActive(false);
		dataS.SetActive(false);
	}
	if(curPage == 2){
		statsS.SetActive(false);
		itemsS.SetActive(true);
		dataS.SetActive(false);
	}
	if(curPage == 3){
		statsS.SetActive(false);
		itemsS.SetActive(false);
		dataS.SetActive(true);
	}
}