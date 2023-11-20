'use client'

import React, { useCallback, useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

interface props {
  theme: "Dark" | "Light";
  code: string;
  output: any;
  updateCode: any;
}

export default function Editor({ theme, code, output, updateCode }: props) {

  // updating the code based on user input
  const onChange = useCallback((val: string, viewUpdate: any) => {
    updateCode(val)
  }, []);

  return (
    <div data-testid="py-editor" className="border border-black border-solid p-2 w-11/12 m-2 h-[90vh]">
      <CodeMirror
        value={code}
        height="42vh"
        theme={theme === "Dark" ? "dark" : "light"}
        extensions={[python()]}
        onChange={onChange}
        basicSetup={{ lineNumbers: true, closeBrackets: true, completionKeymap: true }}
        data-testid="py-code-editor"
      />
      <CodeMirror
        value={output}
        height="42vh"
        extensions={[python()]}
        readOnly
        basicSetup={{ lineNumbers: false }}
        theme={theme === "Dark" ? "light" : "dark"}
        data-testid="py-output-console"
      />
    </div>
  );
}
