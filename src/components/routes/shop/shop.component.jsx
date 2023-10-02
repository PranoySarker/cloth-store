import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/product.context';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </>
  );
};

export default Shop;
