import {Outlet, Link} from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo  } from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss'

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  // console.log(currentUser)
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to={'/'}><div><CrwnLogo /></div></Link>
          <div className="nav-links-container">
            <Link className="nav-link" to={'/shop'}>Shop</Link>
          {currentUser ? (<span className="nav-link" onClick={signOutUser}>Sign Out</span>) : (<Link className="nav-link" to={'/auth'}>Sign In</Link>)}
          <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }
  export default Navigation;