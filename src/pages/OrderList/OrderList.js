import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Card,
  Button,
  CardHeader,
  Typography,
  styled,
} from '@mui/material';

import { Icon } from '@iconify/react';
import CheckoutProductList from '../../sections/OrderProductList/OrderProductList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../redux/store';
import {
  decreaseQuantity,
  deleteCart,
  increaseQuantity,
} from '../../redux/slices/products';
import DashboardLayout from '../../layouts/DashboardLayout';
import routePath from '../../routes/routePath';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
}));

export default function CheckoutCart() {
  const dispatch = useDispatch();

  const { checkout } = useSelector(state => state.product);

  const { cart } = checkout;

  let subTotal = 0;
  let totalItems = 0;

  cart.map(item => {
    subTotal += item.subtotal;
    totalItems += item.quantity;
  });

  const isEmptyCart = cart.length === 0;

  const handleDeleteCart = productId => {
    console.log(productId);
    dispatch(deleteCart(productId));
  };

  return (
    <DashboardLayout>
      <Card sx={{ mb: 3 }}>
        <CardHeader
          title={
            <Typography variant='h6'>
              Cart
              <Typography component='span' sx={{ color: 'text.secondary' }}>
                &nbsp;({totalItems} item)
              </Typography>
            </Typography>
          }
          sx={{ mb: 3 }}
        />

        {!isEmptyCart ? (
          <CheckoutProductList
            products={cart}
            onDelete={handleDeleteCart}
            subTotal={subTotal}
            totalItems={totalItems}
          />
        ) : (
          <>
            <RootStyle>
              <Typography variant='h5' gutterBottom>
                Cart is empty
              </Typography>
            </RootStyle>
          </>
        )}
      </Card>

      <Button
        color='inherit'
        component={RouterLink}
        startIcon={<Icon icon={'eva:arrow-ios-back-fill'} />}
        to={routePath.PRODUCT_LIST}
      >
        Continue Shopping
      </Button>

      <Button
        fullWidth
        size='large'
        type='submit'
        variant='contained'
        disabled={cart.length === 0}
      >
        Check Out
      </Button>
    </DashboardLayout>
  );
}
