
import { Button, Checkbox, CircularProgress, CssBaseline, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Paper, Select, Slider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { React, useState } from 'react';
import Products from '../Products/Products';
import './errorPage.css';
import useStyles from './styles';

function valuetext(value) {
    return `${value}`;
}
const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '30px 0 10px 0',
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -15,
        '& *': {
            background: 'transparent',
            color: 'red',
            fontSize: 'small',
            fontFamily: 'Nunito Sans,sans-serif',
            fontWeight: 'bold',
        },
    },
})(Slider);

export default function SpacingGrid({
    products,
    onAddToCart,
    cat,
    filterHandler,
    term,
    rangeKeyword,
    sortValue,
    sortKey,
    notFound,
}) {
    const classes = useStyles();
    const [sortBy, setSortBy] = useState('');
    const [state, setState] = useState({
        all: true,
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
    });
    const [value, setValue] = useState([0, 160000]);

    const rangeHandleChange = (event, newValue) => {
        setValue(newValue);
        rangeKeyword(newValue);
    };

    const handleChange = (event) => {
        setSortBy(event.target.value);
        sortKey(event.target.value);
    };

    const checkboxHandleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { one, two, three, four, five } = state;
     

    let brands = [];
    let filterCat = [];
    let categoryName;
    

    switch (cat) {
        case 'phone':
            // eslint-disable-next-line no-case-declarations
            brands = ['All', 'Apple', 'Asus', 'Realme', 'Samsung', 'Xiaomi'];
            filterCat = ['phone', 'iphone', 'asus', 'realme', 'galaxy', 'xiaomi'];
            categoryName = 'Phone';
            break;
       
        default:
            brands = ['All', 'Apple', 'Asus', 'Realme', 'Samsung', 'Xiaomi'];
            filterCat = ['phone', 'iphone', 'asus', 'realme', 'galaxy', 'xiaomi'];
            categoryName = 'Other';
            break;
    }

    return (
        <>
            {notFound ? (
                <div className="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>Oops!</h1>
                            <h2>Products can't be found</h2>
                        </div>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => window.location.reload(false)}
                        >
                            RELOAD
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    {products.length !== 0 ? (
                        <>
                            <CssBaseline />
                            <div className={classes.root}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <Paper elevation={0} className={classes.paper1}>
                                            <section>
                                                <div className={classes.filter}>
                                                    <Typography
                                                        variant="h6"
                                                        color="primary"
                                                        className={classes.filterText}
                                                    >
                                                        Filter
                                                    </Typography>
                                                </div>
                                                <Divider />
                                                <div className={classes.filter}>
                                                    <FormControl
                                                        component="fieldset"
                                                        className={classes.formControl}
                                                    >
                                                        <FormLabel
                                                            component="legend"
                                                            className={classes.filterText}
                                                        >
                                                            Brand
                                                        </FormLabel>
                                                        <FormGroup>
                                                           
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={one}
                                                                        color='primary'
                                                                        onChange={
                                                                            checkboxHandleChange
                                                                        }
                                                                        onClick={
                                                                            one
                                                                                ? () =>
                                                                                      filterHandler(
                                                                                          '',
                                                                                          filterCat[1]
                                                                                      )
                                                                                : () =>
                                                                                      filterHandler(
                                                                                          filterCat[1]
                                                                                      )
                                                                        }
                                                                        name="one"
                                                                    />
                                                                }
                                                                label={brands[1]}
                                                            />
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={two}
                                                                        color='primary'
                                                                        onChange={
                                                                            checkboxHandleChange
                                                                        }
                                                                        onClick={
                                                                            two
                                                                                ? () =>
                                                                                      filterHandler(
                                                                                          '',
                                                                                          filterCat[2]
                                                                                      )
                                                                                : () =>
                                                                                      filterHandler(
                                                                                          filterCat[2]
                                                                                      )
                                                                        }
                                                                        name="two"
                                                                    />
                                                                }
                                                                label={brands[2]}
                                                            />

                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={three}
                                                                        color='primary'
                                                                        onChange={
                                                                            checkboxHandleChange
                                                                        }
                                                                        onClick={
                                                                            three
                                                                                ? () =>
                                                                                      filterHandler(
                                                                                          '',
                                                                                          filterCat[3]
                                                                                      )
                                                                                : () =>
                                                                                      filterHandler(
                                                                                          filterCat[3]
                                                                                      )
                                                                        }
                                                                        name="three"
                                                                    />
                                                                }
                                                                label={brands[3]}
                                                            />
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={four}
                                                                        color='primary'
                                                                        onChange={
                                                                            checkboxHandleChange
                                                                        }
                                                                        onClick={
                                                                            four
                                                                                ? () =>
                                                                                      filterHandler(
                                                                                          '',
                                                                                          filterCat[4]
                                                                                      )
                                                                                : () =>
                                                                                      filterHandler(
                                                                                          filterCat[4]
                                                                                      )
                                                                        }
                                                                        name="four"
                                                                    />
                                                                }
                                                                label={brands[4]}
                                                            />

                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={five}
                                                                        color='primary'
                                                                        onChange={
                                                                            checkboxHandleChange
                                                                        }
                                                                        onClick={
                                                                            five
                                                                                ? () =>
                                                                                      filterHandler(
                                                                                          '',
                                                                                          filterCat[5]
                                                                                      )
                                                                                : () =>
                                                                                      filterHandler(
                                                                                          filterCat[5]
                                                                                      )
                                                                        }
                                                                        name="five"
                                                                    />
                                                                }
                                                                label={brands[5]}
                                                            />
                                                        </FormGroup>
                                                    </FormControl>
                                                </div>
                                                <Divider />
                                                <div>
                                                    <div className={classes.filter}>
                                                        <Typography
                                                            id="range-slider"
                                                            className={classes.filterText}
                                                            gutterBottom
                                                            style={{ paddingTop: '10px' }}
                                                        >
                                                            Price Range
                                                        </Typography>
                                                    </div>
                                                    <div className={classes.range}>
                                                        <IOSSlider
                                                            value={term}
                                                            onChange={rangeHandleChange}
                                                            valueLabelDisplay="on"
                                                            aria-label="ios slider"
                                                            aria-labelledby="range-slider"
                                                            getAriaValueText={valuetext}
                                                            min={0}
                                                            max={160000}
                                                        />
                                                    </div>
                                                </div>
                                            </section>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={9}>
                                        <Paper elevation={0} className={classes.paper2}>
                                            <section>
                                                <div className={classes.Text}>
                                                    <div>
                                                        <Typography
                                                            variant="h5"
                                                            color="primary"
                                                            className={classes.CategoryName}
                                                        >
                                                            {categoryName}
                                                        </Typography>
                                                        <Typography
                                                            className={classes.ProductAmount}
                                                        >
                                                            {products.length} Products found in{' '}
                                                            {one
                                                                ? brands[1]
                                                                : two
                                                                ? brands[2]
                                                                : three
                                                                ? brands[3]
                                                                : four
                                                                ? brands[4]
                                                                : five
                                                                ? brands[5]
                                                                : categoryName}
                                                        </Typography>
                                                    </div>

                                                    <FormControl
                                                        variant="outlined"
                                                        className={classes.formControl}
                                                    >
                                                        <InputLabel id="demo-simple-select-outlined-label">
                                                            Sort By
                                                        </InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-outlined-label"
                                                            id="demo-simple-select-outlined"
                                                            value={sortValue}
                                                            onChange={handleChange}
                                                            label="Sort By"
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>
                                                                Low to High
                                                            </MenuItem>
                                                            <MenuItem value={20}>
                                                                High to Low
                                                            </MenuItem>
                                                            <MenuItem value={30}>
                                                                Name(A - Z)
                                                            </MenuItem>
                                                            <MenuItem value={40}>
                                                                Name(Z - A)
                                                            </MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className={classes.product}>
                                                    <Products
                                                        products={products}
                                                        onAddToCart={onAddToCart}
                                                    />
                                                </div>
                                            </section>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>
                        </>
                    ) : (
                        <div className={classes.spinner}>
                            <CircularProgress />
                        </div>
                    )}
                </>
            )}
        </>
    );
}
