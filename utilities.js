/*
 * Describe requirements to the user 
 */
module.exports.ruleSetDescription = `\n Your password should 
    * be 6-24 characters long
    * should not consiste of repeating characters or keyboard sequences
    * should be free of peroper names or common words (eg. password, and other common 
    or easily guessable patterns`;

/*
 * Map strength score to a comment for the user 
 */
module.exports.strengthMap = {
    '0' : 'Invalid❌',
    '1' : 'Weak⚠️',
    '2' : 'Strong✅' 
};
