import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./InputField";

describe("Input Field", () => {
  it("displays the input field", () => {
    let testFunction = jest.fn().mockImplementation(() => console.log("HIT"));
    render(
      <InputField todo={""} setTodo={() => null} handleAdd={testFunction} />
    );

    let inputElement = screen.getByTestId("input_field");

    userEvent.type(inputElement, "test todo");

    let buttonElement = screen.getByRole("button");

    userEvent.click(buttonElement);

    expect(testFunction).toHaveBeenCalled();
  });
});
