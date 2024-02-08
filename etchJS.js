const mainSelect = document.querySelector('#mainSection');
let gridButton = document.querySelector('.setLimit');

gridButton.addEventListener('click', () => {
    
    
    while (true) {

        let gridNum = +prompt('Enter a number to set both the width and height of the square grid');
        
        if (gridNum >= 100 || gridNum === null) {
            alert('Please enter a number less than 100.')
            break;
        }

        else {
        squareGridDiv(gridNum);
        break;
        }
    
    };
});

// Create a grid | Each div of ID 'gridHousing' is a row | each div of ID 'gridSquares' is a section of the grid.
let squareGridDiv = function (num) {
    
    // Number of divs you want to create
    let numberOfDivs = num;

    let gridHouse = document.querySelectorAll('[class*="gridHousing"]');
    
    gridHouse.forEach(house => {
        console.log(`I am removing a .gridHousing div --> ${house}`)
        house.remove();
    });
    
  

    for (let i = 0; i < numberOfDivs; i++)  {
        
        let newDiv = document.createElement('div');
        newDiv.className = (`gridHousing${[i+1]}`);
        mainSelect.appendChild(newDiv);

        for (let j = 0; j < numberOfDivs; j++) {
            
            let currentGridHouse = document.querySelector(`.gridHousing${i+1}`);
            let div = document.createElement('div');

            div.className = `gridSquare`;
            
            div.addEventListener('mouseover', () => {
                div.className = "hovered"
                const randomColour = '#' + Math.floor(Math.random()*16777215).toString(16);
                div.setAttribute('style', `background-color:${randomColour}`)
            });
            currentGridHouse.appendChild(div);
        
        }
    }
}


// Select 'Clear Grid' button
let clearGridButton = document.querySelector('.wipeGrid');
// Select all grid squares that have been hovered


clearGridButton.addEventListener('click', () => {
    let selectHovered = document.querySelectorAll('[class*="hovered"]');
    clearGrid(selectHovered);
});


function clearGrid (element) {
        element.forEach(square => {
            square.className = 'gridSquare';
            square.setAttribute('style', `background-color:#FFFFFF`)
        });
    };



