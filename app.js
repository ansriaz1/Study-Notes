const notesContainer = document.getElementById("notesContainer")

const addBtn = document.getElementById("addBtn")

const menuBtn = document.getElementById("menuBtn")

const sidebar = document.getElementById("sidebar")


menuBtn.onclick = () => {

sidebar.classList.toggle("show")

}


function saveNotes(){

const notes = []

document.querySelectorAll(".note textarea").forEach(n=>{

notes.push(n.value)

})

localStorage.setItem("notes",JSON.stringify(notes))

}


function createNote(text=""){

const note = document.createElement("div")

note.className="note"

note.innerHTML=`

<button class="deleteBtn">x</button>

<textarea>${text}</textarea>

`

note.querySelector(".deleteBtn").onclick=()=>{

note.remove()

saveNotes()

}

note.querySelector("textarea").onkeyup=saveNotes

notesContainer.appendChild(note)

}


addBtn.onclick=()=>{

createNote()

}


function loadNotes(){

const data = JSON.parse(localStorage.getItem("notes") || "[]")

data.forEach(n=>createNote(n))

}

loadNotes()


function deleteAll(){

localStorage.removeItem("notes")

notesContainer.innerHTML=""

  }
