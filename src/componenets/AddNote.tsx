import React, {useState, FC} from 'react';
import {BsCheckCircle} from 'react-icons/bs';
import {v4 as uuidv4} from 'uuid';

interface IAddNote {
    handleAddNote: (id: string, title: string, description: string) => void;
}

const AddNote: FC<IAddNote> = ({handleAddNote}) => {
  // Note States & Description Character limit
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteID, setNoteID] = useState(uuidv4());
  const characterLimit = 200;

  // Handlers
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    if (characterLimit - +event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNoteTitle(event.target.value);
  };

  const resetStates = () => {
    setNoteTitle('');
    setNoteText('');
  };

  const handleSaveClick = () => {
    if (noteTitle === '') {
      alert('Warning: Title is required!');
    } else if (noteTitle !== '') {
      setNoteID(uuidv4());
      handleAddNote(noteID, noteTitle, noteText);
      resetStates();
    }
  };

  return (
    <article className="font-gilroy-regular flex flex-col justify-center
                        items-center bg-primary rounded-2xl w-72
                        shadow-md p-2">
      <input
        type="text"
        value={noteTitle}
        onChange={handleTitleChange}
        placeholder="An interesting title..."
        className="rounded-md w-11/12 p-2 m-4 outline-none"
      />
      <textarea
        className="resize-none rounded-lg p-2 outline-none"
        rows={8}
        cols={24}
        placeholder="Type your new note!"
        value={noteText}
        onChange={handleTextChange}
      />
      <span className="mt-1 p-2 flex justify-around items-center w-full">
        <small
          className="text-white text-base">
          {characterLimit - noteText.length} remaining</small>
        <button
          onClick={handleSaveClick}
          className="text-white text-2xl transition duration-150
                       hover:text-gray-200"><BsCheckCircle /></button>
      </span>
    </article>
  );
};

export default AddNote;
