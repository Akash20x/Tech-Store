import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { grey, blue } from '@material-ui/core/colors'
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';
import CategoryList from './components/CategoryList';
import ChipProduct from './components/ChipProduct';
import Category from './components/Category/Category';
import { Navbar, Products, Cart, Checkout ,DetailedProduct,Recommended,NewArrival,FooterContainer} from './components';
import { commerce } from './lib/commerce';
import Home from './components/Home/Home';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



const App = () => {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [rangeCheck, setRangeCheck] = useState(false);
  const [catFetchCheck, setCatFetchCheck] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [cat, setCat] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [checkValue, setCheckValue] = useState(0);
  const [rangeTerm, setRangeTerm] = useState([0, 120000]);
  const [sortValue, setSortValue] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [isLoading, setIsLoading] = useState(true)
  const [listproduct, setListProduct] = useState([])
  const [nLoading, setNLoading] = useState(false);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [rLoading, setRLoading] = useState(false);


  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: blue[500],
      },
      secondary: {
        main: grey[50],
      },
      background: {
        default: darkMode ? '#111' : '#fafafa',
        paper: darkMode ? '#212121' : '#fff',
      },
    },
  });
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode))
    
  }, [darkMode])
   
  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    
    if (isReturningUser) {
         return savedMode
    } else if (userPrefersDark) { 
         return true;
    } else { 
         return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;

      return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  const fetchListProduct = async (slug) => {
    const { data } = await commerce.products.list({ category_slug: [slug]})
    setIsLoading(false)
    setListProduct(data)
  }

  const fetchNewArrivalProducts = async (slug = 'new-arrival') => {
    setNLoading(false);
    const { data } = await commerce.products.list({
        category_slug: [slug],
    });
    setNewArrivalProducts(data);
    setNLoading(true);
};

const fetchRecommendedProducts = async (slug = 'recommended') => {
    setRLoading(false);
    const { data } = await commerce.products.list({
        category_slug: [slug],
    });
    setRecommendedProducts(data);
    setRLoading(true);
};

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
        limit: 100,
    });

    setProducts(data);
};

  
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    return(
      toast.success('one product has been successfully added.', {autoClose: 5000 }),
      setCart(item.cart)
    )
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    return(
      toast.warning('One product has been removed successfully.', {autoClose: 5000 }),
      setCart(response.cart)
    )
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    return(
      toast.warning('The cart is empty now.', {autoClose: 5000 }),
      setCart(response.cart)
    )
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleProductDetails = () => {
    
    setIsLoading(false)
};

const fetchProductByCategory = async (slug) => {
  setCat(slug);
  const { data } = await commerce.products.list({
      category_slug: [slug],
      limit: 200,
  });
  setCategoryProducts(data);
  setCatFetchCheck(true);
}




  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };



const filterHandler = (term, uncheck = '') => {
    setFilterTerm(term);
    setCatFetchCheck(false);
    if (rangeCheck) {
        if (term !== '') {
            setRangeCheck(false);
            setCheckValue(checkValue + 1);
            const newProductList = categoryProducts.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
            if (newProductList.length > 0) {
                setNotFound(false);
                setFilterResults(newProductList);
            } else {
                setNotFound(true);
            }
        } else {
            setRangeCheck(false);
            setFilterResults(filterResults);
        }
    } else if (rangeCheck === false) {
        if (term !== '') {
            setCheckValue(checkValue + 1);
            if (checkValue > 0) {
                const newProductList = categoryProducts.filter((product) =>
                    product.name.toLowerCase().includes(term.toLowerCase())
                );
                setFilterResults([...filterResults, ...newProductList]);
            } else {
                const newProductList = categoryProducts.filter((product) =>
                    product.name.toLowerCase().includes(term.toLowerCase())
                );
                if (newProductList.length > 0) {
                    setNotFound(false);
                    setFilterResults(newProductList);
                } else {
                    setNotFound(true);
                }
            }
        } else {
            setCheckValue(checkValue - 1);
            if (checkValue > 1) {
                const newProductList = filterResults.filter(
                    (product) => !product.name.toLowerCase().includes(uncheck.toLowerCase())
                );
                if (newProductList.length > 0) {
                    setNotFound(false);
                    setFilterResults(newProductList);
                } else {
                    setNotFound(true);
                }
            } else {
                setFilterResults(categoryProducts);
            }
        }
    }
};

