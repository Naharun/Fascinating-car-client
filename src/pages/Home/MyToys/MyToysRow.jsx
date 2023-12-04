import { Link } from "react-router-dom";

const MyToysRow = ({toy,handleDelete}) => {
    const { _id, toyName,  subCategory, price, availableQuantity} = toy;
    console.log(toy);
    return (
        <tr>
            <th>{toyName}</th>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>{subCategory}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-success">Delete</button></td>
            <td><Link to={`/updateToy/${_id}`} className="btn btn-warning text-black">Update</Link></td>
        </tr>
    );
};

export default MyToysRow;