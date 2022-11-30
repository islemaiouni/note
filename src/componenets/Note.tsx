import {BsTrashFill} from 'react-icons/bs';

interface INote {
    id: string,
    title: string,
    description: string,
    handleDeleteNote: any
}

const Note = (props: INote) => {
  return (
    <article className="flex flex-col justify-between 
                        rounded-2xl p-3 w-69 shadow-md bg-yellow-200 ">
      <span>
        <p className="text-xl font-gilroy-bold
                    text-primary underline break-words">{props.title}</p>
        <p className="font-gilroy-regular break-words">{props.description}</p>
      </span>
      <span className="inline-flex justify-between mt-5">
        <small className="font-gilroy-light
                          opacity-30 w-10/12">{props.id}</small>
        <button
          onClick={() => props.handleDeleteNote(props.id)}
          className="text-xl transition duration-200 hover:text-primary">
          <BsTrashFill />
        </button>
      </span>
    </article>
  );
};

export default Note;
