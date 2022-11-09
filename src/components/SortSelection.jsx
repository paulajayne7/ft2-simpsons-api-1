import React from "react";

const SortSelection = ({ onInput }) => {
  const options = [
    { id: 0, name: "Select Below:" },
    { id: 1, name: "Name > Asc" },
    { id: 2, name: "Name > Desc" },
    { id: 3, name: "Quote > Asc" },
    { id: 4, name: "Quote > Desc" },
  ];

  return (
    <select onInput={onInput}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SortSelection;
