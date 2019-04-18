import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <Link to="/home">
        <img src="/images/logo/Orchid-Raven-Logo.png" />
      </Link>
      <div>
        <div className="nav-left">
          <Link to="/products/featured">Featured Products</Link>
          <Link to="/products">All Products</Link>
        </div>
      </div>
      {isLoggedIn ? (
        <div className="nav-right">
          {/* The navbar will show these links after you log in */}
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">Cart<i className="fas fa-shopping-cart"></i></Link>
        </div>
      ) : (
        <div className="nav-right">
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">Cart<i className="fas fa-shopping-cart"></i></Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
