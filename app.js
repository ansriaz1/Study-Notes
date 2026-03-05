let notes = JSON.parse(localStorage.getItem("notes")) || []

let current = null

const list = document.getElementById("notesList")
const editor = document.getElementById("editor")
const title = document.getElementById("title")

function save(){

localStorage.setItem("notes", JSON.stringify(notes))

}

function render(){

list.innerHTML=""

notes.forEach((n,i)=>{

let div=document.createElement("div")

div.className="noteItem"

div.innerText=n.title || "Untitled"

div.onclick=()=>openNote(i)

list.appendChild(div)

})

}

function createNote(){

notes.push({title:"New Note",content:""})

save()

render()

}

function openNote(i){

current=i

title.value=notes[i].title

editor.innerHTML=notes[i].content

}

title.oninput=()=>{

if(current==null)return

notes[current].title=title.value

save()

render()

}

editor.oninput=()=>{

if(current==null)return

notes[current].content=editor.innerHTML

save()

}

function format(cmd){

document.execCommand(cmd)

}

render()
