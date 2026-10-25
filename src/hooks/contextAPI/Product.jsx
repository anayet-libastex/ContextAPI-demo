import { useContext } from "react";
import { AuthContext } from ".";
import Nayoks from "./Nayoks";

const Product = () => {
    const {data , nayoks} = useContext(AuthContext)
  return (
    <div>
        <h2>Product Info</h2>
        <ul>
            {data.map((product, index) => (
            <div key={index}>
                <li>{product.name}</li>
                <li>{product.price}</li>
            </div>
        ))}
        </ul>
       <Nayoks  nayoks={nayoks}></Nayoks>
    </div>
  )
}

export default Product