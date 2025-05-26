// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination

  return (
    <li className="">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
