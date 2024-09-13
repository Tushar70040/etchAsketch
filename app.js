let container = document.querySelector("#container");
let reset = document.querySelector("#reset");
let gridButton = document.querySelector("#grid");


function grid(size){
    container.innerHTML = "";//for clean the container from the prevoious code
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for(let i = 0;i<size*size;i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor = "black"
        });
        container.appendChild(square);
        
    }

}
function setGridSize() {
    let size = prompt("Enter the size from 1 to 100");
    if(size>0&&size<100){
    grid(size);
    }
    else{
        alert("enter the valid number");
        size = prompt("Enter the size from 1 to 100");
    }
}

function resetGrid() {
    let squares = document.querySelectorAll(".square"); 
    squares.forEach(square => {
        square.style.backgroundColor = " rgb(243, 160, 160)";
    });
}

gridButton.addEventListener("click", setGridSize);
reset.addEventListener("click",resetGrid);

grid(16);//initial size

