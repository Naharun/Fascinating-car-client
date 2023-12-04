import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <progress className="progress w-1/2 my-10 lg:w-1/5 mx-auto"></progress>
    }
    if(user){
        return children;
    }
    return ( <Navigate state={{from: location}} to='/login' replace></Navigate>);
};

export default PrivateRoute;