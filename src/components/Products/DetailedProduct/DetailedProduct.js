import React, { useEffect,useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Paper, Typography, Button, Box,CircularProgress } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  content: {
    height: '100%',
  },
  progress: {
    textAlign: 'center',
  },
  image: {
    height: 200,
    borderRadius: '3px',
  },
  amountContainer: {
    marginBottom: theme.spacing(2),
  },
  amount: {
    padding: theme.spacing(0, 2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function DetailedProduct({products,onAddToCart,isLoading}) {
  let { productId } = useParams();
  const classes = useStyles()
  const theme = useTheme()
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'))

  const item = products.filter(
    (item) => item.id === productId
  )[0];

const [exists, setExists] = useState('')
const handlecartclick = () => {
    onAddToCart(item.id, 1);
    setExists('done');
}

  useEffect(() => {
    isLoading
  }, [])

 

  return (
    <main className= {classes.content}>
    <Box my={4}>
      <Paper className={classes.root} variant="outlined">
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid
          container
          spacing={6}
          justify={isMediumUp ? 'flex-start' : 'center'}
        >
          <Grid item style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={item.image.url}
              alt={item.name}
              className={classes.image}
            />
          </Grid>
          <Grid
            item
            style={{ maxWidth: isMediumUp ? 'calc(100% - 600px)' : '' }}
          >
            <Grid
              container
              className={classes.content}
              direction="column"
              justify="space-around"
              style={{ padding: 10 }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h1"
                  style={{ fontWeight: 500 }}
                  gutterBottom
                >
                  {item.name}
                </Typography>
                <Typography variant="body1">
                ₹{item.price.formatted}
                </Typography>
                <Box mt={4} mb={2}>
                  <Typography 
                  dangerouslySetInnerHTML={{ __html: item.description,
                                         }}
                   variant="body1" color="textSecondary">
                  </Typography>
                </Box>
              </Grid>
              {exists && 
                <Typography
                  variant="body1"
                  color="primary"
                  style={{ fontWeight: 500,marginBottom:20 }}
                >
                  The product has been added to your cart
                </Typography>
              }
                <Grid item>
               
                  <Button
                    variant="outlined"
                    color="textPrimary"
                    exists={"gg"}
                    onClick={handlecartclick}
                    disableElevation
                  >
                    Add to Cart
                  </Button>
                </Grid>
        
            </Grid>
          </Grid>
        </Grid>
      )}
      </Paper>
    </Box>
    </main>
  )
}