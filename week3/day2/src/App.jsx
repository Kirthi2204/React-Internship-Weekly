import { createContext,useState } from "react";
import ThemeDark from "./ThemeDark";
import ThemeLight from "./ThemeLight";
import "./App.css";

export const context = createContext();

function App(){
  const [ dark , setDark ] = useState(false);
  const theme = {
    background : dark ? "#DE441F" : "#E3B7AC"
  };
  return(
    <context.Provider value = {theme}>
      <div style={{minHeight : "100vh" , width : "200vh" , background : theme.background}} className="button">
        <button onClick={() => setDark(!dark)}>
          {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        {dark ? <ThemeDark/> : <ThemeLight/>}
      </div>
    </context.Provider>
  )

}
export default App;