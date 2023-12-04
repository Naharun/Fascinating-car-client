import { Link, useRouteError } from "react-router-dom";
import image from '../assets/images/images.jpg';



const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <div className='text-center'>
                        <img src={image} alt="" />
                    </div>
                    <div className='text-center'>
                        <h2 className='mb-8 fw-extrabold'>
                            <span>Error</span> {status || 404}
                        </h2>
                        <p className=' fw-semibold fs-3 mb-8'>
                            {error?.message}
                        </p>
                        <Link
                            to='/'
                            className='px-8 py-3 fw-semibold rounded'
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;