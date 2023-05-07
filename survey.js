const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q1 = 'What is your name? Nicknames are also acceptable :) ';
const q2 = 'What is an activity you like doing?';
const q3 = 'What do you listen to while doing that?';
const q4 = 'Which meal is your favourite (eg: dinner, brunch, etc.)';
const q5 = 'What is your favourite thing to eat for that meal?';
const q6 = 'Which sport is your absolute favourite?';
const q7 = 'What is your superpower? In a few words, tell us what you are amazing at!';
const result = {};
//It's a terrile nest!
rl.question(q1, (answer1) => {
  result[q1] = answer1;
  rl.question(q2, (answer2) => {
    result[q2] = answer2;
    rl.question(q3,(answer3) => {
      result[q3] = answer3;
      rl.question(q4, (answer4)=>{
        result[q4] = answer4;
        rl.question(q5, (answer5)=>{
          result[q5] = answer5;
          rl.question(q6, (answer6)=>{
            result[q6] = answer6;
            rl.question(q7, (answer7)=>{
              result[q7] = answer7;
              console.log("Here is your online profile: ");
              for (let i in result) {
                console.log(`${i} : ${result[i]}`);
              }
              rl.close();
            });
          });
        });
      });
    });
  });
});














