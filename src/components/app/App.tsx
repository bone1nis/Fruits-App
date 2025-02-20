import { lazy, ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import AppHeader from "../appHeader/AppHeader.tsx";
import AppFooter from "../appFooter/AppFooter.tsx";

const SingleFruitPage = lazy(
  () => import("../../pages/singleFruitPage/SingleFruitPage.tsx")
);
const MainPage = lazy(() => import("../../pages/mainPage/MainPage.tsx"));
const CreateProductPage = lazy(
  () => import("../../pages/createProductPage/CreateProductPage.tsx")
);

const App = (): ReactElement => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app">
        <AppHeader />
        <main className="main">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/products" element={<MainPage />} />
            <Route
              path="/products/:fruitId"
              element={<SingleFruitPage editMode={false} />}
            />
            <Route
              path="/products/:fruitId/edit"
              element={<SingleFruitPage editMode={true} />}
            />
            <Route path="/create-product" element={<CreateProductPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
