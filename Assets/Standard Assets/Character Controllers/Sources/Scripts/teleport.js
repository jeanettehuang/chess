var lastTime : float;
var prevPos : Vector3;

function OnTriggerEnter (other : Collider){
	Debug.Log("ontrigger");
	if (other.tag == "Player" && this.name=="A8-teleport" && prevPos != Vector3(0,0,0) ) {
		Debug.Log("collide A8");
		Debug.Log(prevPos);
		// prevPos = this.transform.position;
		yield WaitForSeconds(0.5);
		lastTime = Time.time;
		other.transform.position = Vector3(4,0,4); // teleport to A8	
		
	}
	else {
	if (other.tag == "Player" && this.name=="F3-teleport") {
		Debug.Log("collide F3");
		
		Debug.Log(collider.
		// prevPos = this.transform.position;
		yield WaitForSeconds(0.5);		
		lastTime = Time.time;
		other.transform.position = Vector3(14,0,14); // teleport to A8;		
		
	}
	}
		
	
	
	
}

function OnTriggerExit (other : Collider) {
	prevPos = Vector3(0,0,0);
	Debug.Log("on exit");
	Debug.Log(prevPos);
}

function Update() {
	if (Input.GetKeyDown (KeyCode.DownArrow) || Input.GetKeyDown (KeyCode.UpArrow) ) {
		Debug.Log("key");

		
	}
}

//function OnTriggerEnter (other : Collider){
//	Debug.Log("ontrigger");
//	if (other.tag == "Player" && this.name=="F3-teleport" ) {
//		Debug.Log("collide F3");
//		
//		yield WaitForSeconds(0.5);
//
//		other.transform.position = Vector3(14,0,14); // teleport to A8	
//		
//	}
//	
//}
