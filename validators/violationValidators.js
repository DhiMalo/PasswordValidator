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
        for (let i = 0; i < string.length-1; i++) {
            const currentCharacter = string[i];
            for (let j = 1; j < string.length; j++) {
                const nextCharacter = string[j];
                if (currentCharacter !== nextCharacter) {
                    return false; 
                } 
            }    
        }
        return true; 
    },
    'characterSequenceDetected' : function(string){
        const characterSequence = 'abcdefghijklmnopqrituvwxyzabcdefghijklmnopqrituvwxyz';
        if (characterSequence.indexOf(string) !== -1 ) { 
            return true;
        }
        return false; 
    }, 
    'digitSequenceDetected' : function(string){
        const digitSequence = '01234567890123456789098765432109';
        if (digitSequence.indexOf(string) !== -1 ) {
            return true;
        }
        return false; 
    }
};

module.exports.violationValidators = violationValidators;
