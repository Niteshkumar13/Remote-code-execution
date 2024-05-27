import React, { createContext, useContext, useState} from "react";
import { ThemeState,ChangeState} from "../interfaces/interface";
const Theme = createContext<ChangeState | null>(null);
export const useTheme = (): ChangeState => {
    const context = useContext(Theme);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
const ThemeContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const localItem: string | null = localStorage.getItem("rceTheme");
    const { header, body, slider, textColor, borderColor, hoverColor }: ThemeState = localItem ? JSON.parse(localItem) : {};
    const [allTheme, setAllTheme] = useState<ThemeState>({
        header: header || 'rgba(153,161,179,.2)',
        body: body || 'white',
        slider: slider || '#f8fafc',
        textColor: textColor || 'black',
        borderColor: borderColor || 'rgba(156,163,175,0.5)',
        hoverColor: hoverColor || 'bg-slate-100'
    })
    return (
        <Theme.Provider value={{ allTheme, setAllTheme }}>
            {children}
        </Theme.Provider>
    )
}
export default ThemeContext