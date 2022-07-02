import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Table,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  IconButton,
  TableContainer,
  Avatar,
} from '@mui/material';
import TableHeadCustom from '../../components/table/TableHeadCustom';
import { fCurrency } from '../../utils/formatNumber';
import { Icon } from '@iconify/react';
// utils
// components

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'product', label: 'Product' },
  { id: 'quantity', label: 'Quantity' },
  { id: 'price', label: 'Price' },
  { id: 'totalPrice', label: 'Total Price', align: 'right' },
  { id: '' },
];

const IncrementerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(0.5),
  padding: theme.spacing(0.5, 0.75),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.grey[500_32]}`,
}));

export default function CheckoutProductList({
  products,
  onDelete,
  subTotal,
  totalItems,
}) {
  return (
    <TableContainer sx={{ minWidth: 720 }}>
      <Table>
        <TableHeadCustom headLabel={TABLE_HEAD} />

        <TableBody>
          {products.map(row => (
            <CheckoutProductListRow
              key={row.id}
              row={row}
              onDelete={() => onDelete(row.id)}
            />
          ))}
          <TableRow>
            <TableCell></TableCell>
            <TableCell>{totalItems}pcs</TableCell>
            <TableCell></TableCell>
            <TableCell align='right'>${subTotal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function CheckoutProductListRow({ row, onDelete }) {
  const { name, size, price, cover, quantity, subtotal } = row;

  return (
    <TableRow>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={cover} />

        <Stack spacing={1}>
          <Typography
            noWrap
            variant='subtitle2'
            sx={{ maxWidth: 240, marginLeft: 2 }}
          >
            {name}
          </Typography>
        </Stack>
      </TableCell>

      <TableCell>{quantity}</TableCell>

      <TableCell>{fCurrency(price)}</TableCell>

      <TableCell align='right'>{fCurrency(subtotal)}</TableCell>

      <TableCell align='right'>
        <IconButton onClick={onDelete}>
          <Icon icon={'eva:trash-2-outline'} width={20} height={20} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
