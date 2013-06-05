var lastTime : float;
var prevPos : Vector3;

function OnTriggerEnter (other : Collider){
	Debug.Log("ontrigger");
	if (other.tag == "Player" && this.name=="A8-teleport" ) {
		Debug.Log("collide A8");
		cameraPos = camera.main.transform.position;
		
		a = GameObject.Find("F3-teleport");
				
		// prevPos = this.transform.position;
		yield WaitForSeconds(0.5);
		
		a.collider.enabled = false;
		other.transform.position = Vector3(4,0,4); // teleport to A8
		//camera.main.transform.position.y = cameraPos.y - 1.0;	
		
	}
	if (other.tag == "Player" && this.name=="F3-teleport") {
			Debug.Log("collide F3, " + this.name);
			
			cameraPos = camera.main.transform.position;			
			
			a = GameObject.Find("A8-teleport");
						
			yield WaitForSeconds(0.5);					
			
			a.collider.enabled = false;
			other.transform.position = Vector3(14,0,14); // teleport to A8;
			
			//camera.main.transform.position.y = cameraPos.y - 1.0;		
			Debug.Log("2: " + cameraPos.y);	
			
		}
	if (other.tag == "Player" && (this.name=="B8-t" || this.name=="A7-t" ||this.name=="B7-t")) {
		Debug.Log("hihi - " + this.name);
		a = GameObject.Find("A8-teleport");
		a.collider.enabled = true;
	}
	if (other.tag == "Player" && (this.name=="F3-U" || this.name=="F3-D" ||this.name=="F3-L" || this.name=="F3-R")) {
		Debug.Log("hihi - "+this.name);
		a = GameObject.Find("F3-teleport");
		a.collider.enabled = true;
	}
		
	
	
	
}


function Update() {
	if (Input.GetKeyDown (KeyCode.DownArrow) || Input.GetKeyDown (KeyCode.UpArrow) ) {
		//Debug.Log("key");

		
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
