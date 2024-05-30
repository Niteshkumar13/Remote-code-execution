import React, { FC, ReactNode, createContext, useContext, useState } from "react";
import { language, languageState, startedSnippet } from "../interfaces/interface";
const Lanaguage = createContext<languageState | null>(null);
export const useLanguage = () => {
    const context = useContext(Lanaguage)
    if (!context) {
        throw new Error("useLanguage must be used within a LanaguageProvider")
    }
    return context
};
const LanguageContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [lan, setLan] = useState<language>({
        language: 'python',
        snippet: ``
    })
    return (
        <Lanaguage.Provider value={{ lan, setLan }}>
            {children}
        </Lanaguage.Provider>
    )
}
// started snippet
export const def_code: startedSnippet = {
    c: `#include <stdio.h>
      int main() {
         printf("Hello, World!");
         return 0;
      }`,
    python: `# some example\nprint("Hello World")`,
    javascript: `//some code snippet\nconsole.log("Hello World");`,
    cpp:
        `// Your First C++ Program
      #include <iostream>
      int main() {
          std::cout << "Hello World!";
          return 0;
      }
      `,
    html: 
`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
    `
};

export default LanguageContext;
