

class SudokuSolver {

  validate(puzzleString) {   
    const regex = /^[1-9.]{81}$/;
    const validString = regex.test(puzzleString); 
    //console.log('validString: ',validString )   
    return validString;
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleArr) {    
    //this.validate(puzzleArr);
    //console.log("valid-result ", puzzleArr)
  }
}

module.exports = SudokuSolver;





/**
 * Export your functions for testing in Node.
 * Note: The 'try' block is to prevent errors
 * on the client side
 */



