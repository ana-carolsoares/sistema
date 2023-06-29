import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/main';
import SignUp from '../pages/SignUp/main';
import Dashboard from '../pages/Dashboard/main';

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <SignIn/> } />
            <Route path='/registro' element={ <SignUp/> } />
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    )
}

export default RoutesApp;