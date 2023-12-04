import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import useTitle from "../../hooks/useTitle";


const Login = () => {
    useTitle('Login')
    const { signIn, setUser } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Success!',
                    text: 'You are logged in Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                setUser(user)
                form.reset();
            })
            .catch(error => console.log(error))

    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            Swal.fire({
                title: 'Success!',
                text: 'You are logged in Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            setUser(user)
            navigate(from, {replace: true})
        })
        .catch(error => {})
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Login Now</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning" type="submit" value="login" />
                            </div>
                            <div className="form-control mt-6">
                                <input onClick={handleGoogleLogin} className="btn btn-glass" type="submit" value="G Login with Google" />
                            </div>
                        </form>
                        <p>Do not have an Account? Please  <Link className="link link-error font-bold" to="/registration">Registration</Link></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;