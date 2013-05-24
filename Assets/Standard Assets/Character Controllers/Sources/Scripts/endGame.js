
// Use this for initialization
function OnTriggerEnter (other : Collider){
	Debug.Log("hi");
	Debug.Log(this.name);
	if (other.tag == "Player" && this.name=="7, 2 END") {
		Debug.Log("collide");
		Application.LoadLevel(2);	
	}
	if (other.tag == "Player" && this.name=="End") {
		Debug.Log("collide");
		Application.LoadLevel(1);	
	}
}
