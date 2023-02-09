import React from "react";
import { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

// const InputField React.FC<Props> = ({ todo, setTodo }) => {
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
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
      />
      <button className="input__submit" type="submit">
        +
      </button>
    </form>
  );
};

export default InputField;
