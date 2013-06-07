function OnTriggerEnter (other : Collider){
	
	if (other.tag == "Player" && (this.name=="F4Collide" || this.name=="D4Collide") ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("pawnE5").transform.position = other.transform.position;
		
		GameObject.Find("tryagainMesh").renderer.enabled = true;
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}
	if (other.tag == "Player" && this.name=="H3Collide" ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("pawnG4").transform.position = other.transform.position;
		
		GameObject.Find("tryagainMesh").renderer.enabled = true;
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}
	if (other.tag == "Player" && (this.name=="H7Collide" || this.name=="F7Collide") ) {
		yield WaitForSeconds(0.15);
		GameObject.Find("pawnG8").transform.position = other.transform.position;
		
		GameObject.Find("tryagainMesh").renderer.enabled = true;
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}

	// Intro level 1
	if (other.tag == "Player" && (this.name=="F2Collide" || this.name=="D2Collide") ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("pawnE3").transform.position = other.transform.position;
		
		GameObject.Find("tryagainMesh").renderer.enabled = true;
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}

	// Intro level 2
	if (other.tag == "Player" && (this.name=="C4Collide" || this.name=="E4Collide") ) {
		yield WaitForSeconds(0.25);
		Debug.Log("collide");
		GameObject.Find("pawnD5").transform.position = other.transform.position;
		
		GameObject.Find("tryagainMesh").renderer.enabled = true;
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}

	// Die after falling off board
	if (transform.position.y < -1.2){
		
		GameObject.Find("tryagainMesh").renderer.enabled = true; 
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}
}