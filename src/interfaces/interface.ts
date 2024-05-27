export interface ThemeState {
    header: string;
    body: string;
    slider: string;
    textColor: string;
    borderColor: string;
    hoverColor: string;
}
export interface ChangeState {
    allTheme: ThemeState,
    setAllTheme: React.Dispatch<ThemeState>
}
export interface language{
    language:string,
    snippet:string
}
export interface languageState{
    lan:language,
    setLan:React.Dispatch<language>
}
export interface startedSnippet{
    [key: string]: string;
}