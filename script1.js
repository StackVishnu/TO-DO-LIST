const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');
const array = [];

function addTask(){
    if(inputBox.value == ""){
        alert("Empty Input")
    }
    else{
        array.push(inputBox.value);
        console.log(array);
        const last = array[array.length - 1];
        appending(last);
    }

    inputBox.value = "";
    
}
list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "I"){
        e.target.parentElement.remove();
    }
},false)
 
function appending(task){
    let li = document.createElement("li");
        li.className=" text-white"
        li.innerHTML = task;
        list.appendChild(li);

        let i = document.createElement("i");
        i.className = "fa fa-times ms-4 p-1 float-end"
        li.appendChild(i);
}
    

