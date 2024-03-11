import {Component} from 'react'
import {FaStar} from 'react-icons/fa'

import './index.css'

class ProductItemDetails extends Component {
  state = {productDetails: []}

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = ` https://fakestoreapi.com/products/${id}`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({productDetails: data})
  }

  render() {
    const {productDetails} = this.state
    const {title, description, category, price, image} = productDetails
    return (
      <div className="product-details-container">
        <div>
          <h1 className="heading">{title}</h1>
          <p className="description">{description}</p>
          <p className="category">
            <span className="cate">Category:</span> {category}
          </p>
        </div>
        <div>
          <img src={image} alt={title} className="product-img" />
          <div>
            <p className="price">Rs.{price}</p>
            <FaStar className="star-img" />
          </div>
        </div>
      </div>
    )
  }
}
export default ProductItemDetails
