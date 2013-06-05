// Click To Move script
// Moves the object towards the mouse position on left mouse click
static var selectedId : int;
static var speed : int = 1;
 
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
    			if (transform.position.y <= 2) { 
    			
    			rigidbody.constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ;
    			
    			Debug.Log(transform.position);
    			cameraPos = Camera.main.transform.position;
    			//transform.Translate (Vector3(0,260*Time.deltaTime,0));
    			//transform.Translate(Vector3.up * 150 * Time.deltaTime, Space.World);
    			//rigidbody.AddForce(Vector3.up*500);
    			rigidbody.velocity += 9 * Vector3.up;
    			Camera.main.transform.position = cameraPos;
              
       	 }
        }
        
      //Debug.Log(transform.position);
    	
    	if (Input.GetMouseButtonDown(0)) {
    		Cam = GameObject.Find("Main Camera");
    		if (Cam.GetComponent("MouseLook").enabled == false) {
    			Cam.GetComponent("MouseLook").enabled = true;
    		} else {
    			Cam.GetComponent("MouseLook").enabled = false;
    		}
    	}
}
