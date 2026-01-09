import { createContext , useReducer } from "react";
import Login from "./Login";
import Logout from "./Logout";
import "./App.css";

export const AuthenticateContext = createContext();
const initialAuth = 
  { isAuthentication : false,
    user : {
      name : "",
      email : ""
    }
  };

const AuthReducer = ( auth , action)=>{
  switch (action.type){
    case "LOGIN":
      return{
        user : {
          name : action.payload.name,
          email : action.payload.email
        },
        isAuthentication : true
      };
    case "LOGOUT":
      return {
        user : {
          name : "",
          email : ""
        },
        isAuthentication : false
      };
    default:
      return auth;
  }
}
function App(){
  const [auth , dispatch] = useReducer( AuthReducer,initialAuth );
  const login = (name, email) => {
    if (name && email) {
      dispatch({
        type: "LOGIN",
        payload: { name, email }
      });
    }
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <AuthenticateContext.Provider value={{ auth , login, logout  }}>
       {auth.isAuthentication ? <Logout/> : <Login/>} 
    </AuthenticateContext.Provider>
  )
}
export default App;