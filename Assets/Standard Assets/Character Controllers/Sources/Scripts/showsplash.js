//function Awake () {
//	LeaveScene ();
//}
//
//function LeaveScene () {
//	yield WaitForSeconds (7);
//	Application.LoadLevel(1);
//}


// Draws 2 buttons, one with an image, and other with a text
// And print a message when they got clicked.
var btnTexture : Texture;
function OnGUI() {

    if (!btnTexture) {
        Debug.LogError("Please assign a texture on the inspector");
        return;
    }
	
	if (GUI.Button(Rect(Screen.width*0.5,Screen.height*0.85,140,50),btnTexture)){
        Application.LoadLevel(1);
    }
	
    if (GUI.Button(Rect(Screen.width*0.5,Screen.height*0.85,140,50),"START GAME")) {
	}
}