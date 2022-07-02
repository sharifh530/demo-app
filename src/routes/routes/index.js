import React from 'react';
import routePath from '../routePath';

const routes = [
  {
    path: routePath.NEW_ORDER,
    exact: true,
    component: React.lazy(() => import('../../pages/NewOrder/NewOrder')),
  },
  {
    path: `${routePath.NEW_ORDER}/:id`,
    exact: true,
    component: React.lazy(() => import('../../pages/NewOrder/NewOrder')),
  },
  {
    path: routePath.ORDER_LIST,
    exact: true,
    component: React.lazy(() => import('../../pages/OrderList/OrderList')),
  },
  {
    path: routePath.PRODUCT_LIST,
    exact: true,
    component: React.lazy(() => import('../../pages/ProductList/ProductList')),
  },
];

export default routes;
