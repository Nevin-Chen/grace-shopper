import axios from 'axios'

const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const getCartItems = cartItems => ({
  type: GET_CART_ITEMS,
  cartItems
})

const addToCart = cartItem => ({
  type: ADD_TO_CART,
  cartItem
})

export const getCartItemsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cart')
    dispatch(getCartItems(data))
  } catch (error) {
    console.error(error)
  }
}

export const addToCartThunk = product => async dispatch => {
  try {
    console.log('thunk is being called')
    console.log('product from single product component', product)
    const {data} = await axios.put('/api/cart/add', {
      id: product.id,
      name: product.name,
      price: product.price,
      imgUrl: product.imgUrl
    })
    dispatch(addToCart(data))
  } catch (error) {
    console.error(error)
  }
}

const initialState = {
  cart: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {...state, cart: action.cartItems}
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.cartItem]}
    default:
      return state
  }
}