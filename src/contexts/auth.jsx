import { useState, createContext, useEffect  } from "react";
import { auth, db} from '../services/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const AuthContext = createContext({}); 

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    //fazer login
    function signIn(email, senha){
        console.log(email)
        console.log(senha)
        alert("Logado com sucesso")
    }

    //cadastrar novo user
    async function signUp(email, senha, nome){
        setLoadingAuth(true);
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(async(value)=> {
            let uid = value.user.uid
            await setDoc(doc(db, "users", uid), {
                nome: nome,
                avatarUrl: null,
            })
            .then(()=>{
                alert("cadastrado com sucesso")
                setLoadingAuth(false);
            })
        })
        .catch((error) =>{
            console.log(error);
            setLoadingAuth(false);
        })
    }


    return(
        <AuthContext.Provider 
        value={{
            signed: !!user,
            user,
            signIn,
            signUp
        }}
        >
            {children}
        </AuthContext.Provider>    
    )
}

export default AuthProvider;