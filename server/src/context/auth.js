import { createContext, useEffect, useState } from "react";
import axios from  'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
  
    const signin = (email, senha) => {
        axios.post('http://localhost:5000/auth', {
            email: email,
            senha: senha
          }).then((response) => {
                if(response.data.senha === senha){
                    setUser(true);
                    return true;
                }else{
                    return false;
                }
            }).catch((error) => {
              console.log(error);
            });
    };
  
  
    const signout = () => {
      setUser(false);
    };
  
    return (
      <AuthContext.Provider
        value={{ user, signed: !!user, signin, signout }}
      >
        {children}
      </AuthContext.Provider>
    );
  };