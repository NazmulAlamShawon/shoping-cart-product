function updateProductNumber(product, price, isIncreasing) {
    const CountInput = document.getElementById(product + '-number');
    let productNumber = CountInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    CountInput.value = productNumber;

    // set update total
    const productTotal = document.getElementById(product + '-total');
          productTotal.innerText = productNumber * price;
          
    //  get calculate function
    calculateTotal();
}
      // get input value            
function getInputValue(product) {
    const CountInput = document.getElementById(product + '-number');
    const productNumber = parseInt(CountInput.value);
    return productNumber;
}

//total balance with tax formula
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const readmeTotal = getInputValue('redme') * 590;
   
    const subTotal = phoneTotal + caseTotal + readmeTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
 
   
}

// product handle start

// readme 9 handle 
document.getElementById('redme-plus').addEventListener('click',function(){
    updateProductNumber('redme', 590, true);
 })
 document.getElementById('redme-minus').addEventListener('click',function(){
    updateProductNumber('redme', 590, true);
  })


// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

// product handle end