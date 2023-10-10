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
    if (numRows >= 1)
    {
        grid.deleteRow(-1);
        numRows--;
    }
    else
    {
        alert('There are no rows left to remove.');
    }
}

// Remove a column
function removeC() {
    if (numCols >= 1)
    {
        for (x = 0; x < numRows; x++)
        {
            grid.rows[x].deleteCell(-1);
        }
        numCols--;
    } else
    {
        alert("There are no columns left to remove"); 
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

function colorOne(e){
    if (e.target.nodeName.toLowerCase() == "td")
    {
        if (colorSelected == null || colorSelected == "SELECT")
        {
            alert("Please select a color.");
            return;
        }
        if (confirm("Would you like to color this cell " + colorSelected + "?"))
        {
            e.target.style.backgroundColor = colorSelected;
        }
    }
}

grid.addEventListener("click", colorOne)


// Fill all uncolored cells
function fillU(){
    if (colorSelected == null || colorSelected == "SELECT")
    {
        alert("Please select a color.");
        return;
    }
    var currentcell;
    for (var rownum = 0; rownum < numRows; rownum++) {
        for(var colnum = 0; colnum < numCols; colnum++) {
            currentcell =  grid.rows[rownum].cells[colnum];
            if (currentcell.style.backgroundColor == '') {
                currentcell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    if (colorSelected == null || colorSelected == "SELECT")
    {
        alert("Please select a color.");
        return;
    }
    var currentcell;
    for (var rownum = 0; rownum < numRows; rownum++) {
        for(var colnum = 0; colnum < numCols; colnum++) {
            currentcell =  grid.rows[rownum].cells[colnum];
            currentcell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    var currentcell;
    for (var rownum = 0; rownum < numRows; rownum++) {
        for(var colnum = 0; colnum < numCols; colnum++) {
            currentcell =  grid.rows[rownum].cells[colnum];
            currentcell.style.backgroundColor = '';
        }
    }
}