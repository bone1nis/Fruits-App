import { lazy, ReactElement, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { useAppDispatch } from '../../hooks/hooks.ts';
import { fetchFruits } from '../../store/fruitsSlice.ts';

import AppHeader from '../appHeader/AppHeader.tsx';
import AppFooter from '../appFooter/AppFooter.tsx';

const SingleFruitPage = lazy(() => import('../../pages/singleFruitPage/SingleFruitPage.tsx'));
const MainPage = lazy(() => import('../../pages/mainPage/MainPage.tsx'));
const CreateProductPage = lazy(() => import("../../pages/createProductPage/CreateProductPage.tsx"))

const App = (): ReactElement => {

  const dispatch = useAppDispatch();

  useEffect(() => {
          dispatch(fetchFruits());
  },[dispatch]);

  return (
    <BrowserRouter>
    <div className="app">
      <AppHeader />
      <main className='main'>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/products" element={<MainPage />} />
          <Route path="/products/:fruitId" element={<SingleFruitPage />} />
          <Route path="/create-product" element={<CreateProductPage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
    </BrowserRouter>
  );
}

export default App;
