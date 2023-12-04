import { FaRegStar, FaStar  } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const SingleCarDetails = () => {
    const singleCarData = useLoaderData();
    console.log(singleCarData);
    const { _id, img, seller, toyName, seller_email, subCategory, price, availableQuantity, details, rating } = singleCarData;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-5">{toyName}</h1>
                    <p className="py-2">Seller Name: {seller}</p>
                    <p className="py-2">Seller Email: {seller_email}</p>
                    <p className="py-2">Category: {subCategory}</p>
                    <p className="py-2">$ {price}</p>
                    <p className="py-2">Available: {availableQuantity}</p>
                    <div className='flex items-center space-x-4'>
                        <Rating className='text-warning flex-grow-1'
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar/>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <p className="py-2 font-semibold">{rating}</p>
                    </div>
                    <p className="py-2">{details}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCarDetails;