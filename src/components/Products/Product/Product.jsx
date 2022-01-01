import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  Typography,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  desc: {
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}))

export default function Product({product, onAddToCart }) {
  const classes = useStyles()
  const navigate = useNavigate();


  const handleAddToCart = () => onAddToCart(product.id, 1);

  const navigateToDetails = () => {

    navigate(`/detailedProduct/${product.id}`)
  }

  return (
      <Card variant="outlined">
        <CardActionArea onClick={navigateToDetails}>
          <CardMedia image={product.image.url} title={product.name} className={classes.media} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ fontWeight: 500 }}
            >
              {product.name}
            </Typography>
           
          
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <Typography
                display="inline"
                gutterBottom
                variant="body1"
              >
                {product.price.formatted_with_symbol}
              </Typography>
              
            </Grid>
          </CardContent>
          </CardActionArea>
          <CardActions disableSpacing className={classes.cardActions}>
         
                    <Button className="product__btn btn w-100 p-1 shadow-none rounded mx-auto" variant="contained" color="primary" onClick={handleAddToCart}>
                    Add to cart
                 </Button>
      
      </CardActions>
      </Card>
  )
}
