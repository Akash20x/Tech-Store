import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Paper, Box } from "@material-ui/core";

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  // const renderEmptyCart = () => (
  //   <Typography variant="subtitle1">You have no items in your shopping cart,
  //     <Link className={classes.link} to="/">start adding some</Link>!
  //   </Typography>
  // );

  const renderEmptyCart = () => {
    return (
      <Box className={classes.centerPaper}>
        <Paper className={classes.wishlistPaper} elevation={5}>
          <Box>
            <Typography display="block" variant="h4" align="center">
              Your Cart is empty
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" display="block" className={classes.text}>
              <Link className={classes.link} to="/">Click here</Link> to add some items to your cart
            </Typography>
          </Box>
        </Paper>
      </Box>
    );
  };




  if (!cart.line_items) return (
    <div className={classes.space}>
  <Typography variant="h5" className={classes.loadtext}>Loading Your Cart....</Typography>
  </div>
 )


  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography
        variant="h4"
        color="primary"
        align="center"
        className={classes.pageTitle}
      >
        Your Shopping Cart
      </Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
