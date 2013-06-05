function OnTriggerEnter (other : Collider){
	
	if (other.tag == "Player" && (this.name=="G3Collide") ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("G3").rigidbody.useGravity = true;
		yield WaitForSeconds(1);
		Debug.Log(other.transform.position.y);
		if (other.transform.position.y < -1.2){ 
			Application.LoadLevel(3);
		}
	}
	if (other.tag == "Player" && (this.name=="G6Collide") ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("G6").rigidbody.useGravity = true;
		yield WaitForSeconds(1);
		if (other.transform.position.y < -1.2){ 
			Application.LoadLevel(3);
		}
	}
	if (other.tag == "Player" && (this.name=="F5Collide") ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("F5").rigidbody.useGravity = true;
		yield WaitForSeconds(1);
		if (other.transform.position.y < -1.2){ 
			Application.LoadLevel(3);
		}
	}
	if (other.tag == "Player" && (this.name=="F6Collide") ) {
		yield WaitForSeconds(0.25);
		GameObject.Find("F6").rigidbody.useGravity = true;
		yield WaitForSeconds(1);
		if (other.transform.position.y < -1.2){ 
			Application.LoadLevel(3);
		}
	}

}