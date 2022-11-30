import React from 'react';

// Components
import AddNote from './AddNote';
import Note from './Note';

interface INotesList {
    notes: Array<{id: string, title: string, description: string}>;
    handleAddNote: (id: string, title: string, description: string) => void;
    handleDeleteNote: (id: string) => void;
}

const NotesList: React.FC<INotesList> = (
    {notes, handleAddNote, handleDeleteNote}
) => {
  return (
    <section className="grid lg:grid-cols-3 gap-2">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note: any) => {
        return <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          handleDeleteNote={handleDeleteNote}
        />;
      })}
    </section>
  );
};

export default NotesList;
