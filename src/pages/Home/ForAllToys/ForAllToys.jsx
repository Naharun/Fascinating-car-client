import { Link } from "react-router-dom";


const ForAllToys = ({ allToy }) => {
    const {_id, seller, toyName, seller_email, subCategory, price, availableQuantity } = allToy;
    return (

        <tr>
            <th>$</th>
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{seller_email}</td>
            <td>{subCategory}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td><Link to={`/viewDetails/${_id}`}><button className="btn btn-glass">View Details</button></Link></td>
        </tr>
    );
};

export default ForAllToys;