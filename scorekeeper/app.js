const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 5;
let isGameOver = false;

function updateScores(player,opponent){
    if(!isGameOver){
        player.score +=1;
        if(player.score === winningScore){
            isGameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled =true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click',function(){
    updateScores(p1,p2)
})

p2.button.addEventListener('click',function(){
    updateScores(p2,p1)
})


winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click',reset)

function reset(){
    p1.score = p2.score =0;
    isGameOver = false;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.classList.remove('has-text-success','has-text-danger');
    p2.display.classList.remove('has-text-success','has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
}