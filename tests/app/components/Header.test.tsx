import Header from "@/app/Components/Header";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Layout component ", () => {

    const screenProps: { theme: "Dark" | "Light"; themeChange: () => void; setOutput: () => void; code: string; setCode: () => void; } = {
        theme: "Dark",
        themeChange: () => { },
        setOutput: () => { },
        code: 'print "Hello, Python!"',
        setCode: () => { }
    }

    globalThis.loadPyodide = () => { }

    it("should load correctly", () => {
        render(<Header {...screenProps} />)
    });

    it("should contain run button", () => {
        render(<Header {...screenProps} />)

        const element = screen.queryByTestId("py-btn-run")
        expect(element).toBeInTheDocument()
    })

    it("should contain reset button", () => {
        render(<Header {...screenProps} />)

        const element = screen.queryByTestId("py-btn-reset")
        expect(element).toBeInTheDocument()
    })

    it("should contain theme change button", () => {
        render(<Header {...screenProps} />)

        const element = screen.queryByTestId("py-btn-theme")
        expect(element).toBeInTheDocument()
    })

    it("should able to click the run button", () => {
        render(<Header {...screenProps} />)

        const element: HTMLElement = screen.queryByTestId("py-btn-run")
        fireEvent(element, new MouseEvent('click'))
    })

    it("should able to click the reset button", () => {
        render(<Header {...screenProps} />)

        const element: HTMLElement = screen.queryByTestId("py-btn-reset")
        fireEvent(element, new MouseEvent('click'))
    })

    it("should able to click the theme change button", () => {
        render(<Header {...screenProps} />)

        const element: HTMLElement = screen.queryByTestId("py-btn-theme")
        fireEvent(element, new MouseEvent('click'))
    })
});
