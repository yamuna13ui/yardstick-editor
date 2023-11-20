'use client'

import Editor from "./Components/Editor";
import Header from "./Components/Header";
import React, { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<'Dark' | 'Light'>('Dark')
  const [code, setCode] = useState(`print("Hello Python!")`)
  const [output, setOutput] = useState(">> Hello Python!");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header setCode={setCode} code={code} setOutput={setOutput} themeChange={setTheme} theme={theme} />
      <Editor updateCode={setCode} output={output} code={code} theme={theme} />
    </main>
  )
}
