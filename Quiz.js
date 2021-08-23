var readlineSync = require('readline-sync');
const chalk = require('chalk');
questionnaire = [
{
  question:"In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film? ",
  answer: 3,
  options:["That he wants to study The Hulk",
           "That he knows about S.H.I.E.L.D.",
           "That they are putting a team together",
           "That Thaddeus owes him money"]
},
{
  question:"Who has directed the most MCU movies? ",
  answer: "THE RUSSO BROTHERS"
},
{
  question:"The Flerkens are a race of extremely dangerous aliens that resembles what? ",
  answer: 1,
  options:["Cats",
           "Ducks",
           "Reptiles",
           "Racoons"]

},
{
  question:"Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet? ",
  answer: "LOKI"
},
{
  question:"Which of the infinity stones is hidden on Vormir? ",
  answer: "SOUL STONE"
},
{
  question:"In ‘Black Panther’, what African country is Nakia operating in as a spy before T’Challa arrived and brought her back to Wakanda? ",
  answer: "NIGERIA"
},
{
  question:"In ‘Doctor Strange’, the Time Stone is revealed to be hidden inside what artifact? ",
  answer: "EYE OF AGAMOTTO"
},
{
  question:"Who are the primordial beings that are responsible for the creation of the Infinity Stones? ",
  answer: "COSMIC ENTITIES"
},
{
  question:"What is Deadpool’s real name? ",
  answer: "WADE WILSON"
},
{
  question:"Malekith is the villain of ‘Thor: The Dark World’? ",
  answer: "YES"
}
]

highscore = [
  {
    name:"palak",
    score:10
  },
  {
    name:"sugam",
    score:1
  }
];

function spy()
{
var codeNames = ['Agent X.232','Carl Hamilton','Jack Ryan','Peter Pettigrew']
console.log(chalk.bgCyan.bold("Your name cannot be publicised, choose one from this"))
index = readlineSync.keyInSelect(codeNames,'Choose a digit')
console.log(chalk.italic("\n------FAKE IDENTITY IS BEING CREATED-------\n"))
console.log(chalk.magentaBright.bold("Welcome " + codeNames[index] + "!!" ))
return codeNames[index];
}

function confBar(){
  var max =10,min =0, value = 5,key;
  console.log(chalk.yellow("\nHow many questions can you answer"))
  console.log(chalk.green("\nPress[Z] for left, [X] for right, [SPACE] for escape\n"));
  while(true){
    console.log(chalk.redBright.bold("\x1B[1A\x1B[K|"+(new Array(value+1).join("-"))+'o'+(new Array(max-value+1)).join("-")+"| confidence : "+value));
    key = readlineSync.keyIn('',{hideEchoBack:true,mask:'',limit:'zx '})
    if(key==='x'){if(value<max){value++;}}
    else if(key==="z"){if(value>min){value--;}}
    else{break;}
  }
  return value;
}

function welcome()
{
var name = readlineSync.question(chalk.red("Welcome to the MCU!!, Please enter your name -  "),{hideEchoBack:true});

var codeName = spy();
var confidence = confBar();
if(confidence>=0 && confidence<=3){
console.log(chalk.blue(chalk.yellow("\nDon't worry you'll do great! For a heads up, look at the HighScore Board\n")));}
if(confidence>=4 && confidence<=7){
console.log(chalk.green(chalk.yellow("\nBoost your Confidence! For a heads up, look at the HighScore Board\n")));}
if(confidence>=8 && confidence<=10){
console.log(chalk.magenta(chalk.yellow("\nPretty Confident! good :)For a heads up, look at the HighScore Board, buckle up!\n")));}
for(var i = 0;i<highscore.length;i++){
    console.log(highscore[i]);
  }
  return name;
}

function game()
{
  var score = 0;
  if(readlineSync.keyInYN(chalk.bgRed.bold("\nAre you ready?\n"))){
  
  console.log(chalk.italic.bold.yellow("Let's go!"))
  }
  else{
    console.log(chalk.blue("Yes you are! :P "))
  }

  console.log(chalk.green.italic("\nAnswer the following questions: \n"))
  for(var i=0;i<questionnaire.length;i++)
  {
    if(questionnaire[i].hasOwnProperty('options')==true){

      score = plays(questionnaire[i].question,questionnaire[i].answer,questionnaire[i].options,score);
    }
    else{
      
    score = play(questionnaire[i].question,questionnaire[i].answer,score);}
    
    console.log(chalk.magenta.italic("Your current Score is : "+score));
    console.log("\n--------------------------------------\n")
  }
  return score;

}


function plays(question,answer,options,score){
  console.log(chalk.yellow(question))
  if(answer==(readlineSync.keyInSelect(options,'choose the correct option')+1)){
    console.log(chalk.green("\nCorrect!!"))
    score++;
    if(score==3){console.log(chalk.yellow("\nCongratulations! you have passed level 1!"));}
    else if(score==6){console.log(chalk.cyan("\nCongratulations! you have passed level 2!\n"))}
    else if(score==10){console.log(chalk.redBright("\nCongratulations! you have passed level 3, BINGO!!\n"))}
  }
   else
      {
        console.log(chalk.red("Psstt!! Wrong Answer"))
        console.log(chalk.magenta("Correct Answer is : " + options[answer-1]));
      }

      
      return score;
}

function play(question,answer,score){
  if(answer==(readlineSync.question(chalk.blue(question)).toUpperCase()))
      {
        ++score;
        console.log(chalk.green("Correct!"))
        if(score==3){console.log(chalk.yellow("\nCongratulations! you have passed level 1!"));}
    else if(score==6){console.log(chalk.cyan("\nCongratulations! you have passed level 2!\n"))}
    else if(score==10){console.log(chalk.redBright("\nCongratulations! you have passed level 3, BINGO!!\n"))}
      }
    else
      {
        console.log(chalk.red("Psstt!! Wrong Answer"))
        console.log(chalk.magenta("Correct Answer is : " + answer));
      }

      
      return score;
}

function finalscore(score){
  console.log("Your Final Score is -> " + score);
  if(score>highscore[1].score)
  {
    highscore[1].score = score;
    highscore[1].name = name;
    if(readlineSync.keyInYN(chalk.bgGreenBright(chalk.bgGreenBright.italic("\nCONGRATULATIONS!!!!! you have your name on the highscore board.. Wanna Check?\n")))){
      for(var i = 0;i<highscore.length;i++){
      console.log(highscore[i]);
    }
  }
  }
  else{
    console.log(chalk.bgRedBright("Sorry! You couldn't make it up to the score Board, better luck next time!"));
  }
}

var name = welcome();
var score = game();
finalscore(score);

