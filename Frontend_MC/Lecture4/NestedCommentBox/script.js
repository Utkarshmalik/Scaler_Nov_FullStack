const container = document.querySelector(".container");


container.addEventListener("click",(e)=>{

    const isReply = e.target.classList.contains("reply");
    const isSubmit = e.target.classList.contains("btn-submit");

    if(isReply){
        createReplyInput(e);
    }else if(isSubmit){
        createComment(e);
    }
})


function createReplyInput(e){

    const targetElement = e.target;
    const commentContainer = targetElement.parentNode;

    const replyContainerfragment = document.createDocumentFragment();

    const replyContainer  = document.createElement("div");
    const input = document.createElement("input");
    const button  = document.createElement("button");

    button.setAttribute("class","btn-submit");
    button.textContent = "Submit";


    replyContainer.setAttribute("class","comment-reply-container");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Write your comment");

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);

    replyContainerfragment.appendChild(replyContainer);

    commentContainer.appendChild(replyContainerfragment);
}


  
function createComment(e){

    const commentContainer  =document.createElement("div");
    commentContainer.setAttribute("class","comment-container");
    const inputNode = e.target.parentNode.children[0];

    commentContainer.innerHTML= `
            <h3 class="comment-text" > ${inputNode.value} </h3>
            <div class="reply"> Reply </div>
    `


    const parentCommentContainer = e.target.parentNode.parentNode;
    const replyContainer = e.target.parentNode;


    parentCommentContainer.replaceChild(commentContainer,replyContainer);

}