import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{theme, toggleTheme: ()=> setTheme(theme === 'light'? 'dark' : 'light')}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;