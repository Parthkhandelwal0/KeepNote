import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"

function noteTerm(note){
    return < Note 
    key = {note.id}
    id ={note.id}
    title = {note.title}
    content = {note.content}
    />
}

function App(){
    return <div><Header />
    {notes.map(noteTerm)}
    <Footer />
    
    </div>
}

export default App;