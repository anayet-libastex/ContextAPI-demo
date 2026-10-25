import { useContext } from "react";
import { AuthContext } from ".";


const About = () => {
    const {country} = useContext(AuthContext)
  return (
    <div>
        <h2>I Love {country}</h2>
    </div>
  )
}

export default About