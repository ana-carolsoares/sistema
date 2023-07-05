import { useState, createContext, useEffect  } from "react";

export const AuthContext = createContext({}); 

function AuthProvider({children}){
    const [user, setUser] = useState(null)

    function signIn(email, senha){
        console.log(email)
        console.log(senha)
        alert("Logado com sucesso")
    }


    return(
        <AuthContext.Provider 
        value={{
            signed: !!user,
            user,
            signIn
        }}
        >
            {children}
        </AuthContext.Provider>    
    )
}

export default AuthProvider;