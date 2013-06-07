function OnTriggerEnter (other : Collider){
	
	if (other.tag == "Player" && this.name=="TriggerABase" ) {
		Debug.Log("Hit Trigger A");
		Debug.Log(this.transform.parent.localScale.y);
		if (this.transform.parent.localScale.y == 0.45) {
			this.transform.parent.localScale.y = 0.25;
			GameObject.Find("E7").GetComponent(moveBlock).enabled=true;
		} else if (this.transform.parent.localScale.y == 0.25) {
			Debug.Log("turn off");
			this.transform.parent.localScale.y = 0.45;
			GameObject.Find("E7").GetComponent(moveBlock).enabled=false;
		} else {
			this.transform.parent.localScale.y = 0.25;
			
			GameObject.Find("E7").GetComponent(moveBlock).enabled=true;
		}
		
	}
	
	if (other.tag == "Player" && this.name=="TriggerBBase" ) {
		Debug.Log("Hit Trigger B");
		Debug.Log(this.transform.parent.localScale.y);
		if (this.transform.parent.localScale.y == 0.45) {
			this.transform.parent.localScale.y = 0.25;
			GameObject.Find("H7").transform.position.y = 2;
			GameObject.Find("H6").transform.position.y = 2;
			GameObject.Find("G7").transform.position.y = 2;
			GameObject.Find("TriggerA").transform.position.y = 3;
			
		} else if (this.transform.parent.localScale.y == 0.25) {
			Debug.Log("turn off");
			this.transform.parent.localScale.y = 0.45;
			GameObject.Find("H7").transform.position.y = 0;
			GameObject.Find("H6").transform.position.y = 0;
			GameObject.Find("G7").transform.position.y = 0;
			GameObject.Find("TriggerA").transform.position.y = 1;
		} else {
			this.transform.parent.localScale.y = 0.25;
			
			GameObject.Find("H7").transform.position.y = 2;
			GameObject.Find("H6").transform.position.y = 2;
			GameObject.Find("G7").transform.position.y = 2;
			GameObject.Find("TriggerA").transform.position.y = 3;
		}
		
	}
	
	if (other.tag == "Player" && this.name=="TriggerStar2Base" ) {
		Debug.Log("Hit Trigger Star2");
		Debug.Log(this.transform.parent.localScale.y);
		if (this.transform.parent.localScale.y == 0.45) {
			this.transform.parent.localScale.y = 0.25;
			GameObject.Find("E7").GetComponent(moveBlock).enabled=true;
		} else if (this.transform.parent.localScale.y == 0.25) {
			Debug.Log("turn off");
			this.transform.parent.localScale.y = 0.45;
			GameObject.Find("E7").GetComponent(moveBlock).enabled=false;
		} else {
			this.transform.parent.localScale.y = 0.25;
			
			GameObject.Find("E7").GetComponent(moveBlock).enabled=true;
		}
		
	}
	
	
		if (other.tag == "Player" && this.name=="starCollider2") {
			GameObject.Find("star").SetActive(false);
			GameObject.Find("TriggerStar2").collider.enabled = true;;
			GameObject.Find("TriggerStar2Base").collider.enabled = true;
			GameObject.Find("TriggerStar2Base").collider.isTrigger = true;
			GameObject.Find("TriggerStar2").renderer.material = GameObject.Find("E8").renderer.material;
	}
}

