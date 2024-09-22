const reservedAmount = document.getElementById('reserved-amount');
const donationAmount1 = document.getElementById('donation1');
const donationAmount2 = document.getElementById('donation2');
const donationAmount3 = document.getElementById('donation3');
const myModal =  document.getElementById('my_modal_1');
const cardContainer = document.getElementById('card-container');
const historyContainer = document.getElementById('history-container');



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
    let firstInner = innerValueById('donation1');
    donationAmount1.innerText = firstInner + firstInput;
    reservedAmount.innerText = reservedAmount.innerText - firstInput;
    let valueInput = document.getElementById('first-input');
    valueInput.value = ""
    let history1 = `
         <div class="border py-5 px-3 mt-3">
          <h2 class="font-bold">${firstInput} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
          <p>Date : ${new Date()}</p>
        </div>
    `
    historyContainer.innerHTML += history1;
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
     let secondInner = innerValueById('donation2');
    donationAmount2.innerText = secondInner + secondInput;
    reservedAmount.innerText = reservedAmount.innerText - secondInput;
    document.getElementById('second-input').value = "";
    let history2 = `
        <div class="border py-5 px-3 mt-3">
        <h2 class="font-bold">${secondInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
        <p>Date : ${new Date()}</p>
        </div>
    `
    historyContainer.innerHTML += history2;
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
    let thirdInner = innerValueById('donation3');
    donationAmount3.innerText = thirdInner + thirdInput;
    reservedAmount.innerText = reservedAmount.innerText - thirdInput;
    document.getElementById('third-input').value = "";
    let history3 = `
        <div class="border py-5 px-3 mt-3">
        <h2 class="font-bold">${thirdInput}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
        <p>Date : ${new Date()}</p>
        </div>
    `
    historyContainer.innerHTML += history3;
}




function donateTabButton(){
    history_tab.classList.remove('bg-primary','text-black');
    history_tab.classList.add('text-gray-600');
    donate_tab.classList.add('bg-primary','text-black');
    donate_tab.classList.remove('border-2','text-gray-600');
    historyContainer.classList.add('hidden')
    cardContainer.classList.remove('hidden')
}




function historyTabButton(){
    history_tab.classList.add('bg-primary','text-black');
    history_tab.classList.remove('text-gray-600');
    donate_tab.classList.remove('bg-primary');
    donate_tab.classList.add('border-2','text-gray-600');
    cardContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden')
}



function blogNewTabOpen(){
    window.location.href = './blog.html';
}