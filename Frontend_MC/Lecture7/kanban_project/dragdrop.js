const containers = document.querySelectorAll(".container");


console.log(containers);
let draggedTicket=null;

containers.forEach((container)=>{



     container.addEventListener("dragstart",(e)=>{
        draggedTicket = e.target;
        e.target.style.opacity="0.5";

     })
       container.addEventListener("dragend",(e)=>{
            e.target.style.opacity="1";

     })
     
    container.addEventListener("dragover",(e)=>{
        e.preventDefault();
     })


        
    container.addEventListener("drop",(e)=>{

        const dropContainer = e.target;

        const isPending = dropContainer.classList[0] === "pending_cont";

        const ticketId = draggedTicket.querySelector(".ticket_id").innerText.split("#")[1];

        const ticketObj = allTickets.find((ticket)=>{
            return ticket.id===ticketId;
        })

        ticketObj.isPending = isPending;

        updateLocalStorage();

        dropContainer.appendChild(draggedTicket);




     })




    
})