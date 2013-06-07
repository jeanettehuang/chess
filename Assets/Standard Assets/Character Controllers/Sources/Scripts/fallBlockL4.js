function OnTriggerEnter (other : Collider){
	
	if (other.tag == "Player" && (this.name=="H8fallCollider") ) {		
		GameObject.Find("H7").rigidbody.useGravity = true;
		GameObject.Find("G7").rigidbody.useGravity = true;
		GameObject.Find("F7").rigidbody.useGravity = true;
		GameObject.Find("F6").rigidbody.useGravity = true;
		GameObject.Find("F4").rigidbody.useGravity = true;
		GameObject.Find("F5").rigidbody.useGravity = true;
		GameObject.Find("G4").rigidbody.useGravity = true;
		GameObject.Find("H4").rigidbody.useGravity = true;
		
		Debug.Log(other.transform.position.y);
		
		if (other.transform.position.y < -1.2){ 
			GameObject.Find("tryagainMesh").renderer.enabled = true;
			Application.LoadLevel(Application.loadedLevel);
			HealthControl.LIVES -= 1;
		}
	}
	

}