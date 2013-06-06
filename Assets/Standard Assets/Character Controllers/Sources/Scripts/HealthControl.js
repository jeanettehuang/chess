var health1 : Texture2D; // one life left
var health2 : Texture2D; // two lives left
var health3 : Texture2D; // three lives left
var health4 : Texture2D; // four lives left
var health5 : Texture2D; // full health

static var LIVES = 5;

function Update () {
	switch(LIVES) {
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