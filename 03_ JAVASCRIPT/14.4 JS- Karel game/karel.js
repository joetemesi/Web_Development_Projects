function main(){
    //your code here
    putBeeper ();
    moveUp();
    putBeeper();
    beeperRight();
    beeperRight();
    beeperRight();  
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