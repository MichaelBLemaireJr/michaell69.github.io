//Looping a triangle
//
let i = "#";
while(i.length <= 7){
    console.log(i);
    i += "#";
}

//FizzBuzz
//
for(let i = 1; i <= 100; i++){
  if(i % 15 === 0){
  	console.log("FizzBuzz");
  } else if(i % 5 === 0){
    console.log("Buzz");
    } else if(i % 3 === 0){
      console.log("Fizz");
} else{
       console.log(i);
    }
}

//Chestboard
//
let size = 8; 
let board = "";
for (let i = 0; i < size; i++) {   
  for (var x = 0; x < size; x++) {
    if ((x + i) % 2 == 0){
      board += " ";
    }else{
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);