function Update () {
    	
   if (Input.GetKeyDown (KeyCode.UpArrow)) {
   		transform.Translate (Vector3(0,0,2) );
   	}
   
   if (Input.GetKeyDown (KeyCode.DownArrow)) transform.Translate (Vector3(0,0,-2));
   
   if (Input.GetKeyDown (KeyCode.LeftArrow)) {
   	transform.Translate (Vector3(-2,0,0));
   	
   	}
   if (Input.GetKeyDown (KeyCode.RightArrow)) {
    transform.Translate (Vector3(2, 0,0));
    
	}
	
	if (Input.GetKeyDown (KeyCode.R)) transform.Translate (Vector3(2,0,2)); // diagonal up and right
  	if (Input.GetKeyDown (KeyCode.W)) transform.Translate (Vector3(-2,0,2)); // diagonal up and left
 	if (Input.GetKeyDown (KeyCode.F)) transform.Translate (Vector3(2,0,-2)); // diagonal down and right
 	if (Input.GetKeyDown (KeyCode.S)) transform.Translate (Vector3(-2,0,-2)); // diagonal down and left
	
	//jump
	if (Input.GetKeyDown ("space")){
		Debug.Log("space" + transform.position.y);
		rigidbody.velocity += 9 * Vector3.up;
    }
    
	if (Input.GetMouseButtonDown(0)) {
		Cam = GameObject.Find("Main Camera");
		if (Cam.GetComponent("MouseLook").enabled == false) {
			Cam.GetComponent("MouseLook").enabled = true;
		} else {
			Cam.GetComponent("MouseLook").enabled = false;
		}
	}
}
