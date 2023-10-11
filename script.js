// Declare global variables
let numRows = 2;
let numCols = 3;
let colorSelected; 
let grid = document.getElementById('grid');

// Add a row
function addR() {
    //Maxrows catch
    if (numRows >= 10)
    {
        alert("That's a few too many rows, innit?");
        return;
    }

    //Adding a row
    row = grid.insertRow(-1);
    var cell;
    for ( x = 0; x < numCols; x++)
    {
         cell = row.insertCell(0);
         cell.innerHTML = "";
         cell.onclick = function() { alert('Clicked a table cell'); }; 
         //above could also be done with .setAttribute("onclick","alert('');"); -- but later we will use a diff function
    }
    numRows++;
}

// Add a column
function addC() {
        //Maxcols catch
        if (numCols >= 10)
        {
            alert("That's a few too many columns, innit?");
            return;
        }
    
        //Specific Case
        if (numCols == 0) {
        row = grid.insertRow(-1);
        var cell;
        cell = row.insertCell(0);
        cell.innerHTML = "";
        numRows++;
        numCols++;
    }

        //Adding a column
        var cell;
        for (x = 0; x < numRows; x++)
        {
            cell = grid.rows[x].insertCell(-1);
            cell.innerHTML = "";
            cell.onclick = function() { alert('Clicked a table cell'); };
        }
        numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}