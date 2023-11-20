import RootLayout from "@/app/layout";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Layout component ", () => {

  globalThis.loadPyodide = () => { }

  it("renders the UI correctly", () => {
    render(<RootLayout><Home /></RootLayout>)
  });
});
