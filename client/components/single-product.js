import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleProductThunk} from '../store/products'
import {addToCartThunk} from '../store/cart'
import axios from 'axios'

class SingleProduct extends Component {
  // constructor() {
  //   super();
  //   this.handleAddToCart = this.bind.handleAddToCart(this);
  // }

  componentDidMount() {
    this.props.onloadProduct(
      this.props.match.params.itemType,
      this.props.match.params.id
    )
  }

  //handleAddToCart = (evt, product) => {
  // prevent default if submit
  // take our current product
  // find product id
  // push that product ID into cart - use route somehow
  // allow dupes

  //evt.preventDefault()
  //console.log('product', product)
  // let product = this.props.product[0]
  //invoke addToCart route
  // await axios.put('/api/cart/add', {
  //   id: product.id,
  //   name: product.name,
  //   price: product.price,
  //   imgUrl: product.imgUrl
  // })
  // this.props.onAddToCart()
  //}

  render() {
    let product = this.props.product[0]
    if (product) {
      return (
        <div className="single-product-item">
          <img src={this.props.product[0].imgUrl} />

          <div className="single-product-content">
            <div>{this.props.product[0].name}</div>
            <div className="price">Price: ${product.price} </div>

            <button
              className="add-to-cart"
              type="submit"
              onClick={this.props.onAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )
    } else {
      return <div>Component is loading</div>
    }
  }
}

const mapStateToProps = state => ({
  product: state.products.singleProduct
})

const mapDispatchToProps = dispatch => ({
  onloadProduct: (itemType, id) => {
    dispatch(getSingleProductThunk(itemType, id))
  },
  onAddToCart: product => {
    console.log('onAddToCart is being called')
    dispatch(addToCartThunk(product))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
