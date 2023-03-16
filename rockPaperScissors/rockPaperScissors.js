const prompt = require("prompt-sync")();
//Rock = 0, Paper = 1, Scissors = 2

const game = () => {
    while (true) {
        let result = "";
        const userChoice = prompt("Enter with your try: ");
        let user = userChoice.toLowerCase().trim();
        const computerChoice = Math.floor(Math.random() * 3);
        switch (user) {
            case "rock":
                switch (computerChoice) {
                    case 2:
                        result = "You Win, Rock destroys scissors.";
                        break;
                    case 1:
                        result = "You Lost, Paper covers rock.";
                        break;
                    case 0:
                        result = "Draw, Rock with Rock.";
                        break;
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case 2:
                        result = "You Lost, Scissors cut paper.";
                        break;
                    case 1:
                        result = "Draw, Paper with Paper";
                        break;
                    case 0:
                        result = "You Win, Paper covers rock.";
                        break;
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case 2:
                        result = "Draw, Scissors with scissors.";
                        break;
                    case 1:
                        result = "You Win, Scissors cut paper.";
                        break;
                    case 0:
                        result = "You Lost, Rock destroys scissors.";
                        break;
                }
                break;
            case "bomb":
                result = "You Win, Exploded everything.";
                break;
            default:
                console.log("Invalid choice!");
        }
        if (result === "") {
            console.log("Try again")
        } else {
            return result;
        }
    }
}

console.log(game());