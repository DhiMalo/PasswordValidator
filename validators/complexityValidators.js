// Declare dependencies
const commonWordsList = require('../collections/commonWordsList').commonWordsList;
const properNamesList = require('../collections/mostPopularProperNames').mostPopularProperNames;
const worstPasswords = require('../collections/worstPasswords2017').worstPasswords2017;
const commonPasswords = require('../collections/mostCommonPasswords2016').mostCommonPasswords2016;

/*
* complexityValidators is a set of methods to validate whether the user's
* password has sufficient complexity. 
* Each validator function takes a string input, and outputs a boolean 
* To satisfy overall sufficient complexity, all validators must return true.
*/
const complexityValidators = {
    'absentOfKeyboardPatterns' : function(string){
        const keyboardSequenceLR = 'qwertyuiopasdfghjklzxcvbnm'; 
        const keyboardSequenceRL = 'mpoiuytrewqlkjhgfdsamnbvcxz';
        const keyboardSequence = keyboardSequenceLR.concat(keyboardSequenceRL);
        if (keyboardSequence.indexOf(string) !== -1 ) { 
            console.log(`${keyboardSequence} contains ${string}`)
            return false;
        } 
        return true;
    },
    'absentOfCommonWords' : function(string){
        const commonWords = commonWordsList; 
        for (let i = 0; i < commonWords.length; i++) {
            if (commonWords[i] === string) {
                console.log(`\n${string} is in the list commonWords.`);
                return false;
            }; 
        }
        return true;
    },
    'absentOfProperNames' : function(string){
        const properNames = properNamesList; 
        for (let i = 0; i < properNames.length; i++) {
            if (properNames[i] === string) {
                console.log(`\n${string} is in the list properNames.`);
                return false;
            }; 
        }
        return true;
    },
    'absentOfGuessableWords' : function(string){
        // combine commonPasswords and worstPasswords lists into guessableWords
        const guessableWords = worstPasswords.concat(commonPasswords);
        for (let i = 0; i < guessableWords.length; i++) {
            if (guessableWords[i] === string) {
                console.log(`\n${string} is in the list guessableWords.`);
                return false;
            }; 
        }
        return true;
    }
};
    
module.exports.complexityValidators = complexityValidators;
