

class SudokuSolver {

  stringToSudokuArray(puzzleString) {
    // convert puzzle string to a two dimension array
    if (puzzleString.length !== 81) throw new Error('Invalid puzzle string length');    
    let grid = [];
    for (let i = 0; i < puzzleString.length; i += 9) {
      grid.push(puzzleString.substring(i, i + 9).split(''));
    }
    return grid;
  }

  validate(puzzleString) {   
    const regex = /^[1-9.]{81}$/;
    const validString = regex.test(puzzleString);       
    return validString; 
    //console.log(validString);   
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {       
    
  }

} // end of class

module.exports = SudokuSolver;





/**
 * Export your functions for testing in Node.
 * Note: The 'try' block is to prevent errors
 * on the client side
 */



