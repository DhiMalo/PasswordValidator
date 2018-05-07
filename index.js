/*
 * Import dependencies 
 */
const readline = require('readline');
const violationValidators = require('./validators/violationValidators').violationValidators;
const complexityValidators = require('./validators/complexityValidators').complexityValidators;
const strengthMap = require('./utilities').strengthMap;


/*
* hasValidityViolations is a method to determine whether any violations were
* detected by a violationValidator. If any violation is detected, returns true.
* {input} string
* {output} boolean
*/
const hasValidityViolations = function(string) {
    let validators = Object.keys(violationValidators);
    for (let i = 0; i < validators.length;  i++) {
        if (violationValidators[validators[i]](string) === true) {
            console.log('\n This password is invalid because of the property', validators[i]);
      return true; 
    }
};
    return false;  
};

/*
* isSufficientlyComplex is a method to determine whether the user's password
* satisfies all complexity validation methods. If all complexityValidation 
* methods return true (see ./validators), this also returns true.
* {input} string
* {output} boolean
*/
const isSufficientlyComplex = function(string) {
    let validators = Object.keys(complexityValidators);
    for (let i = 0; i < validators.length;  i++) {
        if (complexityValidators[validators[i]](string) === false) {
            console.log('This password is insufficiently complex because of', validators[i]);
        return false; 
    }
  };
    return true;  
};

/*
* ratePassword is the heart of this tool. Exportable through the node
* module system for usage in any other file or folder in a project.
* In this case will only be used in the readline utility for console usage.
* {input} string
* {output} number
*/
const ratePassword = (string) => {
    if (hasValidityViolations(string) === true) {
        return 0;
    };
    if (hasValidityViolations(string) === false && isSufficientlyComplex(string) === false) {
        return 1;
    }
    if (hasValidityViolations(string) === false &&
     isSufficientlyComplex(string) === true) {
        return 2;
    }
}; // Consider using an Enum for this.


/*
 * The ReadLine module makes this module a command line utility
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * requestNewPassword is a wrapper function for the ReadLine implementation of ratePassword.
 * It is called recursively until the user has completed the interaction satisfied (see line 86).
 */
const requestNewPassword = function () {rl.question('\nPlease type your new password : ', (answer) => {
    let strengthScore = ratePassword(answer);
    let strength = strengthMap[strengthScore];
    console.log(`\nYour submitted password ${answer} has a Strength Score of ${strengthScore}`); // remove this on completion
    console.log(`This means your password is ${strength}.\n`);
    
    rl.question('Do you want to try again (y(es)/n(o))? ', (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            requestNewPassword();
        } else if (answer.match(/^n(o)?$/i)) {
        rl.close();
        };
    });
  })
};

requestNewPassword();

module.exports.ratePassword = ratePassword;