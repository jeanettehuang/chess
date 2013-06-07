function OnTriggerEnter (other : Collider){
	
	if (other.tag == "Player" && this.name=="TriggerBBase" ) {
		Debug.Log("Hit Trigger B");
	
		if (this.transform.parent.localScale.y == 0.45) { //trigger is on
			this.transform.parent.localScale.y = 0.25;
						
			
			GameObject.Find("C2Portal").renderer.enabled = true; //turn on mesh renderer			
			GameObject.Find("A4Portal").renderer.enabled = true;
			
			GameObject.Find("C2-teleport").collider.enabled = true; //turn on collider
			GameObject.Find("A4-teleport").collider.enabled = true;
			GameObject.Find("C2Portal").collider.enabled = true;
			GameObject.Find("A4Portal").collider.enabled = true;
			
			GameObject.Find("A4-teleport").collider.isTrigger=true;
			GameObject.Find("C2-teleport").collider.isTrigger=true;
			
		} else if (this.transform.parent.localScale.y == 0.25) {
			Debug.Log("turn off");
			this.transform.parent.localScale.y = 0.45;
			
			GameObject.Find("C2Portal").renderer.enabled = false; //turn on mesh renderer
			GameObject.Find("A4Portal").renderer.enabled = false;
			
			GameObject.Find("C2-teleport").collider.enabled = false; //turn on collider
			GameObject.Find("A4-teleport").collider.enabled = false;
			GameObject.Find("C2Portal").collider.enabled = false;
			GameObject.Find("A4Portal").collider.enabled = false;
			
			GameObject.Find("A4-teleport").collider.isTrigger=false;
			GameObject.Find("C2-teleport").collider.isTrigger=false;
			
		} else {
			this.transform.parent.localScale.y = 0.25;


			GameObject.Find("C2Portal").renderer.enabled = true; //turn on mesh renderer
			GameObject.Find("A4Portal").renderer.enabled = true;
			
			GameObject.Find("C2-teleport").collider.enabled = true; //turn on collider
			GameObject.Find("A4-teleport").collider.enabled = true;
			GameObject.Find("C2Portal").collider.enabled = true;
			GameObject.Find("A4Portal").collider.enabled = true;
			
			GameObject.Find("A4-teleport").collider.isTrigger=true;
			GameObject.Find("C2-teleport").collider.isTrigger=true;
		}
		
	}

	if (other.tag == "Player" && this.name=="TriggerStarBase" ) {
		Debug.Log("Hit Trigger Star");
	
		if (this.transform.parent.localScale.y == 0.45) { //trigger is on
			this.transform.parent.localScale.y = 0.25;
			GameObject.Find("E8").GetComponent(moveBlock).enabled=true;
			GameObject.Find("king").GetComponent(moveBlock).enabled=true;
			GameObject.Find("E8Collide-Level3").GetComponent(moveBlock).enabled=true;

			
		} else if (this.transform.parent.localScale.y == 0.25) {
			Debug.Log("turn off");
			this.transform.parent.localScale.y = 0.45;
			GameObject.Find("E8").GetComponent(moveBlock).enabled=false;
			GameObject.Find("king").GetComponent(moveBlock).enabled=false;
			GameObject.Find("E8Collide-Level3").GetComponent(moveBlock).enabled=false;

			
		} else {
			this.transform.parent.localScale.y = 0.25;
			GameObject.Find("E8").GetComponent(moveBlock).enabled=true;
			GameObject.Find("king").GetComponent(moveBlock).enabled=true;
			GameObject.Find("E8Collide-Level4").GetComponent(moveBlock).enabled=true;

		}
		
	}
	
	if (other.tag == "Player" && this.name=="starCollider") {
		GameObject.Find("star").SetActive(false);
		//GameObject.Find("D4").transform.position.y = 2;
		//GameObject.Find("H8bColliderD4").GetComponent(movePieceL4).enabled = false;
		GameObject.Find("H8bColliderD4").SetActive(false);
		GameObject.Find("D4").GetComponent(moveBlock).enabled=true;
		GameObject.Find("TriggerStar").GetComponent(moveBlock).enabled=true;
		GameObject.Find("C4").GetComponent(moveBlock).enabled=false;
		
	}
	
}