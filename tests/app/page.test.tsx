import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home component ", () => {

  globalThis.loadPyodide = () => { }

  it("should load correctly", () => {
    render(<Home />)
  });

  it("should contain header section", () => {
    render(<Home />)

    const header = screen.queryByTestId("py-header")

    expect(header).toBeInTheDocument()
  })

  it("should contain editor section", () => {
    render(<Home />)

    const editor = screen.queryByTestId("py-editor")

    expect(editor).toBeInTheDocument()
  })
});
