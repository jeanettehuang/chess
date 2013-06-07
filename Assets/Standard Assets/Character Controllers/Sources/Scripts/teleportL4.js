function OnTriggerEnter (other : Collider) {

	// B1 and G6
	if (other.tag == "Player" && this.name=="B1-teleport" ) {
		a = GameObject.Find("G6-teleport");
		yield WaitForSeconds(0.5);
		a.collider.enabled = false;
		other.transform.position = Vector3(10,5,-2); // teleport to G6
	}
	
	if (other.tag == "Player" && this.name=="G6-teleport") {
		a = GameObject.Find("B1-teleport");
		yield WaitForSeconds(0.5);					
		a.collider.enabled = false;
		other.transform.position = Vector3(-6,0,12); // teleport to B1;	
	}

	if (other.tag == "Player" && (this.name=="C1-t" || this.name=="D1-t")) {
		a = GameObject.Find("B1-teleport");
		a.collider.enabled = true;
	}

	if (other.tag == "Player" && (this.name=="G5-t" || this.name=="H6-t" ||this.name=="TriggerBBase")) {		
		a = GameObject.Find("G6-teleport");
		a.collider.enabled = true;
	}
	
	// C2 and A4
	if (other.tag == "Player" && this.name=="C2-teleport" ) {
		a = GameObject.Find("A4-teleport");
		yield WaitForSeconds(0.5);
		a.collider.enabled = false;
		other.transform.position = Vector3(6,6,14); // teleport to A4
	}

	if (other.tag == "Player" && this.name=="A4-teleport") {
		a = GameObject.Find("C2-teleport");			
		yield WaitForSeconds(0.5);					
		a.collider.enabled = false;
		other.transform.position = Vector3(-4,0,10); // teleport to C2;
	}

	if (other.tag == "Player" && (this.name=="C1-t" || this.name=="D1-t")) {		
		a = GameObject.Find("C2-teleport");
		a.collider.enabled = true;
	}

	if (other.tag == "Player" && (this.name=="A5-t")) {
		a = GameObject.Find("A4-teleport");
		a.collider.enabled = true;
	}	
	

}