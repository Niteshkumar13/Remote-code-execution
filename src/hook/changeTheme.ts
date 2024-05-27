import { ChangeState } from '../interfaces/interface'
export const usechangetheme = ({ allTheme, setAllTheme }: ChangeState)=> {
    const change = () => {
        const newTheme = allTheme.body === "white"
            ? {
                ...allTheme,
                header: "rgb(43,58,60)",
                body: "rgb(43,58,66)",
                slider: "rgb(43,58,70)",
                textColor: "white",
                borderColor: "rgb(156,163,175)",
                hoverColor: "bg-gray-400",
            }
            : {
                ...allTheme,
                header: "rgba(153,161,179,.2)",
                body: "white",
                slider: "#f8fafc",
                textColor: "black",
                borderColor: "rgba(156,163,175,0.5)",
                hoverColor: "bg-slate-100",
            };
        setAllTheme(newTheme);
        localStorage.setItem("rceTheme", JSON.stringify(newTheme));

    };
    return {change};
};

