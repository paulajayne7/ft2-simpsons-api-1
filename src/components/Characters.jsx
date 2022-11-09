import React, { useState } from "react";
import { useSelector } from "react-redux";
import Character from "./Character";
import SortSelection from "./SortSelection";

const Characters = () => {
  const characters = useSelector((state) => state.characters);
  const searchInput = useSelector((state) => state.searchInput);
  const [sortSelection, setsortSelection] = useState("");

  const onInput = (e) => {
    setsortSelection(Number(e.target.value));
  };
  const sort = (copy) => {
    switch (sortSelection) {
      case 1:
        copy.sort((firstItem, secondItem) => {
          if (firstItem.character > secondItem.character) return 1;
          if (firstItem.character < secondItem.character) return -1;
          return 0;
        });
        break;

      case 2:
        copy.sort((firstItem, secondItem) => {
          if (firstItem.character < secondItem.character) return 1;
          if (firstItem.character > secondItem.character) return -1;
          return 0;
        });
        break;

      case 3:
        copy.sort((firstItem, secondItem) => {
          if (firstItem.quote > secondItem.quote) return 1;
          if (firstItem.quote < secondItem.quote) return -1;
          return 0;
        });
        break;

      case 4:
        copy.sort((firstItem, secondItem) => {
          if (firstItem.quote < secondItem.quote) return 1;
          if (firstItem.quote > secondItem.quote) return -1;
          return 0;
        });
        break;

      default:
        break;
    }
  };

  //make a copy of the original state
  let copy = [...characters];
  sort(copy);

  console.log(sortSelection, copy);

  let count = 0;
  characters.forEach((item) => {
    if (item.liked) {
      count++;
    }
  });

  if (searchInput) {
    copy = copy.filter((item) => {
      return item.character
        .toLowerCase()
        .includes(searchInput.toLowerCase().trim());
    });
  }

  return (
    <>
      <h1>Total no of chars liked: {count}</h1>
      <SortSelection onInput={onInput} />
      {copy.map((character, index) => (
        <Character key={index} character={character} index={index} />
      ))}
    </>
  );
};

export default Characters;
