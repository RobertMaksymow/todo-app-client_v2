import Footer from "./Footer";
// import Footer from "./Footer";
// import React from "react";
// import * as ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

export {};

// describe("Tests Footer rendering", () => {
//   let container: HTMLDivElement;

//   beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
//     ReactDOM.render(<Footer />, container);
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//     container.remove();
//   });

//   test("Renders correctly Footer element", () => {
//     const element = container.querySelectorAll("div");
//     expect(element).toHaveLength(1);
//     expect(element.name).toBe("footer");
//   });
// });

describe("Footer", () => {
  it("displays the footer", () => {
    render(<Footer />);

    // screen.getByText("2023@THG");
    var divElement = screen.getByTestId("footer-id");

    expect(divElement).toHaveTextContent("2023@THG");
  });
});
