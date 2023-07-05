import './signin.css'
import logo from '../../assets/logo.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {signIn} = useContext(AuthContext);

    function handleSignIn(e){
        e.preventDefault();
        if(email !== '' && senha !== ''){
            signIn(email, senha);
        }
    }

    return(
        <div className='contaiber-centre'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="logo do sistema de chamados" />
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>
                    <input 
                    type="text" 
                    placeholder='email@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                    type="password" 
                    placeholder='****'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type='submit'>Acessar</button>
                </form>

                <Link to="/registro">Criar uma conta</Link>
            </div>
        </div>
    )
}