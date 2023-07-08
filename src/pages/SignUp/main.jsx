import logo from '../../assets/logo.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';


export default function SignUp(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {signUp} = useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault();
        if( nome !== '' && email !== '' && senha !== ''){
            signUp(email, senha, nome)
        }
    }

    return(
        <div className='contaiber-centre'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="logo do sistema de chamados" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Nova conta</h1>
                    <input 
                    type="text" 
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />

                    <input 
                    type="text" 
                    placeholder='email@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                    type="password" 
                    placeholder='senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type='submit'>Cadastrar</button>
                </form>

                <Link to="/">Já possui um conta? Faça o login</Link>
            </div>
        </div>
    )
}