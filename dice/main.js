var btnClickMe = document.getElementById('click-me');

console.log(btnClickMe);
function changeNum(){
    var divDiceDisplay = document.getElementsByClassName('number-element')[0];

    var diceNum = Math.floor((Math.random()*6)+1);

    console.log(diceNum)
    divDiceDisplay.innerHTML = diceNum;
}

btnClickMe.addEventListener("click",function(){
    changeNum();
})