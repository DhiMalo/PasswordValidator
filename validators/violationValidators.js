/*
* violationValidators is a set of validation methods which can invalidate
* a password if the validation condition resolves to true. 
* Each validator function takes a string input, and outputs a boolean 
* For a password be rated as valid, all violationValidators must return false.
*/

const violationValidators = {
    'lengthTooShort' : function(string){
        if (string.length < 6) {
            return true
        };
        return false;
    },
    'lengthTooLong' : function(string){
        if (string.length > 24) {
            return true
        };
        return false;
    },
    'detectedOnlyRepeatedCharacters' : function(string){
        // loop through string characters;
        for (let i = 0; i < string.length-1; i++) {
            const currentCharacter = string[i];
            // loop a second time
            for (let j = 1; j < string.length; j++) {
                const nextCharacter = string[j];
                // if current is NOT equal to last character then return false;
                if (currentCharacter !== nextCharacter) {
                    return false; // Just 1 difference is sufficient.
                } 
            }    
        }
        return true; // NOTE: If I were to write this validator again I might add
        // support for just three repeated characters, say.
    }, // same as above but with digit string (no change if no type system.
    'characterSequenceDetected' : function(string){
        const characterSequence = 'abcdefghijklmnopqrituvwxyzabcdefghijklmnopqrituvwxyz'; // twice to include strings like "xyzabc"
        if (characterSequence.indexOf(string) !== -1 ) { // if string cannot be found in sequence, indexOf returns -1.
            return true;
        }
        return false; 
    }, 
    'digitSequenceDetected' : function(string){
        const digitSequence = '01234567890123456789098765432109'; // descent, ascent
        if (digitSequence.indexOf(string) !== -1 ) { // if string cannot be found in sequence, indexOf returns -1.
            return true;
        }
        return false; 
    }
};

module.exports.violationValidators = violationValidators;