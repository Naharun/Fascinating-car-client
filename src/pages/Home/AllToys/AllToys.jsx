import useTitle from "../../../hooks/useTitle";
import ForAllToys from "../ForAllToys/ForAllToys";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const allToys = useLoaderData();
    useTitle('All Toys')
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Seller Email</th>
                        <th>Category</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map(allToy => <ForAllToys key={allToy.id} allToy={allToy}></ForAllToys>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;