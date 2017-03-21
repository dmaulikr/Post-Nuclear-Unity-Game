static var curHealth = 20;
static var maxHealth = 20;
static var xp = 0;
static var level = 1;
static var rads = 0;
static var AP = 5;
static var maxAP = 5;
static var caps = 10;

function Start () {

}

function Update () {
	if(xp >= 10 + level * 10){
		xp -= 10 + level * 10;
		level ++;
		rads = 0;
		maxHealth += 10;
		curHealth = maxHealth;
		maxAP += 1;
		AP = maxAP;
	}
}

static function addHealth (newHealth : int) {
	if(curHealth + newHealth <= maxHealth - rads){
		curHealth += newHealth;
	}
	else{
		curHealth = maxHealth-rads;
	}
}