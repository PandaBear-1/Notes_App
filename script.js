const notesContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input_box")

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();


function updatedStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input_box"
    inputBox.setAttribute("contenteditable", "true")
    img.src = "images 2/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatedStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input_box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updatedStorage();
            }
        })
    }
})

document.addEventListener('keydown', event =>{
    if(event.key === 'Enter'){
        document.execCommand("insertLineBreak");
        event.preventDefault(); 
    }
})