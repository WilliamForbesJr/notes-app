const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const saveElement = document.querySelector('#save-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note){
    return note.id === noteId
})

if (note === undefined){
    location.assign('index.html')
}

//populate text boxes
titleElement.value = note.title
bodyElement.value = note.body

//save new note
saveElement.addEventListener('click', function (e) {
    note.body = bodyElement.value
    note.title = titleElement.value
    saveNotes(notes)
    location.assign('index.html')
})

//remove note
removeElement.addEventListener('click', function(){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('index.html')
        }

        //populate text boxes
        titleElement.value = note.title
        bodyElement.value = note.body
    }
})
