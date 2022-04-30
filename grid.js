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

// adding gridItems
for(let i = 0; i < totalGridItems; i++){
    container.appendChild(creatingDivs(i));
}

// added event listener to make mouseover
const gridItemSpace = document.querySelectorAll('.grid-item');

gridItemSpace.forEach( item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "#000000";
    });
});




