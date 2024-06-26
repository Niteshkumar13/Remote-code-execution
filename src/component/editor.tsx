import React,{useRef,useEffect} from 'react';
import { Editor} from '@monaco-editor/react';
import { useTheme } from '../context/themeContext';
import { useLanguage,def_code } from '../context/selectLanguage'
const Editors = () => {
    const { lan,setLan} = useLanguage()
    const { allTheme } = useTheme();
    const editorRef = useRef<JSX.Element | null>(null);
    function handleEditorDidMount(editor:any) {
      editorRef.current = editor;
    }
    useEffect(() => {
      const t:string = def_code[`${lan.language}`];
      setLan({...lan,snippet:t})
    }, [lan.language])
  return (
    <div className='w-[70%] max-md:w-screen max-md:h-1/2  h-full border-r-[1px] '>
    <Editor
      height="100%" 
      theme={allTheme.body != "white" ? "vs-dark" : "light"}
      width="100%"
      options={{
        minimap: {
          enabled: false,
        },
      }}
      defaultLanguage={lan.language}
      language={lan.language}
      defaultValue={lan.snippet}
      value={lan.snippet}
      onMount={handleEditorDidMount}

    />
  </div>
  )
}

export default Editors
