
let n=12;
let table = document.querySelector("#table");

window.addEventListener("load",()=>{

    initialiseGrid(n);


    table.addEventListener("mouseover",(e)=>{
       let [cRi,cCi]  =   e.target.dataset.index.split("-");

       console.log(cRi,cCi);

        let boxes = document.querySelectorAll(".box");
   
        //removing the yellow class on all the cells 
        for(let i=0;i<boxes.length;i++){
            boxes[i].classList.remove("yellow");
       }

       //compute what all needs to be colored 

       let cellsToBeMarkedYellow = {};

       traverseTopLeft(cRi,cCi,cellsToBeMarkedYellow);
       traverseTopRight(cRi,cCi,cellsToBeMarkedYellow);
       traverseBottomLeft(cRi,cCi,cellsToBeMarkedYellow);
       traverseBottomRight(cRi,cCi,cellsToBeMarkedYellow);

       console.log(cellsToBeMarkedYellow);
       
       

       for(let i=0;i<boxes.length;i++){

        let cDataIndex= boxes[i].dataset.index;

        if(cellsToBeMarkedYellow[cDataIndex]===true){

            boxes[i].classList.add("yellow");

        }

       }
    })

        table.addEventListener("mouseleave",(e)=>{

            let boxes = document.querySelectorAll(".box");

            //removing the yellow class on all the cells 
            for(let i=0;i<boxes.length;i++){
                boxes[i].classList.remove("yellow");
        }
            
        })


})


function traverseTopLeft(cRi,cCi,cellsToBeMarkedYellow){

    while(cCi>=0 && cRi>=0){

        let dataIndex = `${cRi}-${cCi}`;
        
        cellsToBeMarkedYellow[dataIndex]=true;

        cRi--;
        cCi--;
    }
}


function traverseTopRight(cRi,cCi,cellsToBeMarkedYellow){

    while(cCi<n && cRi>=0){

        let dataIndex = `${cRi}-${cCi}`;
        
        cellsToBeMarkedYellow[dataIndex]=true;

        cRi--;
        cCi++;
    }
}


function traverseBottomLeft(cRi,cCi,cellsToBeMarkedYellow){

    while(cCi>=0 && cRi<n){

        let dataIndex = `${cRi}-${cCi}`;
        
        cellsToBeMarkedYellow[dataIndex]=true;

        cRi++;
        cCi--;
    }
}


function traverseBottomRight(cRi,cCi,cellsToBeMarkedYellow){

    while(cCi<n && cRi<n){

        let dataIndex = `${cRi}-${cCi}`;
        
        cellsToBeMarkedYellow[dataIndex]=true;

        cRi++;
        cCi++;
    }
}


function initialiseGrid(n){

    for(let ri=0;ri<n;ri++){
        let row = document.createElement("tr");
        table.appendChild(row);

        let white = ri%2===0;

        let cells = document.createDocumentFragment();

        for(let ci=0;ci<n;ci++){

            let cell = document.createElement("td");

            cell.setAttribute("class","box");
            cell.setAttribute("data-index",`${ri}-${ci}`);
            cell.classList.add((white)?"white":"black");

            cells.appendChild(cell);

            white= !white;
        }
        row.appendChild(cells);
    }
}