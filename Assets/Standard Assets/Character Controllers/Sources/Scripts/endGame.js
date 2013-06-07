function OnTriggerEnter (other : Collider) {
	// Win level 1, trigger button
	if (other.tag == "Player" && this.name=="E8Collide-Level1") {
		GameObject.Find("levelCompleteMesh").renderer.enabled = true;
		yield WaitForSeconds(1);
		Application.LoadLevel(2);
	}

	// Win level 2, teleport
	if (other.tag == "Player" && this.name=="E8Collide-Level2") {
		GameObject.Find("levelCompleteMesh").renderer.enabled = true;
		yield WaitForSeconds(1);
		Application.LoadLevel(3);
	}
	
	// Win third level
	if (other.tag == "Player" && this.name=="E8Collide-Level3") {
		GameObject.Find("levelCompleteMesh").renderer.enabled = true;
		yield WaitForSeconds(1);
		Application.LoadLevel(4);
	}
	
	// Win fourth level
	if (other.tag == "Player" && this.name=="E8Collide-Level4") {
		GameObject.Find("levelCompleteMesh").renderer.enabled = true;
		yield WaitForSeconds(1);
		HealthControl.LIVES = 7;
		Application.LoadLevel(5);
	}
}