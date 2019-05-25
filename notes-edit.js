const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const saveElement = document.querySelector('#save-note')
const editElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (note === undefined){
    location.assign('index.html')
}

//populate elements
titleElement.value = note.title
bodyElement.value = note.body
editElement.textContent = `Last Updated ${moment(note.updatedAt).fromNow()}`

//save new note
saveElement.addEventListener('click', (e) => {
    note.body = bodyElement.value
    note.title = titleElement.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    location.assign('index.html')
})

//remove note
removeElement.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

//live rendering event listener
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)

        if (note === undefined) {
            location.assign('index.html')
        }

        //populate text boxes
        titleElement.value = note.title
        bodyElement.value = note.body
        editElement.textContent = `Last Updated ${moment(note.updatedAt).fromNow()}`
    }
})
