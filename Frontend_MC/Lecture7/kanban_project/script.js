const addBtn = document.querySelector(".add-btn");
const model = document.querySelector(".model_cont");
const priorityColorContainer = document.querySelector(".priority_color_cont");
const priorityColorArray = document.querySelectorAll(".priorirty_color");
const textArea= document.querySelector(".textarea_cont");
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority");

const pendingContainer = document.querySelector(".pending_cont");


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



    createNewTicket(content, cColor, id);


})



function createNewTicket(content,color,id){

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class","ticket_cont");


    ticketContainer.innerHTML= `
     <div class="ticket_color ${color}"></div>
    <div class="ticket_id"> #${id} </div>
    <div class="ticket_area"> ${content} </div>
    <div class="lock_unlock">
    <i class="fa fa-lock"></i>
    </div>
    `

    pendingContainer.appendChild(ticketContainer);

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



//drag and drop 
// storage 
//delete button
// edit ticket