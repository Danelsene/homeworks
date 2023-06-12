// Функція для отримання записів з LocalStorage
function getNotes() {
  const notes = localStorage.getItem('notes');
  if (notes) {
    return notes.split(',');
  }
  return [];
}

// Функція для збереження записів в LocalStorage
function saveNotes(notes) {
  localStorage.setItem('notes', notes.join(','));
}

// Функція для додавання запису
function addNote() {
  const note = prompt('Введіть текст запису:');
  if (note) {
    const notes = getNotes();
    notes.push(note);
    saveNotes(notes);
    renderNotes();
  }
}

// Функція для видалення запису за індексом
function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  renderNotes();
}

// Функція для редагування запису за індексом
function editNote(index) {
  const notes = getNotes();
  const updatedNote = prompt('Введіть новий текст запису:', notes[index]);
  if (updatedNote) {
    notes[index] = updatedNote;
    saveNotes(notes);
    renderNotes();
  }
}

// Функція для відображення записів на екрані
function renderNotes() {
  const notesContainer = document.getElementById('noteContainer');
  notesContainer.innerHTML = '';

  const notes = getNotes();
  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.textContent = note;

    const editButton = document.createElement('button');
    editButton.textContent = 'Редагувати';
    editButton.onclick = () => editNote(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.onclick = () => deleteNote(index);

    noteElement.appendChild(editButton);
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
  });
}

// Відображення записів при завантаженні сторінки
renderNotes();
