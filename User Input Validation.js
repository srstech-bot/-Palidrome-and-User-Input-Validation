function checkForPalindrome()
 {
    //Calls for input field 
    let inputField = document.getElementById("palindromeField");
    //Link to results after condition checks are made
    let results = document.getElementById("palindromeResults");
    //Sets parameters for user input
    let inputValue = inputField.value;
    //Sets parameter for user text input to be counted length
    let stringLength = inputValue.length;
    //Condition if text input is greater than 0
    if(stringLength > 0)
    {   
        //Divides string length by 2 after round down.3.5 wound round down to 3 for example
        let iterationCount = Math.floor(stringLength/2);
        //Subtract 1 from string length of the last character entered starting from 0 not 1
        let lastCharacterIndex = inputValue.length -1;
        //True declaration precursor for palidrome boolean check
        let palindromeCheckResult = true;

        //Allowed to continue palindrome check
       for(let i = 0; i <iterationCount; i++)
        {       //Checks if iteration value [0 to start] is not equal at last character indexed minus i. i increments by 1 each succeeding iteration. Last character indexed decrements by 1 each iteration.
            if (inputValue[i] !== inputValue[lastCharacterIndex - i])
            {
                    console.log("NOT A PALINDROME!");
                    //Displays every time loop condition is not met via elements link ById
                    results.innerHTML = "NOT A PALINDROME!"
                    palindromeCheckResult = false;
                    //for if loop stops and passes to next condition 
                    break;
            }
        }//Default result if false loop breaks, true result is only boolean alternate.
        if (palindromeCheckResult)
        {
            console.log("This is a palindrome!");
            results.innerHTML = "This is a palindrome! Great job, can you find another?"
        }
    }
 }
 function userInfoValidation()
 {
    console.log("Checking user info");
    //specifies id for first name entry label
    let firstNameField = document.getElementById("firstNameField");
    //same for last name
    let lastNameFieldField = document.getElementById("lastNameField");
    //designates an id for the zip code element
    let zipField =document.getElementById("zipField");
    //id for all elements and conditions contained within results
    let results = document.getElementById("userInfoResults");

    results.innerHTML = "";
    //defines that the first name value will be data entered into its designated field
    let firstNameValue = firstNameField.value;
    //same for last name
    let lastNameValue = lastNameField.value;
    //same designation as first and last name for zip field and value
    let zipValue = zipField.value;

    //concatenation of first and last name values
    let firstLastName = firstNameValue + " " + lastNameValue;

    console.log(firstLastName);
    //condition set limit for first and last name at 20 characters
    if (firstLastName.length > 20)
    {   //warning message for the user if the character count is not correct
        results.innerHTML = "Slow down buddy! Too many characters there! Keep it under 20!"
        //stops iterations when if condition is met
        return;
    }
    //regular expression sets zip fields' number of digits at 5
    let zipRegEx = /^\d{5}$/

    if (!zipRegEx.test(zipValue))
    {   //warning to user if zip field condition is not correct
        results.innerHTML = "Moving too fast again! Wrongly formatted there pal! Keep it to 5, no more no less!"

         return;
    }
    //success message for the user when the correct info is entered without violating character or digit rules
    results.innerHTML = "You have reach the corrrect number!";
    console.log("input validated");
 }