import React, { useEffect, useState } from 'react'
import { useParams,} from 'react-router-dom'
import ProductList from './ProductList';



const ChipProduct = ({listproduct,fetchListProduct,onAddToCart,isLoading}) => {
    let { name } = useParams();
    const [cat, setCat] = useState('');


    useEffect(() => {
        fetchListProduct(name)
        setCat(name)
          }, [name])

  return (
    <ProductList listproduct = {listproduct} cat={cat} isLoading = {isLoading} onAddToCart={onAddToCart} handleUpdateCartQty />
  );
};

export default ChipProduct;
