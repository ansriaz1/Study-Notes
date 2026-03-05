let notes = JSON.parse(localStorage.getItem("notes")) || []

displayNotes()


function addNote(){

let title = document.getElementById("noteTitle").value
let text = document.getElementById("noteText").value

if(title=="" || text=="") return

let note = {

title:title,
text:text

}

notes.push(note)

localStorage.setItem("notes",JSON.stringify(notes))

displayNotes()

document.getElementById("noteTitle").value=""
document.getElementById("noteText").value=""

}



function displayNotes(){

let container=document.getElementById("notesContainer")

container.innerHTML=""

notes.forEach((note,index)=>{

container.innerHTML+=`

<div class="note">

<h3>${note.title}</h3>

<p>${note.text}</p>

<button class="deleteBtn" onclick="deleteNote(${index})">Delete</button>

</div>

`

})

}



function deleteNote(index){

notes.splice(index,1)

localStorage.setItem("notes",JSON.stringify(notes))

displayNotes()

}



document.getElementById("menuBtn").onclick=function(){

let menu=document.getElementById("menu")

if(menu.style.display=="block")

menu.style.display="none"

else

menu.style.display="block"

}



document.getElementById("searchBox").addEventListener("input",function(){

let search=this.value.toLowerCase()

let filtered=notes.filter(n=>n.title.toLowerCase().includes(search)||n.text.toLowerCase().includes(search))

let container=document.getElementById("notesContainer")

container.innerHTML=""

filtered.forEach((note,index)=>{

container.innerHTML+=`

<div class="note">

<h3>${note.title}</h3>

<p>${note.text}</p>

</div>

`

})

})
