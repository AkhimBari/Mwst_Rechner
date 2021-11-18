let aufschlag = document.getElementById("aufschlag");
let abziehen = document.getElementById("abziehen");
let nineTeen = document.getElementById("nineTeen");
let seven = document.getElementById("seven");
let inputNumber = document.getElementById("inputNumber");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let switcher = document.getElementById("switcher");
let switcher2 = document.getElementById("switcher2");



 press = () => {
    if (aufschlag.checked && nineTeen.checked) {
         let endResult = inputNumber.value * 1.19;
        result2.innerHTML = endResult.toFixed(2) + " €";
        let difference1 = endResult - inputNumber.value;
        result1.innerHTML = difference1.toFixed(2) + " €";
    } else if (aufschlag.checked && seven.checked) {
        let endResult1 = inputNumber.value * 1.07;
        result2.innerHTML = endResult1.toFixed(2) + " €";
        let difference2 = endResult1 - inputNumber.value;
        result1.innerHTML = difference2.toFixed(2) + " €";
    } else if (abziehen.checked && nineTeen.checked) {
      let endresult2 = inputNumber.value /1.19;
        result2.innerHTML = endresult2.toFixed(2) + " €";
        let difference3 = inputNumber.value - endresult2;
        result1.innerHTML = difference3.toFixed(2) + " €";
    }  else if (abziehen.checked && seven.checked) {
        let endresult3 = inputNumber.value/1.07;
        result2.innerHTML = endresult3.toFixed(2) + " €";
        let difference3 = inputNumber.value - endresult3;
        result1.innerHTML = difference3.toFixed(2) + " €";
    }
}

nettoClick = () => {
    switcher.innerHTML = "Nettobetrag";
    switcher2.innerHTML = "Bruttobetrag(Preis inklusive Mehrwertsteuer) in Euro";
}

bruttoClick = () => {
    switcher.innerHTML = "Bruttobetrag (Endpreis)";
    switcher2.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro*";
    
}




