let currentTab = "all";
const tabActive = ["bg-blue-400","border-blue","text-white"];
const tabInActive = ["bg-transparent","text-slate-700","border-slate-200"];
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state")




function switchTab(tab) {
   const tabs = ["all","interview","rejected"];
   currentTab = tab;

 
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
           if(t === tab){
            tabName.classList.remove(...tabInActive);
            tabName.classList.add(...tabActive)
           }
           else{
           tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInActive)
           }
        
    }

    const pages = [allContainer,interviewContainer,rejectedContainer];
    for(let page of pages){
        page.classList.add("hidden")
    }
    emptyState.classList.add("hidden")


    if(tab === "all"){
        allContainer.classList.remove("hidden")
        if(allContainer.children.length < 1){
            emptyState.classList.remove("hidden")
        }
    }
    else if(tab==="interview"){
        interviewContainer.classList.remove("hidden")
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    else{
        rejectedContainer.classList.remove("hidden")
        if(rejectedContainer.children.length<1){
            emptyState.classList.remove("hidden");
        }
    }
    updateState();
}


const totalState = document.getElementById("state-total");
const interviewState = document.getElementById("state-interview");
const rejectedState = document.getElementById("state-rejected");

const availablestate  = document.getElementById("avilable")


 




switchTab(currentTab);

document.getElementById("jobs-Container").addEventListener("click",function(event){
const clickElement = event.target;

const card = clickElement.closest(".card");
const parent = card.parentNode;
const status = card.querySelector(".status");
if(clickElement.classList.contains("interview")){
    status.innerText = "Interviewed"
    interviewContainer.append(card);
    updateState()
}
if(clickElement.classList.contains("rejected")){
    status.innerText = "Rejected";
    rejectedContainer.appendChild(card)
    updateState()
}
if(clickElement.classList.contains("delete")){
    parent.removeChild(card)
}
});

function updateState(){
// totalState.innerText = allContainer.children.length;
// interviewState.innerText = interviewContainer.children.length;
// rejectedState.innerText = rejectedContainer.children.length;
const counts = {
    all:allContainer.children.length,
    interview:interviewContainer.children.length,
    rejected:rejectedContainer.children.length
}
totalState.innerText = counts["all"];
interviewState.innerText = counts["interview"];
rejectedState.innerText = counts["rejected"];
availablestate.innerText = counts[currentTab];
if(counts[currentTab]<1){
    emptyState.classList.remove("hidden");
}else{
    emptyState.classList.add("hidden")
}

}
updateState();




