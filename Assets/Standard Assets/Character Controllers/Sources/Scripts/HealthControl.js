var health1 : Texture2D; // one life left
var health2 : Texture2D; // two lives left
var health3 : Texture2D; // three lives left
var health4 : Texture2D; // four lives left
var health5 : Texture2D; // five health
var health6 : Texture2D; // six health
var health7 : Texture2D; // full health

static var LIVES = 7;

function Update () {
	switch(LIVES) {
		case 7:
			guiTexture.texture = health7;
		break;
			
		case 6:
			guiTexture.texture = health6;
		break;	
				
		case 5:
			guiTexture.texture = health5;
		break;

		case 4:
			guiTexture.texture = health4;
		break;
		
		case 3:
			guiTexture.texture = health3;
		break;
		
		case 2:
			guiTexture.texture = health2;
		break;
		
		case 1:
			guiTexture.texture = health1;
		break;
		
		case 0:
			Application.LoadLevel(4);
			LIVES = 5;
		break;
	}
}