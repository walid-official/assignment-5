const reservedAmount = document.getElementById('reserved-amount');
const donationAmount1 = document.getElementById('donation1');
const donationAmount2 = document.getElementById('donation2');
const donationAmount3 = document.getElementById('donation3');
const cardContainer = document.getElementById('card-container');
const historyContainer = document.getElementById('history-container');
const historyContent = document.getElementById('history-content');
const myModal =  document.getElementById('my_modal_1');



const first_card_btn = buttonClickedById('first-card-btn');
const second_card_btn = buttonClickedById('second-card-btn');
const third_card_btn = buttonClickedById('third-card-btn');
const donate_tab = buttonClickedById('donate-tab');
const history_tab = buttonClickedById('history-tab');
const blog_btn = buttonClickedById('blog-btn');



first_card_btn.addEventListener('click', card1ButtonAction);
second_card_btn.addEventListener('click', card2ButtonAction);
third_card_btn.addEventListener('click', card3ButtonAction);
donate_tab.addEventListener('click', donateTabButton);
history_tab.addEventListener('click', historyTabButton);
blog_btn.addEventListener('click', blogNewTabOpen);




//first-function 1
function card1ButtonAction(){

    //step-1 : Input Validation
    let firstInput = inputValueById('first-input');
    document.getElementById('first-input').value = "";
    if(!isNaN(firstInput) && firstInput > 0 && reservedAmount.innerText >= firstInput){
       myModal.showModal();
    }else if(reservedAmount.innerText < firsInput){
        alert("you Don't have enough money");
        return;
    }else{
        alert('Invalid Donation Amount');
        return;
    }
     //step-2 : Donation Amount Calculation
    let firstInner = innerValueById('donation1');
    donationAmount1.innerText = firstInner + firstInput;
    reservedAmount.innerText = reservedAmount.innerText - firstInput;

    //step-3 : History Of Donation
    let history1 = `
         <div class="border py-5 px-3 mt-3">
          <h2 class="font-bold">${firstInput} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
          <p class="pt-3">Date : ${new Date()}</p>
        </div>
    `
    historyContainer.innerHTML += history1;
    historyContent.classList.add('hidden');
}






//second-function 2
function card2ButtonAction(){

    //step-1 : Input Validation
    let secondInput = inputValueById('second-input');
    document.getElementById('second-input').value = "";
    if(!isNaN(secondInput) && secondInput > 0 && reservedAmount.innerText >= secondInput){
        myModal.showModal();
     }else if(reservedAmount.innerText < secondInput){
        alert("you Don't have enough money");
        return
     }
     else{
         alert('Invalid Donation Amount');
         return;
     }

    //step-2 : Donation Amount Calculation
    let secondInner = innerValueById('donation2');
    donationAmount2.innerText = secondInner + secondInput;
    reservedAmount.innerText = reservedAmount.innerText - secondInput;

     //step-3 : History Of Donation
    let history2 = `
        <div class="border py-5 px-3 mt-3">
        <h2 class="font-bold">${secondInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
        <p class="pt-3">Date : ${new Date()}</p>
        </div>
    `
    historyContainer.innerHTML += history2;
    historyContent.classList.add('hidden');
}





// Third Function
function card3ButtonAction(){

    //step-1 : Input Validation
    let thirdInput = inputValueById('third-input');
    if(!isNaN(thirdInput) && thirdInput > 0 && reservedAmount.innerText >= thirdInput){
        myModal.showModal();
    }else if(reservedAmount.innerText < thirdInput){
        alert("you Don't have enough money");
        return;
    }
     else{
         alert('Invalid Donation Amount');
         return;
    }

    //step-2 : Donation Amount Calculation
    let thirdInner = innerValueById('donation3');
    donationAmount3.innerText = thirdInner + thirdInput;
    reservedAmount.innerText = reservedAmount.innerText - thirdInput;
    document.getElementById('third-input').value = "";

    //step-3 : History Of Donation
    let history3 = `
        <div class="border py-5 px-3 mt-3">
        <h2 class="font-bold">${thirdInput}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
        <p class="pt-3">Date : ${new Date()}</p>
        </div>
    `
    historyContainer.innerHTML += history3;
    historyContent.classList.add('hidden');
}




// fourth Function
function donateTabButton(){
    history_tab.classList.remove('bg-primary','text-black');
    history_tab.classList.add('text-gray-600');
    donate_tab.classList.add('bg-primary','text-black');
    donate_tab.classList.remove('border-2','text-gray-600');
    historyContainer.classList.add('hidden');
    cardContainer.classList.remove('hidden');
}




// fifth Function
function historyTabButton(){
    history_tab.classList.add('bg-primary','text-black');
    history_tab.classList.remove('text-gray-600');
    donate_tab.classList.remove('bg-primary');
    donate_tab.classList.add('border-2','text-gray-600');
    cardContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden')
    historyContent.classList.remove('hidden');
}


// sixth Function
function blogNewTabOpen(){
    window.location.href = './blog.html';
}