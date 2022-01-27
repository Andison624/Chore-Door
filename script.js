//3:Create a global variable called doorImage1/2/3. Use a JavaScript DOM method to assign this global variable to the HTML element with the id of door1/2/3.
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
//5:Create a new global variable called botDoorPath. Set its value to this string which is the path containing the ChoreBot image
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

const isClicked= door => {
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
};

const isBot = door => {
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
};

const playDoor= door => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver('lose');
  }  
};

const randomChoreDoorGenerator = () => {
  // console.log(randomChoreDoorGenerator());
  const choreDoor = Math.floor(Math.random() * 6);
    // console.log(choreDoor);
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
//6:change the src of doorImage1/2/3 to the value of botDoorPath.Now when click on the door, watch as the closed door image changes to the other.
doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
  doorImage1.src = openDoor1;
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

startButton.onclick = () => {
    startRound();
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}
startRound();

const gameOver = status => {
  if(status === 'win'){
    startButton.innerHTML = 'Yon win!Play Again?'
  }else{
    startButton.innerHTML = 'Game over!Play Again?'
  }currentlyPlaying = false;
}
