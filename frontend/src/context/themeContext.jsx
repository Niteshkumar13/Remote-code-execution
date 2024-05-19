import React,{createContext,useContext,useState} from "react";
const Theme = createContext(null);
export const useTheme = ()=> {return useContext(Theme)};

 const ThemeContext = ({children})=>{
    const {header,body,slider,textColor,borderColor,hoverColor} = JSON.parse(localStorage.getItem('rceTheme'))||{};
    const [allTheme,setAllTheme] = useState({
        header:header||'rgba(153,161,179,.2)',
        body:body||'white',
        slider:slider||'#f8fafc',
        textColor:textColor||'black',
        borderColor:borderColor||'rgba(156,163,175,0.5)',
        hoverColor:hoverColor||'bg-slate-100'
    })
    return(
        <Theme.Provider value={{allTheme,setAllTheme}}>
            {children}
        </Theme.Provider>
    )
}
export default ThemeContext