let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")

let result  = document.querySelector(".result")
let playerC = document.querySelector(".choicesP")
let computerC = document.querySelector(".choicesC")
let score = document.querySelector(".score")

let playAgainBtn = document.querySelector(".again")
let btns = document.querySelector(".choose")
let pcChoice = document.querySelector(".choices")
let againPlay = document.querySelector("#playAgain")
//for random computer choice
let computerChoice= () =>{
    let options = ["ROCK","PAPER","SCISSORS"]
    let random = Math.floor(Math.random()*3)
    let resultCom = (options[random])
    return resultCom
}
let computerPoint = 0
let userPoint = 0
//checking for winner
let winner=(message,computer) =>{
    if(message== computer){
        return "DRAW"
    }else if(message=="ROCK" && computer=="PAPER"){
        computerPoint ++
        return "AI WINS"
    }else if(message=="PAPER" && computer=="SCISSORS"){
        computerPoint ++
        return "AI WINS"
    }else{
        userPoint ++
        return "YOU WINs"
    }
}


let displayType = ()=>{
    btns.style.display = "none"
    playAgainBtn.style.display = "flex"
    pcChoice.style.display = "flex"
    btns.style.display = "none"
    score.style.display = "flex"
    score.innerHTML = `User-Score : ${userPoint} <br> Computer-Score : ${computerPoint}`
    
}

rock.addEventListener("click",()=>{
    const value = "ROCK"
    const value2 = computerChoice()
    result.textContent = (winner(value,value2))
    playerC.textContent = "You Played "+ value
    computerC.textContent= "Computer Played "+ value2
    displayType()
    

})
paper.addEventListener("click",()=>{
    const value = "PAPER"
    const value2 = computerChoice()
    result.textContent = (winner(value,value2))
    playerC.textContent = "You Played "+ value
    computerC.textContent= "Computer Played "+ value2
    displayType()
    
})
scissors.addEventListener("click",()=>{
    const value = "PAPER"
    const value2 = computerChoice()
    result.textContent = (winner(value,value2))
    playerC.textContent = "You Played "+ value
    computerC.textContent= "Computer Played "+ value2
    displayType()
    
})

// to play again
againPlay.addEventListener("click",()=>{
    playAgainBtn.style.display = "none"
    pcChoice.style.display = "none"
    btns.style.display = "flex"
    result.textContent = "CHOOSE!"
    score.style.display = "none"
})


