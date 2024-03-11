import {Component} from 'react'
import Products from '../Products'
import './index.css'

class ProductsGrid extends Component {
  state = {productsList: []}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const url = ' https://fakestoreapi.com/products'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({productsList: data})
  }

  render() {
    const {productsList} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="main-heading">Products</h1>
          <ul className="ul-container">
            {productsList.map(eachProduct => (
              <Products productDetails={eachProduct} key={eachProduct.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default ProductsGrid
