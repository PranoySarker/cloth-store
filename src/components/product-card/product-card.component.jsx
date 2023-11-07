// import { useContext } from "react";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import "./product-card.styles.scss";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  // const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
