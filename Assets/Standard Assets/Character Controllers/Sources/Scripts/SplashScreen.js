
 // Draws 2 buttons, one with an image, and other with a text
    // And print a message when they got clicked.
    var btnTexture : Texture;
    function OnGUI() {
        if (!btnTexture) {
            Debug.LogError("Please assign a texture on the inspector");
            return;
        }
		
		if (GUI.Button(Rect(175,100,100,50),btnTexture)){
            Debug.Log("Clicked the button with an image");
            Application.LoadLevel(0);
            }
		
        if (GUI.Button(Rect(175,100,100,50),"Restart Game")) {
            Debug.Log("Clicked the button with text");

            }
    }