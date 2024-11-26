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
            const lower = [];
            const upper = [];
            let message1 = "";
            let message2 = "";
            for(i=0;i<name.length;i++){
                if(name[i] == name[i].toString().toUpperCase()){
                    upper.push(name[i]);
                }
                else{
                    lower.push(name[i]);
                }
            }

            if(lower.length === 1){
                message1 = "Hello " + lower;
            }
            else if(lower.length >= 2){
                message1 = "Hello ";
                for(i=0;i<lower.length;i++){
                    if(i === lower.length - 2){
                        message1 = message1 + lower[i] + " and " + lower[i+1];
                        if(upper.length != 0){
                            message1 = message1 + ". ";
                        }
                        break;
                    }
                    else{
                        message1 = message1 + lower[i] + ", ";
                    }
                }
            }
            
            if(upper.length === 1){
                message2 = "HELLO " + upper;
            }
            else if(upper.length >= 2){
                message2 = "HELLO ";
                for(i=0;i<upper.length;i++){
                    if(i === upper.length - 2){
                        message2 = message2 + upper[i] + " AND " + upper[i+1] + "!";
                        break;
                    }
                    else{
                        message2 = message2 + upper[i] + ", ";
                    }
                }
            }
            console.log(message1 + message2);
        }
    }
}

module.exports = greetings;
