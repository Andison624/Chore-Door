//3:Create a global variable called doorImage1/2/3. Use a JavaScript DOM method to assign this global variable to the HTML element with the id of door1/2/3.
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
//5:Create a new global variable called botDoorPath. Set its value to this string which is the path containing the ChoreBot image
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
//6:Create a global variable called beachDoorPath and assign the URL
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
//7:Create another global variable called spaceDoorPath and assign the URL 
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
//8:Create another global variable called closedDoorPath and assign this URL
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let openDoor1;
let openDoor2;
let openDoor3;
//11:Create the global variable numClosedDoors and set its value to the amount of doors in the game.
let numClosedDoors = 3;
//22:Create a startButton global variable and use a JavaScript DOM method to assign its value to the HTML element with the id of start.
let startButton = document.getElementById('start');
//29: Notice that even if you find the ChoreBot behind the first door or second door that you open, you can still open the remaining doors and override a loss to victory. Add a new global variable named currentlyPlaying and set its value to true.
let currentlyPlaying = true;

//20:Create isClicked() that has door as a parameter. Write an if/else statement where the condition checks if the door‘s src is equivalent to the closedDoorPath.
  //20.1:If they share the same value, then the door hasn’t been opened yet (meaning it has not been clicked) and you should return false.
  //20.2:Otherwise, the door must be open already (meaning it has been clicked) so the function should instead return true.
const isClicked= door => {
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
};

//25:Create a new function called isBot() that takes door as its argument. isBot() will return a boolean value. Within this new function, write an if/else statement to check if the door.src value is equivalent to the botDoorPath. 
  //25.1: If they share the same value, that means that particular door has the ChoreBot and should return true.
  //25.2: Otherwise, the isBot() function should return false.
const isBot = door => {
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
};

//16:Create a function called playDoor() that serves two important roles: 
  //16.1: It decreases the numClosedDoors variable. This is because each time you click a door, the number of available doors to click goes down by one. 
  //16.2: It checks if the game-winning condition (numClosedDoors === 0) has been met and if so, calls a gameOver() function.
const playDoor= door => {
  //17:Write code to decrease the numClosedDoors variable every time its called.
  numClosedDoors--;
  //18:Write an if/else statement that determines if the game-winning condition has been reached. If so, call a gameOver() function
  if(numClosedDoors === 0){
    //24:Add the string 'win' as the argument for the gameOver() function.
    gameOver('win');
    //26: Add an else if condition that checks if the isBot() will equate to true if you pass the door as the isBot() argument.
  }else if(isBot(door)){
    //27:If this isBot() function equates to true, call the gameOver() function with 'lose'
    gameOver('lose');
  }  
};

//10:Create a randomChoreDoorGenerator() function using arrow function syntax.
const randomChoreDoorGenerator = () => {
  //12:Create a choreDoor variable and set its value to a Math method that will randomly generate a whole number between 0 and 5.
  const choreDoor = Math.floor(Math.random() * 6);
    //13:Write an if/else if/else statement where each condition is a possible choreDoor value of 0, 1, 2, 3, 4, 5.
    //14:Since there are 3 conditions in this if/else statement, assign the botDoorPath variable to a different openDoor global variable so that openDoor1 is assigned the botDoorPath variable under one condition, openDoor2 is assigned the botDoorPath variable under another condition, and openDoor3 is assigned the botDoorPath variable in the final condition.
    if(choreDoor === 0){
       openDoor1 = botDoorPath;
       openDoor2 = beachDoorPath;
       openDoor3 = spaceDoorPath;
    }else if(choreDoor === 1){
       openDoor1 = botDoorPath;
       openDoor2 = spaceDoorPath;
       openDoor3 = beachDoorPath;
    }else if(choreDoor === 2){
       openDoor1 = beachDoorPath;
       openDoor2 = spaceDoorPath;
       openDoor3 = botDoorPath;
    }else if(choreDoor === 3){
       openDoor1 = beachDoorPath;
       openDoor2 = botDoorPath;
       openDoor3 = spaceDoorPath;
    }else if(choreDoor === 4){
       openDoor1 = spaceDoorPath;
       openDoor2 = botDoorPath;
       openDoor3 = beachDoorPath;
    }else{
       openDoor1 = spaceDoorPath;
       openDoor2 = beachDoorPath;
       openDoor3 = botDoorPath;
    }
};
randomChoreDoorGenerator();

//4:Assign doorImage1/2/3.onclick to a new, empty arrow function.This function will run whenever the first door image element is clicked.
//9:change the src of doorImage1/2/3 to the value of botDoorPath.Now when click on the door, watch as the closed door image changes to the other.
//15:In its current state, the logic inside explictly states which image path will replace the original src. Replace these explicit variables from each .onclick() function with an openDoorX variable so that the value of doorImage1.src will change to openDoor1, and so on.
doorImage1.onclick = () => {
  //21:Call the isClicked() function, this logic now protects the game from shortcut victories by making each closed door clickable only once.
  //31:Add to the current if statement a condition that checks whether currentlyPlaying returns true
  if(currentlyPlaying && !isClicked(doorImage1)){
  doorImage1.src = openDoor1;
  //19:At the bottom of each event, call the playDoor() function.
  //28:Since the playDoor() function now needs an argument, look at the door element .onclick() functions. Pass doorImage1, doorImage2, and doorImage3, respectively, as the arguments for the playDoor() function within each .onclick() function.
  playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
};

//32:One problem though - the only way to reset the values for a new round is to refresh the page.Create a startButton.
startButton.onclick = () => {
    startRound();
};


//33: Create a startRound() function, this function not only has to start a new game; it also has to reset the values from the previous game.
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}
//34:After all these variables are reset, call the randomChoreDoorGenerator() function at the bottom.
startRound();

//23: Create a gameOver function, add status as a function parameter and write an if statement where the condition checks if status is equivalent to 'win'. If this condition equates to true, then the innerHTML of the startButton should change to 'Yon win!Play Again?'. If false, change to 'Game over!Play Again?'.
const gameOver = status => {
  if(status === 'win'){
    startButton.innerHTML = 'Yon win!Play Again?'
  }else{
    startButton.innerHTML = 'Game over!Play Again?'
    //30:Set currentlyPlaying to false. Wll use this value to make sure that additional doors can’t be clicked after the ChoreBot door is clicked.
  }currentlyPlaying = false;
}
