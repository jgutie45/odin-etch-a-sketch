// add the container for the grid items to be in
const container = document.querySelector('.container');
const maximumColumn = 16;
const totalGridItems = 256;

function creatingDivs(textNode){
    // adding grid-item class
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    return gridItem;
}

function createOriginalGrid(){
    // adding gridItems
    for(let i = 0; i < totalGridItems; i++){
        container.appendChild(creatingDivs(i));
    }

    // add event listener
    colorChangerEventListener();
}

function colorChangerEventListener(){
    // added event listener to make mouseover to change grid items to black
    const gridItemSpace = document.querySelectorAll('.grid-item');

    gridItemSpace.forEach( item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "#000000";
        });
    });
}

createOriginalGrid(); 

// section of Clear Button
const clearButton = document.querySelector('.clear-button');

let promptSizeOfGrid;

// clear grid etch a sketch 
function removeGrid(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(e => e.remove());  
}  

// create new grid with event listeners
function createGrid(userInput){
    if(userInput === ""){
        container.style.setProperty('grid-template-columns', 'repeat(' + maximumColumn + ',auto)');
        removeGrid();
        createOriginalGrid(); 
    }
    else{
        console.log("User Input: " + userInput); 
        removeGrid();
        let totalSizeOfGrid = userInput * userInput; 
        container.style.setProperty('grid-template-columns', 'repeat(' + userInput + ',auto)');
        for(let i = 0; i < totalSizeOfGrid; i++){
            container.appendChild(creatingDivs(i));
        }
        // add event listener
        colorChangerEventListener();
    }
}

function promptSizeCheck(promptSizeOfGrid){
    while(isNaN(promptSizeOfGrid) || promptSizeOfGrid < 0 || promptSizeOfGrid > 100){
        promptSizeOfGrid = prompt("Enter size of grid you pefer (Max: 100)");
    }
    return promptSizeOfGrid;
}

clearButton.addEventListener('click', () =>
{
    // ask user for input for size of grid
    promptSizeOfGrid = prompt("Enter size of grid you pefer (Max: 100)");
    promptSizeCheck(promptSizeOfGrid);
    createGrid(promptSizeOfGrid);
});




