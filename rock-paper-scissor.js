

// let userInput = prompt("0-scissor 1-rock 2-paper \n Input number: ");
// console.log("user input: " + userInput)
// let userInputRPS = getUserInput(parseInt(userInput));
// console.log("user: " + userInputRPS);
// console.log("computer: " + computerChoice);
const ul = document.querySelector("ul")
const body = document.querySelector("body")
const scoreHolder = document.createElement("div")
const playersPick = document.createElement("p")
const score = document.createElement("p")
const winAnnounce = document.createElement("p")
let playerPoints = 0;
let computerPoints = 0;


ul.addEventListener("click", (e)=>{
        let playerPick = e.target.id
        let computerChoice = getComputerChoice();
        console.log(getUserInput(playerPick));
        scoring(game(playerPick,computerChoice))
        score.textContent = "player: " + playerPoints + " " + "computer: " + computerPoints
        playersPick.textContent = "player: " + playerPick + "  " + "computer: " + computerChoice 
        body.append(scoreHolder)
        scoreHolder.append(playersPick)
        scoreHolder.appendChild(score)    
        if (playerPoints == 5) {
            winAnnounce.textContent = "CONGRATULATIONS! YOU WIN!!!"
            scoreHolder.appendChild(winAnnounce)
            playerPoints = 0;
            computerPoints = 0;
        }
        else if (computerPoints == 5) {
            winAnnounce.textContent = "BETTER LUCK NEXT TIME. COMPUTER WIN!"
            scoreHolder.appendChild(winAnnounce)
            playerPoints = 0;
            computerPoints = 0;
        }
        else if (playerPoints < 5 && computerPoints < 5) {
            winAnnounce.textContent = ""
        }
         
    })
 
        



//let result = game(userInputRPS, computerChoice);
//console.log (game(userInputRPS, computerChoice));

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    //console.log(num)
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
            case userInput = "rock":
                return "rock";
                break;
            case userInput1 ="paper":
                return "paper";
                break;  
            case userInput1 = "scissor":
                return "scissor";    
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
            let win = "win"
            let lose = "lose"
            let tie = "tie"
            if (user == scissor)  {
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
function scoring(result){
    if (result == "win"){
        playerPoints = playerPoints + 1 
    }
    else if (result == "lose"){
        computerPoints = computerPoints + 1  
    }
    else if (result == "tie"){
        playerPoints = playerPoints 
        computerPoints = computerPoints 
        
    }
}