"use strict";

const SudokuSolver = require("../controllers/sudoku-solver.js");

module.exports = function (app) {
  let solver = new SudokuSolver();

  app.route("/api/check").post((req, res) => {    
    const { puzzle, coordinate, value } = req.body;
    if (!puzzle || !coordinate || !value) {
         res.json({ error: "Required field(s) missing"});
         return;
    }    
     const row = coordinate.split("")[0];
     const column = coordinate.split("")[1];

     if ( coordinate.length !== 2 || !/^[a-i]$/i.test(row) || !/^[1-9]$/.test(column)) {
        console.log("Invalid coordinate");
        res.json({ error: "Invalid coordinate"});
        return;
     }

      if (!/^[1-9]$/.test(value)) {
        res.json({ error: "Invalid value"});
        return;
     } 
     
     if (puzzle.length != 81) {
         res.json({ error: "Expected puzzle to be 81 characters long" });
         return;  
     }

     if (/[^0-9.]/g.test(puzzle)) {
        res.json({ error: "Invalid characters in puzzle" });
        return;
     }

     let validColumn = solver.checkColPlacement(puzzle, row, column, value);
     let validRegion = solver.checkRegionPlacement(puzzle, row, column, value);
     let validRow = solver.checkRowPlacement(puzzle, row, column, value); 
     let conflicts = [];
     console.log(validColumn, validRegion,validRow);
     if( validColumn && validRegion && validRow ) {
         res.json({ valid: true });
     } else { 
         if (!validRow){
          conflicts.push("row");
     } 
 
      if( !validColumn ) {
        conflicts.push("column");
      } 
 
      if( !validRegion) {
         conflicts.push("region");
      }
 
      res.json({ valid: false, conflicts: conflicts }); 
     }
  }); // route "/api/check"

  app.route("/api/solve").post((req, res) => {
    const { puzzle } = req.body;
    if (!puzzle) {
      res.json({ error: "Required field missing" });
      return;
    }
    if (puzzle.length != 81) {
      res.json({ error: "Expected puzzle to be 81 characters long" });
      return;
    }    
    if (/[^1-9.]/g.test(puzzle)) {
      res.json({ error: "Invalid characters in puzzle" })
      return; 
    }
    let solvedString = solver.solve(puzzle);
    if(!solvedString) {
        res.json({ error: "Puzzle cannot be solved" });
    } else {
        res.json({ solution: solvedString});
    } 
  }); // /api/solve
}; // end of function module.exports 
