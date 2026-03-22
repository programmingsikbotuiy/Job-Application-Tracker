let currentTab = "all";
const tabActive = ["bg-blue-400","border-blue","text-white"];
const tabInActive = ["bg-transparent","text-slate-700","border-slate-200"];
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");



function switchTab(tab) {
   const tabs = ["all","interview","rejected"]

 
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
    if(tab === "all"){
        allContainer.classList.remove("hidden")
    }
    else if(tab==="interview"){
        interviewContainer.classList.remove("hidden")
    }
    else{
        rejectedContainer.classList.remove("hidden")
    }
}


const totalState = document.getElementById("state-total");
const interviewState = document.getElementById("state-interview");
const rejectedState = document.getElementById("state-rejected");
 
totalState.innerText = allContainer.children.length;



switchTab(currentTab);