const rangeHandler = (rangeTerm) => {
    setRangeTerm(rangeTerm);
    setCatFetchCheck(false);

    if (filterTerm !== '') {
        if (rangeTerm[0] > 0 || rangeTerm[1] < 160000) {
            setRangeCheck(true);
            const newProductList = categoryProducts.filter((product) =>
                _.inRange(product.price.raw, rangeTerm[0], rangeTerm[1])
            );

            if (newProductList.length > 0) {
                setNotFound(false);
                setFilterResults(newProductList);
            } else {
                setNotFound(true);
            }
        } else {
            setFilterResults(categoryProducts);
        }
    } else if (filterTerm === '') {
        if (rangeTerm[0] > 0 || rangeTerm[1] < 160000) {
            setRangeCheck(true);
            const newProductList = categoryProducts.filter((product) =>
                _.inRange(product.price.raw, rangeTerm[0], rangeTerm[1])
            );

            if (newProductList.length > 0) {
                setNotFound(false);
                setFilterResults(newProductList);
            } else {
                setNotFound(true);
            }
        } else {
            setFilterResults(categoryProducts);
        }
    }
};

const handleSort = (sortValue) => {
    setSortValue(sortValue);

    if (filterTerm !== '' && (rangeCheck || rangeCheck === false)) {
        if (sortValue === 10) {
            filterResults.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
        } else if (sortValue === 20) {
            filterResults.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
        } else if (sortValue === 40) {
            filterResults.sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
            );
        } else {
            filterResults.sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            );
        }
    } else if (filterTerm === '' && rangeCheck) {
        if (sortValue === 10) {
            filterResults.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
        } else if (sortValue === 20) {
            filterResults.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
        } else if (sortValue === 40) {
            filterResults.sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
            );
        } else {
            filterResults.sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            );
        }
    } else if (filterTerm === '' && rangeCheck === false) {
        if (sortValue === 10) {
            categoryProducts.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
        } else if (sortValue === 20) {
            categoryProducts.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
        } else if (sortValue === 40) {
            categoryProducts.sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
            );
        } else {
            categoryProducts.sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            );
        }
    }
};





  useEffect(() => {
    fetchProducts();
    fetchProductByCategory('other');
    fetchNewArrivalProducts();
    fetchRecommendedProducts();
    fetchCart();
    handleProductDetails();
    fetchListProduct();
  }, []);


  return (
      <ThemeProvider theme={theme}>
    <Router>
    <ToastContainer /> 
      <>
        <Navbar products={products} totalItems={cart.total_items} fetchProductByCategory={fetchProductByCategory} 
         handleDarkMode={handleDarkMode} darkMode={darkMode}
         />                  
        <div style={{ marginBottom: '65px' }}>
        </div>

        <Routes>
          <Route path="/" element ={
          <>
           <Home />
          <CategoryList /> 
          <Products products={categoryProducts} fetchProductByCategory={fetchProductByCategory} onAddToCart={handleAddToCart} handleUpdateCartQty /> 
          <NewArrival
                products={newArrivalProducts}
                fetchNewArrivalProducts={fetchNewArrivalProducts}
                onAddToCart={handleAddToCart}
                loading={nLoading}
            /> 
            <Recommended
                    products={recommendedProducts}
                    fetchRecommendedProducts={fetchRecommendedProducts}
                    onAddToCart={handleAddToCart}
                    loading={rLoading}
                /> 
          </>
          } />
          <Route path="/cart" element ={ <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} 
                    onRemoveFromCart={handleRemoveFromCart}  onEmptyCart={handleEmptyCart} /> }/>
          <Route path="/checkout" element={ <Checkout cart={cart} order={order} 
                  onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />   
          <Route path="/detailedProduct/:productId" element={<DetailedProduct products={products} isLoading={isLoading}
            onAddToCart={handleAddToCart} />} />
            <Route path="/category" element={
                        <Category
                            products={
                                catFetchCheck
                                    ? categoryProducts
                                    : rangeCheck
                                    ? filterResults
                                    : filterTerm.length > 1
                                    ? filterResults
                                    : checkValue > 0
                                    ? filterResults
                                    : categoryProducts
                            }
                            fetchProductByCategory={fetchProductByCategory}
                            onAddToCart={handleAddToCart}
                            cat={cat}
                            filterHandler={filterHandler}
                            term={rangeTerm}
                            rangeKeyword={rangeHandler}
                            sortValue={sortValue}
                            sortKey={handleSort}
                            notFound={notFound}
                        />
                        }>
                    </Route>
             
                    <Route path="/chip/:name" element ={
                    <ChipProduct listproduct = {listproduct} fetchListProduct = {fetchListProduct} isLoading = {isLoading} onAddToCart={handleAddToCart} handleUpdateCartQty />
                    } />   
        </Routes>
        <FooterContainer />
      </>
    </Router>
    </ThemeProvider>
  );
};

export default App;
