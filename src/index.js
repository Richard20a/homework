// CODE HERE
function greetings(...name){
    if(names.length === 0){
        console.log("Hello, my friend");
    }
    else{
        console.log("Hello "+ name);
    }
}

module.exports = greetings;
