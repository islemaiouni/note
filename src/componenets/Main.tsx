import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import ScrollReveal from 'scrollreveal';
import NotesList from './NotesList';
import Search from './Search';


export default function Main() {
  const [notes, setNotes] = useState([{
    id: uuidv4(),
    title: 'Create your own note!',
    description: 'Title is needed, description is optional :D',
  }]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('noteapp-notes')!);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
        'noteapp-notes',
        JSON.stringify(notes)
    );
  }, [notes]);

  useEffect(() => {
    ScrollReveal().reveal('.section-tasks', {delay: 300});
  }, []);

  const addNote = (id: string, title: string, description: string) => {
    const newNote = {
      id: id,
      title: title,
      description: description,
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <section className="section-tasks h-screen
                        flex flex-col items-center relative">
      <h3 className="font-gilroy-medium text-3xl
                   text-black mb-4 border-b uppercase">have nice day</h3>
      <Search handleSearchText={setSearchText} />
      <NotesList
        notes={notes.filter((note) => {
          if (note.description.toLowerCase().includes(searchText) ||
              note.title.toLowerCase().includes(searchText)) {
            return note;
          }
        })}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </section>
  );
}
