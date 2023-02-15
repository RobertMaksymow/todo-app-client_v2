import React, { SetStateAction } from "react";
import { BsSortDown } from "react-icons/bs";
import { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
  sortByPriorityClick: boolean;
  setSortByPriorityClick: React.Dispatch<SetStateAction<boolean>>;
}

const InputField = ({
  todo,
  setTodo,
  handleAdd,
  sortByPriorityClick,
  setSortByPriorityClick,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        className="input__box"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        ref={inputRef}
        placeholder="Gimme something"
        data-testid="input_field"
      />
      <button className="input__submit" type="submit" title="Add new task">
        +
      </button>
      <button className="input__submit" type="submit" title="Sort by priority">
        <BsSortDown
          onClick={() => {
            sortByPriorityClick === true
              ? setSortByPriorityClick(false)
              : setSortByPriorityClick(true);
          }}
        />
      </button>
    </form>
  );
};

export default InputField;
