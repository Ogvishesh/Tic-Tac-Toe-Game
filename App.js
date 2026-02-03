let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; // playerX , playerO
let count = 0; // to track draw


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enabledbtn();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {

    box.addEventListener("click",()=>{

        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        }
        
        else{
            //playerX
            box.innerText = "X";
            turnO = true;
        }


        box.disabled = true;
        count++;

       let isWinner = checkWinner();

       if(count === 9 && !isWinner){
        gameDraw();

    }
});
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledbtn();
};


const disabledbtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};


const enabledbtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbtn();
};


const checkWinner = () => {
    for ( let pattern of winPatterns){
    let post1 = boxes[pattern[0]].innerText;
    let post2 = boxes[pattern[1]].innerText;
    let post3 = boxes[pattern[2]].innerText; 

    if(post1 != "" && post2 != ""  && post3  != ""){
        if(post1 === post2 && post2 === post3) {
              showwinner (post1);
            return true;
    }
    }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

