import axios from 'axios'

const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER'


const getSingleOrder = order => ({
  type: GET_SINGLE_ORDER,
  order
})

export const getSingleOrderThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/order/${id}`)
    dispatch(getSingleOrder(data))
  } catch (error) {
    console.error(error)
  }
}

const initialState = {
  orders: [],
  singleOrder: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_ORDER:
      return {...state, singleOrder: action.order}
    default:
      return state
  }
}
