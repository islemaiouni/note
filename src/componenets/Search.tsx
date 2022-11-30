import {BsSearch} from 'react-icons/bs';
import React, {FC} from 'react';

interface ISearch {
    handleSearchText: React.Dispatch<React.SetStateAction<string>>
}

const Search: FC<ISearch> = ({handleSearchText}) => {
  return (
    <div className="flex items-center bg-gray-200 p-2 mt-1 mb-4 rounded-lg w-auto  ">
      <BsSearch className="text-2xl m-2 text-primary" />
      <input
        className="font-gilroy-medium bg-gray-200 p-2 rounded-md outline-none
                   transition duration-200 border-b-2
                   focus:bg-gray-50  "
        onChange={(e) => {
          handleSearchText(e.target.value);
        }}
        type="text"
        placeholder="Type to search..." />
    </div>
  );
};

export default Search;