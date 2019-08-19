import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'
import moment from 'moment'


const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const saveElement = document.querySelector('#save-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

//save new note
saveElement.addEventListener('click', (e) => {
    updateNote(noteId, {
        title: titleElement.value,
        body: bodyElement.value,
        updatedAt: moment().valueOf()
    })
    location.assign('index.html')
})

//remove note
removeElement.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('index.html')
})

//live rendering event listener
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})