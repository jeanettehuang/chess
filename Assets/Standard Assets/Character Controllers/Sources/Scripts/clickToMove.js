// Click To Move script
// Moves the object towards the mouse position on left mouse click
static var selectedId : int;
static var speed : int = 1;
 
function Update () {
    
       if (Input.GetKeyDown (KeyCode.UpArrow)) transform.Translate (Vector3(0,0,2) );
       
       if (Input.GetKeyDown (KeyCode.DownArrow)) transform.Translate (Vector3(0,0,-2));
       
       if (Input.GetKeyDown (KeyCode.LeftArrow)) transform.Translate (Vector3(-2,0,0));
       if (Input.GetKeyDown (KeyCode.RightArrow)) transform.Translate (Vector3(2, 0,0));
    
}
