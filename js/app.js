function getPin()
{
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 5)
    {
        return pin;
    }
    else
    {
        return getPin();
    }
}

function generatePin()
{
    const random = Math.round(Math.random()*100000);
    return random;

}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('dispaly-pin');
    displayPinField.value = pin;

})

document.getElementById('calculator').addEventListener('click', function(event){
   
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    
    
    if(isNaN(number))
    {
        if(number === 'C')
        {
            typedNumberField.value = '';
        }
        else if(number === '<')
        {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }


    }
    else
    {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }

})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('dispaly-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-correct');
    const pinUnsuccessMessage = document.getElementById('pin-incorrect');

    const actionLeft3Message = document.getElementById('action-left-3');

    const left3Field = document.getElementById('left-3');
    const left3String = left3Field.innerText;
    let left3Number = parseInt(left3String); 

    if(typedNumber === currentPin)
    {
        pinSuccessMessage.style.display = 'block';
        pinUnsuccessMessage.style.display = 'none';

        actionLeft3Message.style.display = 'none';
        
    }
    else{
        pinUnsuccessMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';

        actionLeft3Message.style.display = 'block';

        left3Number = left3Number - 1;
        
        if(left3Number === 0)
        {
            actionLeft3Message.innerText = 'You are lose !';
        }
        else
        {
            left3Field.innerText = left3Number;
        }
    }


})