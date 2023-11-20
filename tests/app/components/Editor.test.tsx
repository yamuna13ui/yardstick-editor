import Editor from "@/app/Components/Editor";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Editor component ", () => {

    const screenProps: {
        theme: "Dark" | "Light";
        code: string;
        output: any;
        updateCode: any;
    } = {
        theme: "Dark",
        code: 'print("Hello")',
        output: ">> Hello",
        updateCode: () => { }
    }

    globalThis.loadPyodide = () => { }

    it("renders the UI correctly", () => {
        render(<Editor {...screenProps} />)
    });

    it("should contain the input editor", () => {
        render(<Editor {...screenProps} />)

        const element: HTMLElement = screen.queryByTestId("py-code-editor")
        expect(element).toBeInTheDocument()
    })

    it("should contain the output console", () => {
        render(<Editor {...screenProps} />)

        const element: HTMLElement = screen.queryByTestId("py-output-console")
        expect(element).toBeInTheDocument()
    })
});
