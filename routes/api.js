"use strict";

const SudokuSolver = require("../controllers/sudoku-solver.js");

module.exports = function (app) {
  let solver = new SudokuSolver();

  app.route("/api/check").post((req, res) => {
    console.log("Check Placement");
    res.json({ checkPlacement: "checkPlacement" });

  }); // app.route

  app.route("/api/solve").post((req, res) => {
    const puzzleString = req.body.puzzle;
    if (!puzzleString) {
      res.json({ error: "Required field missing" });
    } else if (puzzleString.length > 81 || puzzleString.length < 81) {
      res.json({ error: "Expected puzzle to be 81 characters long" });
    } else if (!solver.validate(puzzleString)) {
      res.json({ error: "Invalid characters in puzzle" });
    } // end if-else 
    console.log(puzzleString.length);

  }); // app.route


};  // module.exports
