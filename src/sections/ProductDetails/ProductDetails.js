import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';

import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { FormProvider, RHFSelect } from '../../components/hook-form';
import { fCurrency, fShortenNumber } from '../../utils/formatNumber';
import { useMemo } from 'react';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up(1368)]: {
    padding: theme.spacing(5, 8),
  },
}));

export default function ProductDetails({
  // cart,
  product,
  onAddCart,
  onGotoStep,
  ...other
}) {
  const {
    name,
    sizes,
    price,
    status,
    available,
    priceSale,
    totalRating,
    totalReview,
    inventoryType,
  } = product;

  const defaultValues = useMemo(
    () => ({
      id: product?.id,
      name: product?.name,
      cover: product?.cover,
      available: product?.available,
      price: product?.price,
      size: product?.sizes,
      quantity: product?.available < 1 ? 0 : 1,
    }),
    [product]
  );

  const methods = useForm({
    defaultValues,
  });

  const { watch, setValue, handleSubmit } = methods;

  const values = watch();

  const onSubmit = async data => {
    try {
      const cartData = {
        name: product.name,
        id: product.id,
        cover: product.cover,
        available: product?.available,
        price: product?.price,
        quantity: values.quantity,
        subtotal: product.price * values.quantity,
      };
      onAddCart(cartData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCart = async product => {
    try {
      const cartData = {
        name: product.name,
        id: product.id,
        cover: product.cover,
        available: product?.available,
        price: product?.price,
        quantity: values.quantity,
        subtotal: product.price * values.quantity,
      };
      onAddCart(cartData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootStyle {...other}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <h1>{inventoryType || ''}</h1>

        <Typography
          variant='overline'
          sx={{
            mt: 2,
            mb: 1,
            display: 'block',
            color: status === 'sale' ? 'error.main' : 'info.main',
          }}
        >
          {status}
        </Typography>

        <Typography variant='h5' paragraph>
          {name}
        </Typography>

        <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 2 }}>
          <Rating value={totalRating} precision={0.1} readOnly />
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(totalReview)}
            reviews)
          </Typography>
        </Stack>

        <Typography variant='h4' sx={{ mb: 3 }}>
          <Box
            component='span'
            sx={{ color: 'text.disabled', textDecoration: 'line-through' }}
          >
            {priceSale && fCurrency(priceSale)}
          </Box>
          &nbsp;{fCurrency(price)}
        </Typography>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction='row' justifyContent='space-between' sx={{ my: 3 }}>
          <Typography variant='subtitle1' sx={{ mt: 2 }}>
            Size
          </Typography>

          <RHFSelect
            name='size'
            size='small'
            fullWidth={false}
            FormHelperTextProps={{
              sx: { textAlign: 'right', margin: 0, mt: 1 },
            }}
            helperText={
              <Link underline='always' color='text.secondary'>
                Size Chart
              </Link>
            }
          >
            {sizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </RHFSelect>
        </Stack>

        <Stack direction='row' justifyContent='space-between' sx={{ mb: 3 }}>
          <Typography variant='subtitle1' sx={{ mt: 0.5 }}>
            Quantity
          </Typography>

          <div>
            <Incrementer
              name='quantity'
              quantity={values.quantity}
              available={available}
              onIncrementQuantity={() =>
                setValue('quantity', values.quantity + 1)
              }
              onDecrementQuantity={() =>
                setValue('quantity', values.quantity - 1)
              }
            />
            <Typography
              variant='caption'
              component='div'
              sx={{ mt: 1, textAlign: 'right', color: 'text.secondary' }}
            >
              Available: {available}
            </Typography>
          </div>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction='row' spacing={2} sx={{ mt: 5 }}>
          <Button
            fullWidth
            size='large'
            color='warning'
            variant='contained'
            startIcon={<Icon icon={'ic:round-add-shopping-cart'} />}
            onClick={() => handleAddCart(product)}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Add to Cart
          </Button>

          <Button fullWidth size='large' type='submit' variant='contained'>
            Buy Now
          </Button>
        </Stack>
      </FormProvider>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function Incrementer({
  available,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
}) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey.50032',
      }}
    >
      <IconButton
        size='small'
        color='inherit'
        disabled={quantity <= 1}
        onClick={onDecrementQuantity}
      >
        <Icon icon={'eva:minus-fill'} width={14} height={14} />
      </IconButton>

      <Typography
        variant='body2'
        component='span'
        sx={{ width: 40, textAlign: 'center' }}
      >
        {quantity}
      </Typography>

      <IconButton
        size='small'
        color='inherit'
        disabled={quantity >= available}
        onClick={onIncrementQuantity}
      >
        <Icon icon={'eva:plus-fill'} width={14} height={14} />
      </IconButton>
    </Box>
  );
}
