import { useContext } from "react";
import { AuthContext } from ".";

const Home = () => {
    const {name} = useContext(AuthContext);
  return (
    <div>
        <h2>My Name is {name}</h2>
    </div>
     
  )
}

export default Home