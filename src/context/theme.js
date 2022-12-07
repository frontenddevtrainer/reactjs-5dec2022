import { createContext, useContext, useState } from "react";

const defaultTheme = "light"

const themeContext = createContext(defaultTheme);
const { Provider } = themeContext;

const ThemeProvider = (props)=>{
    const {children} = props;
    const [theme, setTheme] = useState(defaultTheme)
    // HOC - Higher Order Component
    return <Provider value={{ theme, setTheme }}>
        {children}
    </Provider>
}

const useTheme = ()=>{ return useContext(themeContext) }

export {
    themeContext,
    ThemeProvider,
    useTheme
}