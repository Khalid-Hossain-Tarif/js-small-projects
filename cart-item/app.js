
function cartQtyPlus() {
    let counter = 1;

    return function () {
        counter += 1;
        return counter;
    }
};

// function cartQtyMinus() {
//     let counter = 1;

//     return function () {
//         counter -= 1;
//         return counter;
//     }
    
// };

function cartQtyMinus() {
    let minusCounter = cartQtyPlus();

    return function () {
        minusCounter -= 1;
        return minusCounter;
    }
    
};

const minusQtyNumber = cartQtyMinus();
const plusQtyNumber = cartQtyPlus();


function minusFunction(){
    document.getElementById("qty").innerHTML = minusQtyNumber();
}

function plusFunction(){
    document.getElementById("qty").innerHTML = plusQtyNumber();
}