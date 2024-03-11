import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import './index.css'

const Products = props => {
  const {productDetails} = props
  const {title, image, id, price, rating} = productDetails
  return (
    <Link to={`/products/${id}`} className="product">
      <img src={image} className="image" alt={title} />
      <div className="content-container">
        <div>
          <h3>{title}</h3>
          <p className="price-item">Rs.{price}</p>
        </div>
        <div className="star-container">
          <p>{rating.rate}</p>
          <FaStar className="star" />
        </div>
      </div>
    </Link>
  )
}
export default Products
