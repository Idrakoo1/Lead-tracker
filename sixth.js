

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = localStorage.getItem("myLeads")
    if (leadsFromLocalStorage){
       myLeads = JSON.parse(leadsFromLocalStorage)
       render(myLeads)
    }
    
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
     render(myLeads)

     //let activeTab = tabs[0]
     //let activeTabId = activeTab.id // or do whatever you need
    })

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
     render(myLeads)

})

function render(leads){
     let listIteams = ""
    for(let i = 0; i < leads.length; i++){
    
      //ulEl.innerHTML +="<li><a href='" + myLeads[i] + "' target = '_blank'>" + myLeads[i] + "</a></li>"
        listIteams +=`
     <li>
         <a href='${leads[i]}' target = '_blank'>
              ${leads[i]} 
         </a>
     </li>`
    }

    ulEl.innerHTML = listIteams
}
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
 
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
     render(myLeads)
    //console.log(inputEl.value)
    //console.log( localStorage.getItem("myLeads") )
    
})


//let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
//myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
//myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
//myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
//console.log(typeof myLeads)
