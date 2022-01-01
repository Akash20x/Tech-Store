import React, { useEffect, useState } from 'react'
import { Typography, Grid, CircularProgress, Box } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Product from './Products/Product/Product';
import Home from './Home/Home';

import CategoryList from './CategoryList'


const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
  progress: {
    textAlign: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function ProductList({listproduct,cat,onAddToCart,isLoading}) {
  const classes = useStyles()

  return (
    <>
    <Home />
     <main className= {classes.content}>
           <CategoryList /> 
      <Box mt={3} mb={3}>
        <Typography
          variant="h4"
          component="h1"
          className={classes.title}
          style={{ fontWeight: 500 }}
        >
          {cat|| 'Products'}
        </Typography>
      </Box>
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <>
          <Grid  container justifyContent="center" spacing={4} >
            {listproduct.map((product) => (
                <Grid item key={product.id} xs={12} sm = {6} md = {4} lg = {3}>  
              <Product product={product} onAddToCart= {onAddToCart} />
               </Grid>
            ))}
          </Grid>
         
        </>
      )}
    </main>
    </>
  )
}






















// import React,{useEffect} from 'react';
// import Grid from '@material-ui/core/Grid';
// import { Typography } from '@material-ui/core';

// import { Container } from '@mui/material';
// import Product from './Product/Product';
// import useStyles from './styles';


// const Products = ({ products, onAddToCart,handleProductDetails }) => {
 
//   const classes = useStyles();

//   return (
//     <main className= {classes.content}>
//         <div className={classes.toolbar}/>
//         <Grid container justifyContent="center" spacing={4}>
//             {products.map((product) => (
//                 <Grid item key={product.id} xs={12} sm = {6} md = {4} lg = {3}>  
//                     <Product product={product} onAddToCart= {onAddToCart} handleProductDetails={handleProductDetails}/>
//                 </Grid>
//             ))}
//         </Grid>
//     </main>
//     )
  
// };

// export default Products;

