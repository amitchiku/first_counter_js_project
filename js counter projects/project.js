let countvalue = document.querySelector("#count");
// import from the html content 

function increment() {
    // create a increment function
    let value = parseInt(countvalue.innerText);
    // convert the string value to int value by parseInt method and get the value which is between the html content import by innertext method
    value = value + 1;
    // after click the value increase by one
    countvalue.innerText = value;
    // move to the origin value which is import from the html content
}

function decrement() {
    // create a decrement function
    let value = parseInt(countvalue.innerText);
      // convert the string value to int value by parseInt method and get the value which is between the html content import by innertext method
    value = value - 1;
    // after click the value is decrease by one
    countvalue.innerText = value;
    // move again to the original value
};


