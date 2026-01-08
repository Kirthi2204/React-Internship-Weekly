import { useContext } from "react";
import { context } from "./App";

function ThemeDark (){
    const theme = useContext(context);

    return(
        <div style={{ background : theme.background , width : "300%", height : "300%" }}>
            
        </div>
    )
}
export default ThemeDark;