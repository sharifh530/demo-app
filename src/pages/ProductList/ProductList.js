import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import ProductListComp from '../../sections/ProductListComp/ProductListComp';

const ProductList = () => {
  return (
    <DashboardLayout>
      <ProductListComp />
    </DashboardLayout>
  );
};

export default ProductList;
