import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/main';
import SignUp from '../pages/SignUp/main';

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <SignIn/> } />
            <Route path='/registro' element={ <SignUp/> } />
        </Routes>
    )
}

export default RoutesApp;