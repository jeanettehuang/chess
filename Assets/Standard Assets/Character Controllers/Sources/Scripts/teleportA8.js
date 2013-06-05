function OnTriggerEnter (other : Collider){
	Debug.Log("ontrigger");
	if (other.tag == "Player" && this.name=="A8-teleport" ) {
		Debug.Log("collide A8");
		
		yield WaitForSeconds(0.5);

		other.transform.position = Vector3(4,0,4); // teleport to A8	
		
	}
	
}
