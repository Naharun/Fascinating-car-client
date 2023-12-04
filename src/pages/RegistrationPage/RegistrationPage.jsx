import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const RegistrationPage = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email,photo, password);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'Success!',
                text: 'User Created Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            form.reset();
        })
        .catch(error => console.log(error))
        return;
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Registration Now</h2>
                        <form onSubmit={handleRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning" type="submit" value="registration" />
                            </div>
                        </form>
                        <p><Link className="link link-error font-bold" to="/login">Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RegistrationPage;