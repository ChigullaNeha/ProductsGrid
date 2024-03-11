import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ProductItemDetails from './components/ProductItemDetails'
import ProductsGrid from './components/ProductsGrid'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/products" component={ProductsGrid} />
      <Route exact path="/products/:id" component={ProductItemDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
