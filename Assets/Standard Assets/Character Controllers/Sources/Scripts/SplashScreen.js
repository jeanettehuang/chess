
 // Draws 2 buttons, one with an image, and other with a text
    // And print a message when they got clicked.
    var btnTexture : Texture;
    function OnGUI() {

        if (!btnTexture) {
            Debug.LogError("Please assign a texture on the inspector");
            return;
        }
		
		if (GUI.Button(Rect(Screen.width*0.5,Screen.height*0.55,140,50),btnTexture)){
            Debug.Log("Clicked the button with an image");
            Application.LoadLevel(0);
            }
		
        if (GUI.Button(Rect(Screen.width*0.5,Screen.height*0.55,140,50),"RESTART GAME")) {
            Debug.Log("Clicked the button with text");

            }
    }