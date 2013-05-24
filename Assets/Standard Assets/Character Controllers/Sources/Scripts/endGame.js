
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
	
	if (other.tag == "Player" && this.name == "0, 6-Fall"){
		Debug.Log("fall");
		yield WaitForSeconds(1);
		transform.Find("0, 6").rigidbody.useGravity = true;

	}
	
	if (other.tag == "Player" && this.name == "7, 4 -H2-Fall"){
		Debug.Log("fall");
		yield WaitForSeconds(1);
		transform.Find("7, 4 — H2").rigidbody.useGravity = true;

	}
		if (other.tag == "Player" && this.name == "3, 4-Fall"){
		Debug.Log("fall 3,4");
		yield WaitForSeconds(0.5);
		Debug.Log("find");
		transform.Find("3, 4").rigidbody.useGravity = true;
		Debug.Log("falling");

	}
}

