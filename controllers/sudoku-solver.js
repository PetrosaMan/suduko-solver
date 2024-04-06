

class SudokuSolver {

  validate(puzzleString) {   
    const regex = /^[1-9.]{81}$/;
    const validString = regex.test(puzzleString); 
    console.log('validString: ',validString )   
    return validString;
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {    
    this.validate(puzzleString);
    console.log("valid-result ", puzzleString)
  }
}

module.exports = SudokuSolver;

//let textArea = document.getElementById("text-input");
// import {puzzleAndSolutions } from './puzzle-strings';

//document.addEventListener('DOMContentLoaded', function() {
  // Load a simple puzzle into the text area
//  textArea.value = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
//});

//let textBox = document.querySelector('#text-input');

//let textBoxChanged = function() {
//  let textBoxValues = textBox.value.split('');
//  console.log(textBoxValues);
//}



/**
 * Export your functions for testing in Node.
 * Note: The 'try' block is to prevent errors
 * on the client side
 */



