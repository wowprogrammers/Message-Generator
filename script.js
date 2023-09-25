console.log("*********Piece of Random Advices for Waleed Bukhari*************");

// Using Arrays

let msgComp1 = ['Waleed You!','Waleed You!','You!'];
let msgComp2 = ['Can Do it!','Can Acheive Your Goals','Keep your Mindset Always Positive'];
let msgComp3 = ['And Should Avoid Negativity','And Never Ever Lose Hope','And Avoid Distractions'];

// Generate Random Number 
function getRandomNumber(num){
    // Generate Random Number from 0 to num - 1
    return Math.floor(Math.random() * num);
}
// Message Generator Function
let msgGenerator = function(comp1,comp2,comp3){
// For First Random Message
let random1 = getRandomNumber(comp1.length);
let randmStr1 = comp1[random1]; 
let randmStr2 = comp2[random1];
let randmStr3 = comp3[random1];

console.log(`${randmStr1} ${randmStr2} ${randmStr3}`)

// For Second random Msg
let random2 = getRandomNumber(comp1.length)
let secStr1=  comp1[random2]; 
let secStr2 = comp2[random2];
let secStr3 = comp3[random2];

console.log(`${secStr1} ${secStr2} ${secStr3}`)
}
msgGenerator(msgComp1,msgComp2,msgComp3);