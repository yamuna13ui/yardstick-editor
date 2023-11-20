'use client'

import { useEffect, useRef, useState } from "react";

interface props {
    theme: 'Dark' | 'Light';
    themeChange: any;
    setOutput: any;
    code: string;
    setCode: any;
}

export default function Header({ theme, themeChange, setOutput, code, setCode }: props): JSX.Element {
    const classes = `${theme === 'Dark' ? "bg-black w-40 rounded-md text-white h-10" : "bg-blue-500 w-40 rounded-md text-white h-10"}`

    const pyodide = useRef(null)
    const [isPyodideLoading, setIsPyodideLoading] = useState<boolean>(true)

    // initializing the pyodide module
    useEffect(() => {
        (async function () {
            // indexURL makes sure the pydoide is loaded from exact cdn when it is unavailable
            pyodide.current = await globalThis.loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/dev/full/" })
            setIsPyodideLoading(false)
        })()
    }, [pyodide])

    // processing the code on click of run button
    const processPythonCode = async () => {
        if (!isPyodideLoading && pyodide.current) {
            let printArr: any[] = []
            const evaluatePython = async (pyodide: any, pythonCode: string) => {
                try {
                    // print inbuilt function is modified due to the issues in latest pyodide module
                    pyodide.current.globals.set('print', (s: any) => printArr.push(">> " + s))
                    return await pyodide.current.runPythonAsync(pythonCode)
                } catch (error) {
                    console.error(error)
                    return error
                }
            };
            let result = await evaluatePython(pyodide, code)
            setOutput(printArr.join("\n"))
        }
        else {
            setOutput("Wait Till Loading Finishes...")
        }
    }

    // handling the reset button click
    const reset = () => {
        setCode("")
        setOutput(">> ")
    }

    return (
        <div data-testid="py-header" className="w-full flex justify-end mt-2">
            <div className="flex items-center justify-around w-1/2 mr-[2%]">
                <button data-testid="py-btn-run" onClick={processPythonCode} className={classes} type="button">Run</button>
                <button data-testid="py-btn-reset" onClick={reset} className={classes} type="button">Clear/Reset</button>
                <button data-testid="py-btn-theme" onClick={() => themeChange(theme === "Dark" ? "Light" : "Dark")} className={classes} type="button">Theme: {theme}</button>
            </div>
        </div>
    )
}