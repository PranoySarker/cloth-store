import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../../assets/crown.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

// import { userContext } from "../../../contexts/user.context";
// import { CartContext } from "../../../contexts/cart.context";

// import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { signOutStart } from "../../../store/user/user.action";

const Navigation = () => {
  // const { currentUser } = useContext(userContext);
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  console.log(currentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crownlogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
