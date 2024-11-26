// CODE HERE
function greetings(...name){
    if(name.length === 0){
        console.log("Hello, my friend");
    }
    else{
        if(name.length === 1){
            if(name == name.toString().toUpperCase()){
                console.log("HELLO " + name + "!");
            }
            else{
                console.log("Hello " + name);
            }
        }
        else{
            let message = "Hello ";
            for(i=0;i<name.length;i++){
                if(i === name.length - 2){
                    message = message + name[i] + " and " + name[i+1];
                    break;
                }
                else{
                    message = message + name[i] + ", ";
                }
            }
            console.log(message);
        }
    }
}

module.exports = greetings;
