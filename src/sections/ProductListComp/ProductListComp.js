import { useEffect, useState } from 'react';

import {
  Box,
  Card,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from '@mui/material';

import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TableSkeleton,
} from '../../components/table';
import { useSelector } from '../../redux/store';
import ProductTableRow from './ProductTableRow';

import { useHistory } from 'react-router-dom';
import routePath from '../../routes/routePath';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Product', align: 'left' },
  { id: 'createdAt', label: 'Create at', align: 'left' },
  { id: 'inventoryType', label: 'Status', align: 'center', width: 180 },
  { id: 'price', label: 'Price', align: 'right' },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function ProductListComp() {
  const history = useHistory();
  const { products, isLoading } = useSelector(state => state.product);

  const [tableData, setTableData] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [order, setOrder] = useState('asc');

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onSort = id => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const onChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  useEffect(() => {
    if (products.length) {
      setTableData(products);
    }
  }, [products]);

  const handleDeleteRow = id => {
    const deleteRow = tableData.filter(row => row.id !== id);
    setTableData(deleteRow);
  };

  const handleOpenRow = id => {
    history.push(`${routePath.NEW_ORDER}/${id}`);
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
  });

  const isNotFound =
    !dataFiltered.length || (!isLoading && !dataFiltered.length);

  return (
    <Card>
      <TableContainer sx={{ minWidth: 960, position: 'relative' }}>
        <Table size='medium'>
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={TABLE_HEAD}
            rowCount={tableData.length}
            onSort={onSort}
          />

          <TableBody>
            {(isLoading ? [...Array(rowsPerPage)] : dataFiltered)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) =>
                row ? (
                  <ProductTableRow
                    key={row.id}
                    row={row}
                    onDeleteRow={() => handleDeleteRow(row.id)}
                    onOpenRow={() => handleOpenRow(row.id)}
                  />
                ) : (
                  !isNotFound && <TableSkeleton key={index} />
                )
              )}

            <TableEmptyRows
              emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
            />

            <TableNoData isNotFound={isNotFound} />
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ position: 'relative' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component='div'
          count={dataFiltered.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

function applySortFilter({ tableData, comparator, filterName }) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map(el => el[0]);

  if (filterName) {
    tableData = tableData.filter(
      item => item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return tableData;
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function emptyRows(page, rowsPerPage, arrayLength) {
  return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}
