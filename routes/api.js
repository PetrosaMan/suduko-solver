"use strict";

const SudokuSolver = require("../controllers/sudoku-solver.js");

module.exports = function (app) {
  let solver = new SudokuSolver();

  function stringToSudokuArray(puzzleStr) {
    // convert puzzle string to a two dimension array
    if (puzzleStr.length !== 81) throw new Error('Invalid puzzle string length');    
    let grid = [];
    for (let i = 0; i < puzzleStr.length; i += 9) {
      grid.push(puzzleStr.substring(i, i + 9).split(''));
    }
    return grid;
  }


  app.route("/api/check").post((req, res) => {
    console.log("Check Placement");    
    res.json({ checkPlacement: "checkPlacement" });
  });

  app.route("/api/solve").post((req, res) => {
    //log(req.body.puzzle);
    let puzzleStr = req.body.puzzle;
    const puzzleArr = stringToSudokuArray(puzzleStr)
    console.log(puzzleArr);
    //solver.solve(puzzleArr);
  });
};
