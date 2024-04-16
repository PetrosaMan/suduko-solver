const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const SudokuSolver = require('../controllers/sudoku-solver.js');
let solver = new SudokuSolver(); 

let validPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.';
let completePuzzle = '135762984946381257728459613694517832812936745357824196473298561581673429269145378';
//let solvedPuzzle = solver.solve(validPuzzle);
suite('Unit Tests', function() {
    suite('solver tests', function(){
      test('#1: Logic handles a valid puzzle string 81 chars', function(done) {
      let complete = '135762984946381257728459613694517832812936745357824196473298561581673429269145378'  
      assert.equal(solver.solve(validPuzzle), complete)
      done()           
      }); 

      test('#2 Logic handles a puzzle string with invalid char not 1-9 or .', function(done) {        
        let invalidPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.';
        assert.equal(solver.solve(invalidPuzzle).false)
        done();
      });

      test('#3 Logic handles a puzzle not equal to 81 characters in length', (done) =>{
        let invalidPuzzle = '5...2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.';
        console.log(invalidPuzzle.length);
        assert.equal(solver.solve(invalidPuzzle),false);
        done(); 
      });

      test('#4 Logic handles a valid row placement', function(done) {
        let validRow = solver.checkRowPlacement(validPuzzle, 'A', '2', '7');
        console.log("valid row: ", validRow);
        assert.isTrue(validRow, " row placement is not valid");        
        done();
      });

      test('#5 Logic handles an invalid row placement', function(done) {
        let validRow = solver.checkRowPlacement(validPuzzle, 'A', '2', '7');
        assert.isTrue(validRow, " row placement is not valid");
        done();
      });

      test('#6 Logic handles a valid column placement', function(done) {

        let validCol = solver.checkColPlacement(validPuzzle, 'A', '2', '3');
        assert.isTrue(validCol, "column placement is valid");
        done();
      });

      test('#7 Logic handles an invalid column placement', function(done) {
        let validCol = solver.checkColPlacement(validPuzzle, 'A', '2', '3');
        assert.isTrue(validCol, "column placement is not valid");
        done();
      });      

    });     

  });
