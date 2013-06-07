function OnTriggerEnter (other : Collider) {
	// Win level 1, trigger button
	if (other.tag == "Player" && this.name=="E8Collide-Level1") {
		yield WaitForSeconds(0.15);
		Application.LoadLevel(2);
	}

	// Win level 2, teleport
	if (other.tag == "Player" && this.name=="E8Collide-Level2") {
		yield WaitForSeconds(0.15);
		Application.LoadLevel(3);
	}
	
	// Win third level
	if (other.tag == "Player" && this.name=="E8Collide-Level3") {
		yield WaitForSeconds(0.15);
		Application.LoadLevel(4);
	}
	
	// Win fourth level
	if (other.tag == "Player" && this.name=="E8Collide-Level4") {
		yield WaitForSeconds(0.15);
		HealthControl.LIVES = 7;
		Application.LoadLevel(5);
	}
}