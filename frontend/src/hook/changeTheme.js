import { useTheme } from "../context/themeContext";

export const changetheme = () => {
    const { allTheme, setAllTheme } = useTheme();
    const chnage = () => {
        if (allTheme.body === 'white') {
            setAllTheme({
                ...allTheme,
                header: 'rgb(43,58,60)',
                body: 'rgb(43,58,66)',
                slider: 'rgb(43,58,70)',
                textColor: 'white',
                borderColor: 'rgb(156,163,175)',
                hoverColor: 'bg-gray-400'
            })
            localStorage.setItem("rceTheme",JSON.stringify({header: 'rgb(43,58,60)',body: 'rgb(43,58,66)',slider: 'rgb(43,58,70)',textColor: 'white',borderColor: 'rgb(156,163,175)',hoverColor: 'bg-gray-400'}))
        }
        else {
            setAllTheme({
                ...allTheme,
                header: 'rgba(153,161,179,.2)',
                body: 'white',
                slider: '#f8fafc',
                textColor: 'black',
                borderColor: 'rgba(156,163,175,0.5)',
                hoverColor: 'bg-slate-100'
            })
            localStorage.setItem("rceTheme",JSON.stringify({  header: "rgba(153,161,179,.2)",body: 'white',slider: '#f8fafc',textColor: 'black',borderColor: 'rgba(156,163,175,0.5)',hoverColor: 'bg-slate-100'}))
        }
    }
    return { chnage }
}