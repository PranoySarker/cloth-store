import React from 'react';
import Home from './components/routes/home/home.component';
import { Outlet, Route, Routes } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div>
        <h1>THis is Navigation</h1>
      </div>
      <Outlet />
    </>
  );
};

const Shop = () => {
  return (
    <>
      <h1>THis is Shop</h1>
    </>
  );
};
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;