function OnTriggerEnter (other : Collider){
	
	if (other.tag == "Player" && (this.name=="life1" || this.name=="life2") ) {
	
	// Get an extra life
		
		if (HealthControl.LIVES < 7) {
		
			Debug.Log("You got a life!");
			
			HealthControl.LIVES += 1;		
			Debug.Log("lives: " + HealthControl.LIVES);
			
		}
		
		// Disable heart		
		GameObject.Find(this.name).SetActive(false);
		
		
	}



}