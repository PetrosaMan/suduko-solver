const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');

let solver = new Solver(); // changed Solver -> Solver()

let puzzleString = '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3'
const testPuzzles = require("../controllers/puzzle-strings").puzzlesAndSolutions;

suite('Unit Tests', () => {
    
    test('#1: Puzzle a valid puzzle of 81 characters', () => {
      const puzzle = testPuzzles[0][0];            
      assert.equal(puzzle.length, 81, 'Puzzle length is equal to 81');        
    });

    test('#2 Puzzle with invalid characters', () => {
      const puzzle = '.7.89.....5....3.4.2..4..1.5689..472...6.....1.7.5.63873.1.2.8.6..47.1..2.9.387.6';     
      const regex = /^[1-9.]{81}$/;  // valid characters are 1-9 and '.'
      assert.isTrue(regex.test(puzzle), 'Puzzle has valid character(s)');
    });

    test('#3 Puzzle with length not equal to 81 characters', () =>{
      let puzzle = testPuzzles[0][0];
      let testPuzzle = puzzle.slice(1);
      assert.equal(puzzle.length, 81, "puzzle length is not equal 81");  
    });


      



});
