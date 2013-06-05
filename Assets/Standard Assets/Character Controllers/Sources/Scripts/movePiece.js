function OnTriggerEnter (other : Collider){
	
	if (other.tag == "Player" && (this.name=="F4Collide" || this.name=="D4Collide") ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("pawnE5").transform.position = other.transform.position;
		Application.LoadLevel(2);
	}
	if (other.tag == "Player" && this.name=="H3Collide" ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("pawnG4").transform.position = other.transform.position;
		Application.LoadLevel(2);
	}
	if (other.tag == "Player" && (this.name=="H7Collide" || this.name=="F7Collide") ) {
		yield WaitForSeconds(0.15);
		GameObject.Find("pawnG8").transform.position = other.transform.position;
		Application.LoadLevel(2);
	}
}