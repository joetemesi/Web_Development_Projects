function main(){
    //your code here
    putBeeper ();
    moveUp();
    putBeeper();
    beeperRight();
    beeperRight();
    beeperRight();
    moveLeft ();
    moveDown ();
    moveRight ();
 }
 
 function moveUp(){ //Function to move the kagel forward one step and turn it left and move up one step
    move ();
    turnLeft ();
    move ();
 }
 
  function beeperRight(){ // Function to turn the Kagel to the right,move the kagel forward one step and turn it left and move up one step and stamp beeper
    turnRight(); 
    moveUp ();
    putBeeper();
 }
 
  function moveLeft (){
    turnLeft ();
    move ();
    move ();
    putBeeper();
    move ();
    move ();
    putBeeper();
    
}
   function moveDown (){
    turnLeft ();
    move ();
    move ();
    putBeeper();
    move ();
    move ();   
}

   function moveRight () {
     turnLeft ();
     move ();
     move ();
     putBeeper();
     move ();
     move ();
     putBeeper();
     turnLeft ();
     move ();
     move ();
     putBeeper();
     move ();
     move ();
     turnLeft ();
     move ();
     move ();
     move ();
     turnLeft ();
     move ();
     putBeeper();
     turnLeft();
     move();
     move();
     turnRight();
     move();
     move();
     putBeeper();
     move();
     
     
}    
      