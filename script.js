// Declare global variables
let numRows = 0;
let numCols = 0;
let maxRows = 10;
let maxCols = 10;
let colorSelected;
let colorConfirmation = true;
let grid = document.getElementById('grid');

// Add a row
function addR() {
    //Maxrows catch
    if (numRows >= maxRows) {
        alert("That's a few too many rows, innit?");
        return;
    }

    //If we start with an empty table
    if (numRows == 0) {
        row = grid.insertRow(-1);
        var cell;
        cell = row.insertCell(0);
        cell.innerHTML = "";
        numRows++;
        numCols++;
        return;
    }

    //Adding a row
    row = grid.insertRow(-1);
    var cell;
    for (x = 0; x < numCols; x++) {
        cell = row.insertCell(0);
        cell.innerHTML = "";
        //cell.onclick = function() { alert('Clicked a table cell'); }; 
        //above could also be done with .setAttribute("onclick","alert('');"); -- but later we will use a diff function
    }
    numRows++;
}

// Add a column
function addC() {
    //Maxcols catch
    if (numCols >= maxCols) {
        alert("That's a few too many columns, innit?");
        return;
    }

    //If we start with an empty table
    if (numCols == 0) {
        row = grid.insertRow(-1);
        var cell;
        cell = row.insertCell(0);
        cell.innerHTML = "";
        numRows++;
        numCols++;
        return;
    }

    //Adding a column
    var cell;
    for (x = 0; x < numRows; x++) {
        cell = grid.rows[x].insertCell(-1);
        cell.innerHTML = "";
        //cell.onclick = function() { alert('Clicked a table cell'); };
    }
    numCols++;
}

// Remove a row
function removeR() {
    if (numRows >= 1) {
        grid.deleteRow(-1);
        numRows--;
        if (numRows == 0) //If nothing left in table, resets numCols
        {
            while (numCols >= 1) {
                removeC();
            }
        }
    }
    else {
        alert('There are no rows left to remove.');
    }
}

// Remove a column
function removeC() {
    if (numCols >= 1) {
        for (x = 0; x < numRows; x++) {
            grid.rows[x].deleteCell(-1);
        }
        numCols--;
        if (numCols == 0) //If nothing left in table, resets numRows
        {
            while (numRows >= 1) {
                removeR();
            }
        }
    } else {
        alert("There are no columns left to remove");
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

function colorOne(e) {
    if (e.target.nodeName.toLowerCase() == "td") {
        if (colorSelected == null || colorSelected == "SELECT") {
            alert("Please select a color.");
            return;
        }
        if (colorConfirmation) {
            if (confirm("Would you like to color this cell " + colorSelected + "?")) {
                e.target.style.backgroundColor = colorSelected;
            }
        }
        else {
            e.target.style.backgroundColor = colorSelected;
        }

    }
}

grid.addEventListener("click", colorOne)

function toggleColorConfirmation() {
    var toggle = document.getElementById('toggle');
    if (toggle.checked) {
        colorConfirmation = true;
    } else {
        colorConfirmation = false;
    }
}


// Fill all uncolored cells
function fillU() {
    if (colorSelected == null || colorSelected == "SELECT") {
        alert("Please select a color.");
        return;
    }
    if (colorConfirmation) {
        if (!confirm("Would you like to color all uncolored cells " + colorSelected + "?")) { return; }
    }
    var currentcell;
    for (var rownum = 0; rownum < numRows; rownum++) {
        for (var colnum = 0; colnum < numCols; colnum++) {
            currentcell = grid.rows[rownum].cells[colnum];
            if (currentcell.style.backgroundColor == '') {
                currentcell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll() {
    if (colorSelected == null || colorSelected == "SELECT") {
        alert("Please select a color.");
        return;
    }
    if (colorConfirmation) {
        if (!confirm("Would you like to color all cells " + colorSelected + "?")) { return; }
    }
    var currentcell;
    for (var rownum = 0; rownum < numRows; rownum++) {
        for (var colnum = 0; colnum < numCols; colnum++) {
            currentcell = grid.rows[rownum].cells[colnum];
            currentcell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll() {
    var currentcell;
    for (var rownum = 0; rownum < numRows; rownum++) {
        for (var colnum = 0; colnum < numCols; colnum++) {
            currentcell = grid.rows[rownum].cells[colnum];
            currentcell.style.backgroundColor = '';
        }
    }
}