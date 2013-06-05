function OnTriggerEnter (other : Collider) {

	// A8 and F3
	if (other.tag == "Player" && this.name=="A8-teleport" ) {
		a = GameObject.Find("F3-teleport");
		yield WaitForSeconds(0.5);
		a.collider.enabled = false;
		other.transform.position = Vector3(4,0,4); // teleport to F3
	}
	
	if (other.tag == "Player" && this.name=="F3-teleport") {
		a = GameObject.Find("A8-teleport");
		yield WaitForSeconds(0.5);					
		a.collider.enabled = false;
		other.transform.position = Vector3(14,0,14); // teleport to A8;	
	}

	if (other.tag == "Player" && (this.name=="B8-t" || this.name=="A7-t" ||this.name=="B7-t")) {
		a = GameObject.Find("A8-teleport");
		a.collider.enabled = true;
	}

	if (other.tag == "Player" && (this.name=="F3-U" || this.name=="F3-D" ||this.name=="F3-L" || this.name=="F3-R")) {
		Debug.Log("hihi - "+this.name);
	}
	
	// D6 and G5
	if (other.tag == "Player" && this.name=="D6-teleport" ) {
		a = GameObject.Find("G5-teleport");
		yield WaitForSeconds(0.5);
		a.collider.enabled = false;
		other.transform.position = Vector3(8,0,2); // teleport to G5
	}

	if (other.tag == "Player" && this.name=="G5-teleport") {
		a = GameObject.Find("D6-teleport");			
		yield WaitForSeconds(0.5);					
		a.collider.enabled = false;
		other.transform.position = Vector3(10,0,8); // teleport to D6;
	}

	if (other.tag == "Player" && (this.name=="F5Collide" || this.name=="F6Collide" ||this.name=="G6Collide" || this.name=="TriggerBBase")) {		
		a = GameObject.Find("G5-teleport");
		a.collider.enabled = true;
	}

	if (other.tag == "Player" && (this.name=="D6-U" || this.name=="D6-D" ||this.name=="D6-L" || this.name=="D6-R")) {
		a = GameObject.Find("D6-teleport");
		a.collider.enabled = true;
	}	
}