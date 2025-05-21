let rock_btn = document.getElementById("rock_btn");
let paper_btn = document.getElementById("paper_btn");
let scissors_btn = document.getElementById("scissors_btn");
let player_choice,computer_choice;
let userEmoji = document.getElementById("userEmoj");
let computerEmoji = document.getElementById("comEmoj");
let possible_choice = ["rock" , "paper" , "scissors"];
let userWin = 0,computerWin = 0,rounds = 1;
let myScore = document.getElementById("my_score");
let com_Score = document.getElementById("com_score");
function msg(text) {
    console.log(text);
    let not = document.createElement("div");
    not.setAttribute("class" , "notification");
    not.innerHTML = text;
    document.body.append(not);
    setTimeout(() => {
        not.remove();
    } , 1000);
}
function alert_msg(text) {
    let alert_not = document.createElement("div");
    let close_btn = document.createElement("button");
    close_btn.innerHTML = "X";
    close_btn.setAttribute("class" , "close_btn");
    close_btn.addEventListener("click" , function(){
        alert_not.remove();
    });
    alert_not.setAttribute("class" , "alert_notification");
    alert_not.innerHTML = text;
    alert_not.append(close_btn);
    document.body.append(alert_not);
}

rock_btn.addEventListener("click", function(){
    player_choice = "rock";
    userEmoji.innerHTML = "✊";
    playGame();
});
paper_btn.addEventListener("click", function(){
    player_choice = "paper";
    userEmoji.innerHTML = "✋";
    playGame();
});
scissors_btn.addEventListener("click", function(){
    player_choice = "scissors";
    userEmoji.innerHTML = "✌️";
    playGame();
});
function playGame() {
    if (rounds == 5) {
        console.log("Game Over");
        msg("Game Over");
    document.getElementById("round").innerHTML = "5/5";
    rock_btn.disabled = true;
    paper_btn.disabled = true;
    scissors_btn.disabled = true;
    winner();
        return;
    } else {
            rounds++;
    document.getElementById("round").innerHTML = rounds + "/5";
    }
    let i = Math.floor(Math.random() * 3);
    computer_choice = possible_choice[i];
    if (computer_choice == "rock") {
        computerEmoji.innerHTML = "✊";
    } else if (computer_choice == "paper") {
        computerEmoji.innerHTML = "✋";
    } else {
        computerEmoji.innerHTML = "✌️";
    }
    if (player_choice === computer_choice){
        msg("It's a tie!");
    } else if (player_choice === "rock" && computer_choice === "scissors") {
        userWinfunction()
    } else if (player_choice === "rock" && computer_choice === "paper") {
        ComWinfunction();
    } else if (player_choice === "paper" && computer_choice === "rock") {
        userWinfunction()
    } else if (player_choice === "scissors" && computer_choice === "rock") {
        ComWinfunction();
    } else if (player_choice === "scissors" && computer_choice === "paper") {
        userWinfunction()
    } else if (player_choice === "paper" && computer_choice === "scissors") {
        ComWinfunction();
    }

}
function userWinfunction() {
    userWin++;
    myScore.innerHTML = userWin;
    msg("You win!");
}
function ComWinfunction() {
    computerWin++;
    com_Score.innerHTML = computerWin;
    msg("You Lose!");
}
function winner() {
    if (userWin > computerWin) {
        alert_msg("You are the winner!");
    } else if (userWin < computerWin) {
        alert_msg("Computer is the winner!");
    } else {
        alert_msg("It's a tie!");
    }
}
function reset() {
    window.location.reload();
}