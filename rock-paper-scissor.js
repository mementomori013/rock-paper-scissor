
let computerChoice = getComputerChoice();
let userInput = prompt("0-scissor 1-rock 2-paper \n Input number: ");
console.log("user input: " + userInput)
let userInputRPS = getUserInput(parseInt(userInput));

console.log("user: " + userInputRPS);
console.log("computer: " + computerChoice);


let result = game(userInputRPS, computerChoice);
console.log (result)

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    console.log(num)
    switch (num) {
        case num = 0:
            return "scissor";
            break;
        case num = 1:
            return "rock";
            break;  
        case num = 2:
            return "paper";    
            break;
        default:
            return "no" ;
            break;   
    };

    
    }

    function getUserInput(userInput1){
        switch (userInput1) {
            case userInput= 0:
                return "scissor";
                break;
            case userInput1 = 1:
                return "rock";
                break;  
            case userInput1 = 2:
                return "paper";    
                break;
            default:
                return "no" ;
                break;   
        };
        
        }
        
        function game(user, computer){
            let scissor = "scissor"
            let rock = "rock"
            let paper = "paper"
            let win = "you won!"
            let lose = "you lose!"
            let tie = "tie"
            if (user == scissor)  {
                console.log("if" + scissor);
                switch (computer) {
                    case computer = scissor:
                        return tie;
                        break;
                    case computer = rock:
                        return lose;
                        break;
                    case computer = paper:
                        return win;
                        break;
                }
            }
            if (user == rock)  {
                console.log("if" + "rock");
                switch (computer) {
                    case computer = rock:
                        return tie;
                        break;
                    case computer = paper:
                        return lose;
                        break;
                    case computer = scissor:
                        return win;
                        break;
                }
            }
            if (user == paper) {
                console.log("if" + "paper");
                switch (computer) {
                    case computer = paper:
                        return tie;
                        break;
                    case computer = scissor:
                        return lose;
                        break;
                    case computer = rock:
                        return win;
                        break;
                }
            }
}
