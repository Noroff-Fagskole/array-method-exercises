/*
Exercise 1: Find the index:

You are going to use '.findIndex' array method to find
the index of the value we want.

You are given an array of values ('values'),

Use the '.findIndex' array to find the value of 5 and
set the result of this to the supplied 'foundIndex' variable.
*/

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the value of 5:
const foundIndex = values.find((currentValue, index) => {
    //console.log('current Index: ', index);
    if (currentValue === 5) {
        return true;
    }
}) 

console.log('Found Value: ', foundIndex);
    // Returns: 
    //current Index:  0
    //current Index:  1
    //current Index:  2
    //current Index:  3
    //current Index:  4
    //current Index:  5
    //Found Value:  5


    