function buttonClickedById(id){
    let allButtons = document.getElementById(id);
    return allButtons;
}

function inputValueById(id){
    allInputValue = document.getElementById(id).value;
    let inputValuesNum = Number(allInputValue);
    return inputValuesNum;
}

function innerValueById(id){
    allInnerValues = document.getElementById(id).innerText;
    let innerValueNum = Number(allInnerValues);
    return innerValueNum;
}