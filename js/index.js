const reservedAmount = document.getElementById('reserved-amount');
const donationAmount1 = document.getElementById('donation1');
const donationAmount2 = document.getElementById('donation2');
const donationAmount3 = document.getElementById('donation3');
const myModal =  document.getElementById('my_modal_1');

let first_card_btn = buttonClickedById('first-card-btn');
let second_card_btn = buttonClickedById('second-card-btn');
let third_card_btn = buttonClickedById('third-card-btn');

first_card_btn.addEventListener('click', card1ButtonAction);
second_card_btn.addEventListener('click', card2ButtonAction);
third_card_btn.addEventListener('click', card3ButtonAction);



function card1ButtonAction(){
    let firstInput = inputValueById('first-input');
    if(!isNaN(firstInput) && firstInput > 0){
       myModal.showModal();
    }
    else{
        alert('Please Give Digits and Valid Number');
        return;
    }
    donationAmount1.innerText = firstInput;
    reservedAmount.innerText = reservedAmount.innerText - firstInput;
    let inputValue1 = document.getElementById('first-input');
    inputValue1.value = ""
}



function card2ButtonAction(){
    let secondInput = inputValueById('second-input');
    if(isNaN(secondInput)){
        alert('Please Give Digits');
        return;
    }
    donationAmount2.innerText = secondInput;
    reservedAmount.innerText = reservedAmount.innerText - secondInput;
    document.getElementById('second-input').value = "";
}



function card3ButtonAction(){
    let thirdInput = inputValueById('third-input');
    if(isNaN(thirdInput)){
        alert('Please Give Digits');
        return;
    }
    donationAmount3.innerText = thirdInput;
    reservedAmount.innerText = reservedAmount.innerText - thirdInput;
    document.getElementById('first-input').value = "";
}