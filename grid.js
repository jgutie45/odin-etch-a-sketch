// add the container for the grid items to be in
const container = document.querySelector('.container');
const maximumColumn = 16;
const totalGridItems = 256;

function creatingDivs(textNode){
    // adding grid-item class
    const gridItem = document.createElement('div');
    let text = document.createTextNode(textNode);
    gridItem.appendChild(text);
    gridItem.classList.add('grid-item');
    return gridItem;
}

// adding gridItems
for(let i = 0; i < totalGridItems; i++){
    container.appendChild(creatingDivs(i));
}




