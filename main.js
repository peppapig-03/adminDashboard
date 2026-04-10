const button=document.querySelector(".searchButton")
button.addEventListener("click",()=>{
    alert("Search?")
})
const notify=document.querySelector(".notifications")
notify.addEventListener("click",()=>{
    alert("Notification")
})
const newButton=document.querySelector(".newButton")
newButton.addEventListener("click",()=>{
    alert("New")
})
const uploadButton=document.querySelector(".uploadButton")
uploadButton.addEventListener("click",()=>{
    alert("Upload")
})
const shareButton=document.querySelector(".shareButton")
shareButton.addEventListener("click",()=>{
    alert("Share")
})
const buttonList1=document.querySelectorAll(".firstList button")
buttonList1.forEach((element)=>{
    element.addEventListener("click",(event)=>{
        alert(event.target.id)
    })
})
const buttonList2=document.querySelectorAll(".secondList button")
buttonList2.forEach((element)=>{
    element.addEventListener("click",(event)=>{
        alert(event.target.id)
    })
})