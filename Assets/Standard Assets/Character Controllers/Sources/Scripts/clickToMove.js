var lTime : float;
var arrowTime : float;

function Update () {
    
    // Arrow Keys	
	if (Input.GetKeyDown (KeyCode.UpArrow)) {
		if (Time.time > arrowTime + 0.5f || Time.time < 0.5f) {
			arrowTime = Time.time;
			transform.Translate (Vector3(0,0,2)); // up
		}
	}	
	if (Input.GetKeyDown (KeyCode.DownArrow)) {
		if (Time.time > arrowTime + 0.5f || Time.time < 0.5f) {
			arrowTime = Time.time;	
			transform.Translate (Vector3(0,0,-2)); // down
		}
	}
	if (Input.GetKeyDown (KeyCode.LeftArrow)) {
			if (Time.time > arrowTime + 0.5f || Time.time < 0.5f) {
				arrowTime = Time.time;
				transform.Translate (Vector3(-2,0,0)); // left
		}
	}
	if (Input.GetKeyDown (KeyCode.RightArrow)) {
			if (Time.time > arrowTime + 0.5f || Time.time < 0.5f) {
				arrowTime = Time.time;
				transform.Translate (Vector3(2, 0,0)); // right
		}
	}
	if (Input.GetKeyDown (KeyCode.R)) {
		if (Time.time > arrowTime + 0.5f || Time.time < 0.5f) {
			arrowTime = Time.time;
			transform.Translate (Vector3(2,0,2)); // diagonal up and right
		}
	}
	if (Input.GetKeyDown (KeyCode.W)) {
		if (Time.time > arrowTime + 0.5f || Time.time < 0.5f) {
			arrowTime = Time.time;
			transform.Translate (Vector3(-2,0,2)); // diagonal up and left
		}
	}
	if (Input.GetKeyDown (KeyCode.F)) {
		if (Time.time > arrowTime + 0.5f || Time.time < 0.5f) {
			arrowTime = Time.time;
			transform.Translate (Vector3(2,0,-2)); // diagonal down and right
		}
	}
	if (Input.GetKeyDown (KeyCode.S)) {
		if (Time.time > arrowTime + 0.5f || Time.time < 0.5f) {
			arrowTime = Time.time;
			transform.Translate (Vector3(-2,0,-2)); // diagonal down and left
		}
	}
	// Jump
	if (Input.GetKeyDown ("space")){		
		Debug.Log("space, time: " + Time.time);
		if (Time.time > lTime + 1f || Time.time < 1f) {
			lTime = Time.time;
		
			rigidbody.velocity += 7 * Vector3.up;
		}
    }
    
	if (Input.GetMouseButtonDown(0)) {
		Cam = GameObject.Find("Main Camera");
		if (Cam.GetComponent("MouseLook").enabled == false) {Cam.GetComponent("MouseLook").enabled = true;} 
		else {Cam.GetComponent("MouseLook").enabled = false;}
	}

	// Die after falling off board

	if (transform.position.y < -10.0){		
		Debug.Log("falling off board: " + transform.position.y);
		
		GameObject.Find("tryagainMesh").renderer.enabled = true;

		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
		
	}
	
	if (Application.loadedLevel == 1) {
		Debug.Log(showsplash.reloadTime);
	}

	// Start with six lives so it makes sense to pick up a life in level 1
	if (Application.loadedLevel == 1 && showsplash.reloadTime == 0 && HealthControl.LIVES == 7) {
		HealthControl.LIVES = 6;
		showsplash.reloadTime = Time.time;
		Debug.Log("level 1");
	}
}
