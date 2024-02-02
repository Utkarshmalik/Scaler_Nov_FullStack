const addBtn = document.querySelector(".add-btn");
const model = document.querySelector(".model_cont");
const priorityColorContainer = document.querySelector(".priority_color_cont");
const priorityColorArray = document.querySelectorAll(".priorirty_color");
const textArea= document.querySelector(".textarea_cont");
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority");
const pendingContainer = document.querySelector(".pending_cont");
const finishedContainer = document.querySelector(".finished_cont");
const deleteBtn = document.querySelector(".remove-btn");
const colors = ["pink","blue","purple","green"];


let allTickets =  localStorage.getItem("localTickets") || [] ;
let isFromLocalStorage= false;

if(typeof allTickets === "string"){

    allTickets = JSON.parse(allTickets);
    populateUI();
}


function populateUI(){

    isFromLocalStorage = true;

    allTickets.forEach((ticket)=>{

        const {content,color,id,isPending} =ticket;
        createNewTicket(content,color,id,isPending);
    })

    isFromLocalStorage = false;
}



addBtn.addEventListener("click",()=>{

    //display the model

    model.style.display="flex";
    

})

toolBoxPriorityContainer.addEventListener("click",(e)=>{
    
    if(e.target===e.currentTarget){
        return;
    }

    const currentColorElement=e.target;
    const selectedColor = currentColorElement.classList[1];
    

    const allTickets  = document.querySelectorAll(".ticket_cont");


    for(let i=0;i<allTickets.length;i++){

        const ticketContainer = allTickets[i];
        const ticketColorElem = ticketContainer.querySelector(".ticket_color");
        const cTicketColor = ticketColorElem.classList[1];

        if(cTicketColor!==selectedColor){
            ticketContainer.style.display="none"
        }else{
            ticketContainer.style.display="block"
        }

    }

})

toolBoxPriorityContainer.addEventListener("dblclick",(e)=>{

      if(e.target===e.currentTarget){
        return;
    }

      const allTickets  = document.querySelectorAll(".ticket_cont");

         for(let i=0;i<allTickets.length;i++){
            const ticketContainer = allTickets[i];
            ticketContainer.style.display="block"
        }


})

model.addEventListener("keypress",(e)=>{

    if(e.key!=="Enter"){
        return;
    }

    //which color is active 
    const activeColorElement = priorityColorContainer.querySelector(".active");
    const cColor= activeColorElement.classList[1];


    //what is the text in the box
    const content= textArea.value;

    const { randomUUID } = new ShortUniqueId({ length: 10 });
    const id = randomUUID();


    //reset
    textArea.value="";
    model.style.display="none";



    createNewTicket(content, cColor, id,true);


})



function createNewTicket(content,color,id,isPending){

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class","ticket_cont");
    ticketContainer.setAttribute("draggable","true");


    ticketContainer.innerHTML= `
     <div class="ticket_color ${color}"></div>
    <div class="ticket_id"> #${id} </div>
    <div class="ticket_area"> ${content} </div>
    <div class="lock_unlock">
    <i class="fa fa-lock"></i>
    </div>
    `

    if(isPending){
    pendingContainer.appendChild(ticketContainer);
    }else{
        finishedContainer.appendChild(ticketContainer);
    }


    if(!isFromLocalStorage){
        let ticketObj = {
            id,
            content,
            color,
            isPending
        }

        allTickets.push(ticketObj);    
        updateLocalStorage();
    }


    //color click
    const ticketColorElem  = ticketContainer.querySelector(".ticket_color");
    ticketColorElem.addEventListener("click",toggleColor);


    //lock click
    const lockBtn = ticketContainer.querySelector(".lock_unlock");
    const ticketArea = ticketContainer.querySelector(".ticket_area");
    lockBtn.addEventListener("click",(e)=>handleLockAndUnLock(e,ticketArea));


    //container click 
    ticketContainer.addEventListener("click",handleContainerClick);
    

}

function handleLockAndUnLock(e,ticket_area){

    console.log("handle lock and unlock");

    let isLocked = e.target.classList.contains("fa-lock");
    console.log(isLocked);

    if(isLocked){
        //unlock
        e.target.classList.remove("fa-lock");
        e.target.classList.add("fa-unlock");
        ticket_area.setAttribute("contenteditable",true);


    }else{
        //lock 
         e.target.classList.remove("fa-unlock");
         e.target.classList.add("fa-lock");
        ticket_area.setAttribute("contenteditable",false);

    }

}


function toggleColor(e){

    const cColor = e.target.classList[1];
    let idx=  colors.indexOf(cColor);

    let nextIndx= (idx+1)%colors.length;

    e.target.classList.remove(cColor);
    e.target.classList.add(colors[nextIndx]);

}

priorityColorContainer.addEventListener("click",(e)=>{

    if(e.target===e.currentTarget){
        return;
    }

    for(let i=0;i<priorityColorArray.length;i++){
        priorityColorArray[i].classList.remove("active");
    }

    e.target.classList.add("active");

})


deleteBtn.addEventListener("click",(e)=>{
    e.target.classList.toggle("red");
})


function handleContainerClick(e){

    const isDeleteActivated   = deleteBtn.children[0].classList.contains("red");

    if(!isDeleteActivated){
        return;
    }



   e.currentTarget.remove();

}



function updateLocalStorage(){
    localStorage.setItem("localTickets",JSON.stringify(allTickets));
}