
const Nayoks = ({nayoks}) => {
  return (
    <div>
        <h2>Our Nayoks</h2> 
        <ul>
            {
                nayoks.map((nayok, index) => (
                    <li key={index}>{nayok}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Nayoks