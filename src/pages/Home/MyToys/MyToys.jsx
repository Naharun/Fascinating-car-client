import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useTitle from "../../../hooks/useTitle";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";


const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    useTitle('My Toys')

    useEffect(() => {
        fetch(`https://fascinating-cars-server.vercel.app/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            });
    }, [user])
    const handleDelete = id => {
        // console.log(id);
        const confirm = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                if (confirm) {
                    fetch(`https://fascinating-cars-server.vercel.app/myToys/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remaining = myToys.filter(td => td._id !== id);
                                setMyToys(remaining);
                            }
                        })
                }
            }
        })

    }
    console.log(myToys);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys.map(toy => <MyToysRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;