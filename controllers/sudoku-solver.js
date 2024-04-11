class SudokuSolver {
  letterToNumber(row) {
    let rowNum;  
      switch (row.toUpperCase()) {
         case "A": 
           rowNum = 1;
           break;
         case "B":
           rowNum = 2;
           break;
         case "C": 
           rowNum = 3;
           break;
         case "D":
           rowNum = 4;
           break;
         case "E": 
           rowNum =5;
           break;
         case "F":
           rowNum = 6;
           break;
          case "G": 
           rowNum = 7;
           break;
         case "H":
           rowNum = 8;
           break;
         case "I":
           rowNum = 9;
           break;
         default:
           return "Invalid letterToNumber";
      }
      return rowNum;
  }

  checkRowPlacement(puzzle, row, column, value) {
    let grid = this.transform(puzzle);
    row = this.letterToNumber(row);    
    if (grid[row - 1][column - 1] == value) 
        return true; // ok to place same value in square
    if( grid[row - 1][column - 1] !== 0) {
       return false;
    }
    for ( let i = 0; i < 9; i++ ) {
        if( grid[row - 1][i] == value ) {
           return false;
        }
    }
    return true;
  }

  checkColPlacement(puzzle, row, column, value) {
    let grid = this.transform(puzzle);
    row = this.letterToNumber(row);
    if( grid[row - 1][column - 1] == value)
      return true;  // ok to place same value
    if( grid[row - 1][column - 1] !== 0) {
       return false;
    }
    for ( let i = 0; i < 9; i++ ) {
        if( grid[i][column - 1] == value ) {
           return false;
        }
    }
    return true;
  }

  checkRegionPlacement(puzzle, row, column, value) {
    let grid = this.transform(puzzle);
    row = this.letterToNumber(row); 
    if(grid[row-1][column-1] == value)
        return true;   // ok if value is same 
    if( grid[row - 1][column - 1] !== 0) {
       return false;
    }
    let startRow = row - (row % 3),
     startColumn = column - ( column % 3);
    for(let i = 0; i < 3; i++) 
        for(let j = 0; j < 3; j++)
            if( grid[ i + startRow ][ j + startColumn ] == value) {
                  return false;
            }      
     return true;  
  }

  solveSudoku(grid, row, col) {
    const N = 9; // 9 * 9 sudoku grid
    if (row == N - 1 && col == N) return true;

    if (col == N) {
      row++;
      col = 0;
    }

    if (grid[row][col] != 0) return this.solveSudoku(grid, row, col + 1);

    for (let num = 1; num < 10; num++) {
      if (this.isSafe(grid, row, col, num)) {
        grid[row][col] = num;

        if (this.solveSudoku(grid, row, col + 1)) return true;
      }
      grid[row][col] = 0;
    }
    return false;
  }

  isSafe(grid, row, col, num) {
    for (let x = 0; x <= 8; x++) if (grid[row][x] == num) return false;

    for (let x = 0; x <= 8; x++) if (grid[x][col] == num) return false;

    let startRow = row - (row % 3),
      startCol = col - (col % 3);

    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (grid[i + startRow][j + startCol] == num) return false;
    return true;
  }

  transform(puzzleString) {
    // convert puzzleString to a two dimension array
    let grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    let row = -1;
    let col = 0;
    for (let i = 0; i < puzzleString.length; i++) {
        if (i%9 == 0) {
          row++;
        }
        if (col % 9 == 0) {
          col = 0;
        }
    
        grid[row][col] = puzzleString[i] === "." ? 0 : +puzzleString[i];
        col++;
    } 
    return grid;
  }

  transformBack(grid) {
    //change array back to a string
    //console.log("grid: ", grid);    
    return grid.flat().join("");
  }

  solve(puzzleString) {
    let grid = this.transform(puzzleString);
    let solved = this.solveSudoku(grid, 0, 0);
    if (!solved) {
      return false;
    }    
    let solvedString = this.transformBack(grid);    
    return solvedString;
  }
} // end of class

module.exports = SudokuSolver;


