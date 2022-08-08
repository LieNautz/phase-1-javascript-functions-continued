// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
// This code allows you to override the default activity 'roller-skate' by simply changing the value within the variable (activity) using string interpolation.


let mondayWork= function (office='go to the office') {
    return `This Monday, I will ${office}.`
}

//The default value of the variable let= is the function mondayWork.
//If no other value is passed (inputed) in the function than the default is 'go to office' on mondays.
//However the code is setup in a way that we can alter the function variable to say mondayWork= function (office='Do not go to office').

function wrapAdjective (whatever= "*") {
    return function(adjective= "special"){
        return `You are ${whatever}${adjective}${whatever}!`;
    }
}