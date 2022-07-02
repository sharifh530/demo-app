import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductSearchBar from '../ProductDetails/ProductSearchBar';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../redux/store';
import { addCart, getCart } from '../../redux/slices/products';

const NewOrderComp = () => {
  const [filterName, setFilterName] = useState('');

  const { id } = useParams();

  const dispatch = useDispatch();

  const { products } = useSelector(state => state.product);

  const [product, setProduct] = useState(products[0]);

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    setProductID(id);
  }, [id]);

  useEffect(() => {
    dispatch(getCart());
  }, [id]);

  const [productID, setProductID] = useState(products[0].id);

  const handleAddCart = product => {
    dispatch(addCart(product));
  };

  const handleGotoStep = step => {
    // dispatch(onGotoStep(step));
  };

  const handleFilterName = filterName => {
    setFilterName(filterName);
  };

  const findNewProductID = filterName => {
    if (filterName.length > 5) {
      let newProduct = products.find(item => item.name === filterName);

      if (newProduct) {
        setProductID(newProduct.id);
      }
    }
    return;
  };

  useEffect(() => {
    findNewProductID(filterName);
  }, [filterName]);

  useEffect(() => {
    let newProduct = products.find(item => item.id === productID);
    setProduct(newProduct);
  }, [productID, products]);

  return (
    <>
      <div className='flex flex-col w-full items-start gap-10'>
        <div className='lg:w-1/2 w-full mx-auto'>
          <ProductSearchBar
            filterName={filterName}
            onFilterName={handleFilterName}
          />
        </div>

        <div>
          <Box sx={{ p: 2, maxHeight: 80 * 8 }}>
            <Grid container>
              <Grid item xs={12} md={6} lg={7}>
                <img
                  className='rounded h-full'
                  width='100%'
                  src={product.cover}
                  alt=''
                />
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <ProductDetails
                  product={product}
                  onAddCart={handleAddCart}
                  onGotoStep={handleGotoStep}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default NewOrderComp;
