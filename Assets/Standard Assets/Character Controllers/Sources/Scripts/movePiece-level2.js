
function OnTriggerEnter (other : Collider){
	// Intro level 2
	if (other.tag == "Player" && (this.name=="C4Collide" || this.name=="E4Collide") ) {
		yield WaitForSeconds(0.25);
		Debug.Log("collide");
		GameObject.Find("pawnD5").transform.position = other.transform.position;
		
		if (HealthControl.LIVES > 1) { GameObject.Find("tryagainMesh").renderer.enabled = true;}
		Application.LoadLevel(Application.loadedLevel);
	}
}