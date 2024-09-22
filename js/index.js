const reservedAmount = document.getElementById('reserved-amount');
const donationAmount1 = document.getElementById('donation1');
const donationAmount2 = document.getElementById('donation2');
const donationAmount3 = document.getElementById('donation3');
const myModal =  document.getElementById('my_modal_1');
const cardContainer = document.getElementById('card-container');



let first_card_btn = buttonClickedById('first-card-btn');
let second_card_btn = buttonClickedById('second-card-btn');
let third_card_btn = buttonClickedById('third-card-btn');
let donate_tab = buttonClickedById('donate-tab');
let history_tab = buttonClickedById('history-tab');
let blog_btn = buttonClickedById('blog-btn');


first_card_btn.addEventListener('click', card1ButtonAction);
second_card_btn.addEventListener('click', card2ButtonAction);
third_card_btn.addEventListener('click', card3ButtonAction);
donate_tab.addEventListener('click', donateTabButton);
history_tab.addEventListener('click', historyTabButton);
blog_btn.addEventListener('click', blogNewTabOpen);


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
    if(!isNaN(secondInput) && secondInput > 0){
        myModal.showModal();
     }
     else{
         alert('Please Give Digits and Valid Number');
         return;
     }
    donationAmount2.innerText = secondInput;
    reservedAmount.innerText = reservedAmount.innerText - secondInput;
    document.getElementById('second-input').value = "";
}



function card3ButtonAction(){
    let thirdInput = inputValueById('third-input');
    if(!isNaN(thirdInput) && thirdInput > 0){
        myModal.showModal();
     }
     else{
         alert('Please Give Digits and Valid Number');
         return;
     }
    donationAmount3.innerText = thirdInput;
    reservedAmount.innerText = reservedAmount.innerText - thirdInput;
    document.getElementById('first-input').value = "";
}




function donateTabButton(){
    history_tab.classList.remove('bg-primary','text-black');
    history_tab.classList.add('text-gray-600');
    donate_tab.classList.add('bg-primary','text-black');
    donate_tab.classList.remove('border-2','text-gray-600');
    cardContainer.classList.add('hidden');
}




function historyTabButton(){
    history_tab.classList.add('bg-primary','text-black');
    history_tab.classList.remove('text-gray-600');
    donate_tab.classList.remove('bg-primary');
    donate_tab.classList.add('border-2','text-gray-600');
}



function blogNewTabOpen(){
    window.location.href = './blog.html';
}