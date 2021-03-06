function OnTriggerEnter (other : Collider){
	
	if (other.tag == "Player" && (this.name=="B7bCollider") ) {
		Debug.Log("collision: " + this.name);
		yield WaitForSeconds(0.25);
		GameObject.Find("bishopA8").transform.position = other.transform.position;
		
		if (HealthControl.LIVES > 1) { GameObject.Find("tryagainMesh").renderer.enabled = true;}
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}
	if (other.tag == "Player" && (this.name=="H8bCollider" || this.name=="H8bColliderD4") ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("bishopH8").transform.position = other.transform.position;
		
		if (HealthControl.LIVES > 1) { GameObject.Find("tryagainMesh").renderer.enabled = true;}
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}
	if (other.tag == "Player" && (this.name=="B4Collide") ) {
		Debug.Log("collision: " + this.name);
		yield WaitForSeconds(0.25);
		GameObject.Find("pawnC5").transform.position = other.transform.position;
		
		if (HealthControl.LIVES > 1) { GameObject.Find("tryagainMesh").renderer.enabled = true;}
		Application.LoadLevel(Application.loadedLevel);
		HealthControl.LIVES -= 1;
	}

//	// Die after falling off board
//	if (transform.position.y < -1.2){ 
//		Application.LoadLevel(Application.loadedLevel);
//		HealthControl.LIVES -= 1;
//	}
}