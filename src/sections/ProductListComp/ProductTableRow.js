import { Icon } from '@iconify/react';
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import { TableMoreMenu } from '../../components/table';
import { fCurrency } from '../../utils/formatNumber';

export default function ProductTableRow({ row, onOpenRow, onDeleteRow }) {
  const { name, createdAt, inventoryType, price } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = event => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover>
      <TableCell>
        <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
      </TableCell>

      <TableCell>{moment(createdAt).format('MMM Do YY')}</TableCell>

      <TableCell align='center'>
        <Typography sx={{ textTransform: 'capitalize' }}>
          {inventoryType}
        </Typography>
      </TableCell>

      <TableCell align='right'>{fCurrency(price)}</TableCell>

      <TableCell align='right'>
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onOpenRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'success.main' }}
              >
                <Icon icon={'bxs:folder-open'} />
                Open
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Icon icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
