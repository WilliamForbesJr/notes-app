const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note){
    return note.id === noteId
})

if (note === undefined){
    location.assign('index.html')
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body

document.querySelector('#save-note').addEventListener('click', function (e) {
    note.body = document.querySelector('#note-body').value
    note.title = document.querySelector('#note-title').value
    saveNotes(notes)
    location.assign('index.html')
})

document.querySelector('#remove-note').addEventListener('click', function(){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', function(e){
    console.log('fuck')
})