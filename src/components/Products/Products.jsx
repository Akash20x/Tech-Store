import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { Container } from '@mui/material';
import CategoryList from '../CategoryList';
import Product from './Product/Product';
import useStyles from './styles';


const Products = ({ products, onAddToCart }) => {
 
  const classes = useStyles();

  return (
    <main className= {classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={6}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm = {6} md = {4} lg = {3}>  
                    <Product product={product} onAddToCart= {onAddToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
  
};

export default Products;

