import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCx = useContext(CartContext);

  const totalAmount = `$${cartCx.totalAmount.toFixed(2)}`;
  const hasItems = cartCx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCx.addItem({...item, amount: 1})

  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
