import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const toyData = useLoaderData();
    const { _id, price, subCategory, availableQuantity, details, toyName } = toyData;
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const details = form.details.value;
        const updatedData = { price, availableQuantity, details };
        console.log(updatedData);

        fetch(`https://fascinating-cars-server.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your toy data Updated Successfully!',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    form.reset();
                }

            })
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Update Data</h2>
            <hr className='md:w-1/2 mx-auto my-2' />
            <form onSubmit={handleUpdate} className=''>
                <div className="card-body md:w-1/2 mx-auto shadow-lg">
                    <h1 className='text-3xl md:mb-6 font-bold'>{toyName}</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Sub Category</span>
                        </label>
                        <input type="text" name="subCategory" placeholder="subCategory" defaultValue={subCategory} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Available Quantity</span>
                        </label>
                        <input type="text" name="availableQuantity" placeholder="quantity" defaultValue={availableQuantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="details" defaultValue={details} className="h-40 input input-bordered" />
                    </div>
                    <div className="form-control mt-5">
                        <button className="btn btn-warning w-1/4 mx-auto">Update</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Update;